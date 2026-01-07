'use client';

import { whatsappButton, whatsappIcon } from '@/styles/components/whatsapp.css';

export default function WhatsAppButton() {
  const phoneNumber = '573142609413'; // Código de país + número
  const message = encodeURIComponent(
    '¡Hola! 👋 Me interesa conocer más sobre tus servicios de desarrollo de software y soluciones digitales. ¿Podrías brindarme más información?'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={whatsappButton}
      aria-label="Contactar por WhatsApp"
    >
      <svg
        className={whatsappIcon}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.488 2.038 7.812L.05 30.95l7.3-1.913A15.865 15.865 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25c-2.537 0-4.925-.712-6.95-1.95l-.5-.3-5.188 1.362 1.387-5.075-.325-.513A13.16 13.16 0 012.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25z" />
        <path d="M23.238 19.45c-.362-.188-2.15-1.063-2.488-1.188-.337-.125-.588-.187-.837.188-.25.375-1 1.187-1.225 1.437-.225.25-.45.275-.813.088-.362-.188-1.537-.563-2.925-1.8-1.075-.963-1.8-2.15-2.012-2.513-.213-.362-.025-.562.163-.738.15-.15.362-.4.538-.6.175-.2.237-.325.35-.562.113-.238.063-.45-.025-.625-.087-.175-.837-2.025-1.15-2.775-.3-.738-.612-.638-.837-.65-.213-.012-.462-.012-.712-.012-.25 0-.65.087-1 .45-.35.362-1.337 1.312-1.337 3.2 0 1.887 1.375 3.712 1.562 3.962.188.25 2.625 4.025 6.375 5.65.9.387 1.6.613 2.15.788.9.287 1.725.238 2.375.15.725-.1 2.15-.875 2.45-1.725.3-.85.3-1.575.213-1.725-.088-.15-.338-.238-.7-.425z" />
      </svg>
    </a>
  );
}
