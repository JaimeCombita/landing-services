interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  siteOrigin?: string;
}

export function generateContactEmailHTML(data: ContactEmailData): string {
  const { name, email, phone, country, message, siteOrigin } = data;
  const normalizedPhone = phone.replace(/\D/g, '');
  const whatsappLink = normalizedPhone ? `https://wa.me/${normalizedPhone}` : '';
  const logoUrl = siteOrigin ? `${siteOrigin}/logo.png` : '';
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background: linear-gradient(135deg, #0A1A2F 0%, #1E90FF 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .header-logo {
            display: block;
            margin: 0 auto 12px;
            max-width: 72px;
            height: auto;
          }
          .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .field {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #1E90FF;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
          }
          .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #1E90FF;
            border-radius: 4px;
          }
          .whatsapp-link {
            display: inline-block;
            margin-top: 8px;
            color: #128C7E;
            text-decoration: none;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${logoUrl ? `<img src="${logoUrl}" alt="Logo JC Engine" class="header-logo" />` : ''}
            <h2 style="margin: 0;">📧 Nuevo Mensaje desde tu Landing</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Nombre:</span>
              <span class="value">${name}</span>
            </div>
            <div class="field">
              <span class="label">📧 Email:</span>
              <span class="value">${email}</span>
            </div>
            <div class="field">
              <span class="label">📱 Teléfono:</span>
              <span class="value">${phone}</span>
              ${whatsappLink ? `<br/><a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="whatsapp-link">Abrir chat en WhatsApp</a>` : ''}
            </div>
            <div class="field">
              <span class="label">🌍 País:</span>
              <span class="value">${country}</span>
            </div>
            <div class="field">
              <span class="label">💬 Mensaje:</span>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateContactEmailSubject(name: string): string {
  return `Nuevo mensaje de ${name}`;
}
