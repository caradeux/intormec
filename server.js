import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'reseller14.prodns.cl',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true para puerto 465
  auth: {
    user: process.env.SMTP_USER || 'contacto@intormec.cl',
    pass: process.env.SMTP_PASSWORD // Se configurará en Coolify
  }
});

// Verificar conexión SMTP al iniciar
transporter.verify((error, success) => {
  if (error) {
    console.error('Error al conectar con el servidor SMTP:', error);
  } else {
    console.log('Servidor SMTP listo para enviar correos');
  }
});

// Endpoint para enviar correos
app.post('/api/contact', async (req, res) => {
  try {
    const { nombre, email, telefono, servicio, mensaje } = req.body;

    // Validación básica
    if (!nombre || !email || !telefono || !mensaje) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos obligatorios deben ser completados' 
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'El formato del email no es válido' 
      });
    }

    // Configurar el correo
    const mailOptions = {
      from: `"Formulario Web INTORMEC" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Enviar a la misma cuenta
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${servicio || 'Consulta General'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #ea580c; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 3px solid #ea580c; }
            .footer { background: #1e293b; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔧 INTORMEC S.p.A.</h1>
              <p>Nuevo mensaje desde el formulario de contacto</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre Completo:</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Teléfono:</div>
                <div class="value"><a href="tel:${telefono}">${telefono}</a></div>
              </div>
              ${servicio ? `
              <div class="field">
                <div class="label">🛠️ Servicio de Interés:</div>
                <div class="value">${servicio}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">${mensaje.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este correo fue enviado desde el formulario de contacto de <strong>intormec.cl</strong></p>
              <p>Fecha: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nuevo mensaje de contacto - INTORMEC

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
${servicio ? `Servicio: ${servicio}\n` : ''}
Mensaje:
${mensaje}

---
Enviado desde intormec.cl
Fecha: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}
      `
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.' 
    });

  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor, intente nuevamente o contáctenos por teléfono.' 
    });
  }
});

// Servir la aplicación React en producción
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
