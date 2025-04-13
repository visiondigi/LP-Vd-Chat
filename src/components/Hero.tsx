
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        
        parallaxElements.forEach((element, index) => {
          const speed = index * 0.2 + 0.2;
          const yPos = scrollPosition * speed;
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAdvantages = () => {
    const advantagesSection = document.getElementById('advantages');
    if (advantagesSection) {
      advantagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden dark-gradient-bg"
    >
      {/* Decorative elements (parallax effect) */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-vdchat-blue/20 blur-xl parallax" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-vdchat-lightblue/20 blur-xl parallax" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-vdchat-accent/10 blur-lg parallax" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center animate-fade-in ${isMobile ? 'pt-32' : ''}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Bem-vindo ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-vdchat-blue to-vdchat-lightblue">VD Chat</span>
          </h1>
          
          <div className="mt-8 mb-12 text-lg md:text-xl text-gray-200 space-y-4">
            <p>
              VD Chat é a IA que cria seu próprio funcionário SDR 24/7, de forma intuitiva, personalizável e sem que seja necessário ter conhecimento técnico.
            </p>
            <p>
              Pronta para atuar de maneira humanizada na captação de leads, no atendimento inicial, na prospecção e na análise de dados, a VD Chat oferece uma experiência interativa e inteligente.
            </p>
            <p>
              Automatize seu funil de vendas com eficiência, inovação e múltiplas integrações, criando uma conexão real com seus futuros clientes.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mt-10">
            <a href="#waitlist" className="btn-primary">
              Entrar na Lista de Espera
            </a>
            <button 
              onClick={scrollToAdvantages} 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Descobrir Mais
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={scrollToAdvantages}
      >
        <ChevronDown className="text-white/70 cursor-pointer hover:text-white transition-colors" size={32} />
      </div>
    </div>
  );
};

export default Hero;
