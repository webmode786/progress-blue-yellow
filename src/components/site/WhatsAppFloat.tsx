import { MessageCircle } from "lucide-react";
import { hasWhatsapp, whatsappLink } from "@/data/company";

export function WhatsAppFloat() {
  if (!hasWhatsapp) return null;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="bg-whatsapp pulse-ring fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle
        className="text-primary-foreground relative h-7 w-7"
        aria-hidden="true"
      />
    </a>
  );
}
