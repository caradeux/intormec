Using the coolify-enhanced MCP server, deploy a full-stack Node.js application on my Coolify server.

PROJECT CONFIGURATION:
- GitHub repository: [https://github.com/caradeux/intormec]
- Project name: [Intormec]
- Branch: [RAMA] (default: main)
- Framework: rellenar segun corresponda
- Build using the Dockerfile in the repository
- Application internal port: 3000

DEPLOYMENT STRATEGY:
1. Create the application in Coolify using the GitHub repository
2. Configure environment variables for all services
3. Deploy PostgreSQL, Redis, and any other required services
4. Deploy the main application
5. Configure port mapping: 3001:3000 (or next available port)
6. Verify the application is accessible on the local network

SUPPORTING SERVICES (all internal, no public exposure):
- PostgreSQL database: [NOMBRE]_db
  - Generate secure credentials
  - Provide internal connection URL
- Redis cache: [NOMBRE]_cache
  - Generate secure password
  - Provide internal connection URL
- MinIO storage (optional): [NOMBRE]_storage
  - Generate secure access keys
  - Provide internal endpoint

ENVIRONMENT VARIABLES:
- NODE_ENV=production
- PORT=3000
- NEXT_TELEMETRY_DISABLED=1
- DATABASE_URL=[postgres connection string]
- REDIS_URL=[redis connection string]
- [Any additional app-specific variables]

NETWORKING CONFIGURATION:
- Ports Mapping: [AUTO_DETECT_PORT]:3000
  - IMPORTANT: Automatically detect the next available port starting from 3001
  - Check existing applications and their port mappings to avoid conflicts
  - Suggested port range: 3001-3099 (reserve 3000 for internal use only)
  - Verify the selected port is not in use before applying
  - Document the assigned port clearly in the deployment summary
- Network: coolify (internal Docker network)
- Restart policy: unless-stopped

PORT DETECTION STRATEGY:
1. List all existing applications in Coolify
2. Check their port mappings to identify used ports
3. Start checking from port 3001
4. Find the first available port in range 3001-3099
5. Verify with: Check if any container is using the port
6. Assign the available port to this application
7. Document: "Application assigned to port [DETECTED_PORT]"

CLOUDFLARE TUNNEL CONFIGURATION:
After deployment, provide these exact instructions for manual Cloudflare Tunnel setup:

Hostname Configuration:
- Subdomain: (empty for root domain, or specify subdomain)
- Domain: [intormec.cl]
- Path: (empty)

Service Configuration:
- Type: HTTP (NOT HTTPS)
- URL: http://[192.168.1.89]:[ASSIGNED_PORT]
  Example: http://192.168.1.89:3001

Important Notes:
- Use HTTP (not HTTPS) for the tunnel connection
- Use the server's local network IP address
- Cloudflare handles HTTPS for public access automatically

POST-DEPLOYMENT TASKS:
1. Document the assigned port clearly
2. Verify application is running: docker ps | grep [container_id]
3. Check logs: docker logs [container_id]
4. Verify port is accessible: curl http://localhost:[ASSIGNED_PORT]
5. Test local network access: http://[192.168.1.89]:[ASSIGNED_PORT]
6. List all port mappings for reference
7. Provide Cloudflare Tunnel configuration instructions with the correct port
8. Create deployment summary document with:
   - Application details and container ID
   - ASSIGNED PORT NUMBER (clearly highlighted)
   - Database credentials and connection strings
   - Complete port mappings table showing all applications
   - Cloudflare Tunnel configuration steps with correct port
   - Verification commands
VALIDACION
1. Usa el mcp de chromedevtools para levantar el sitio y verificar todos los links 