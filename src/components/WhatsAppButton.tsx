import React from 'react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '56989927030';
    const message = 'Hola, quiero hacer una consulta';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
            {/* Tooltip Label */}
            <span className="mr-3 bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium shadow-2xl opacity-0 -translate-x-4 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible transition-all duration-300 whitespace-nowrap border border-white/10 pointer-events-none peer-hover:opacity-100 peer-hover:translate-x-0 peer-hover:visible">
                ¿En qué podemos ayudarte?
            </span>

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="peer flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-500 animate-float animate-pulse-green group overflow-hidden"
                aria-label="Escríbenos por WhatsApp"
                title="Escríbenos por WhatsApp"
            >
                {/* Subtle Shine Effect Inside */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <svg
                    viewBox="0 0 448 512"
                    className="w-9 h-9 fill-current relative z-10 drop-shadow-md"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 446.6c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.7 184.6-184.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
