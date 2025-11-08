
import React from 'react';
import { getWhatsAppUrl } from '../utils/env';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.21 4.389 4.462-1.171z M16.411 14.223c-.237-.119-1.404-.693-1.623-.772-.219-.078-.378-.118-.537.119-.159.237-.614.771-.753.929-.139.158-.278.178-.516.059-.238-.119-.995-.368-1.897-1.171-.703-.625-1.178-1.396-1.317-1.634-.139-.237-.019-.367.1-.486.108-.108.238-.277.357-.416.119-.139.158-.237.237-.396.079-.158.04-.277-.02-.396-.06-.119-.537-1.29-.736-1.758-.199-.467-.4-.406-.537-.415-.129-.009-.278-.009-.427-.009s-.397.04-.615.237c-.218.198-.834.811-.834 1.979s.854 2.301.973 2.46c.119.158 1.658 2.536 4.029 3.531.579.314 1.042.502 1.399.641.493.198.94.168 1.297.108.416-.07.915-.375 1.034-.735.119-.356.119-.661.08-.735-.04-.075-.158-.119-.396-.237z" />
  </svg>
);

const WhatsAppWidget: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 animate-bounce-gentle hover-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <WhatsAppIcon />
    </button>
  );
};

export default WhatsAppWidget;
