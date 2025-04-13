
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-vdchat-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img 
            src="https://67f80761a3147b42d989bd00--celebrated-malabi-599b67.netlify.app/galeria/vdchat.png" 
            alt="VD Chat Logo" 
            className="h-12 mb-6"
          />
          
          <div className="flex gap-x-8 mb-8">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-vdchat-blue transition-colors"
            >
              Início
            </a>
            <a 
              href="#advantages" 
              className="text-gray-400 hover:text-vdchat-blue transition-colors"
            >
              Vantagens
            </a>
            <a 
              href="#waitlist" 
              className="text-gray-400 hover:text-vdchat-blue transition-colors"
            >
              Lista de Espera
            </a>
            <a 
              href="#team" 
              className="text-gray-400 hover:text-vdchat-blue transition-colors"
            >
              Criadores
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-vdchat-blue/20 hover:bg-vdchat-blue/40 p-3 rounded-full mb-8 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="text-vdchat-blue" size={24} />
          </button>
          
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} VD Chat. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              IA revolucionando o atendimento e as vendas. Em breve disponível para sua empresa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
