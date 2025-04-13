
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Monitor, Layers, FileSpreadsheet, Users, Target } from 'lucide-react';

interface AdvantageItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Advantages = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const advantages: AdvantageItem[] = [
    {
      id: 1,
      title: "Intuitividade",
      description: "Fácil de usar e configurar, sem a necessidade de conhecimento técnico.",
      icon: <Monitor className="w-12 h-12 text-vdchat-blue" />
    },
    {
      id: 2,
      title: "Integração Multi-Canais",
      description: "Integrado com os principais canais de atendimento como WhatsApp, Messenger, Instagram, pop-ups no site e até chamadas telefônicas, o VD Chat permite que você se conecte com seus clientes de forma prática e automática.",
      icon: <Layers className="w-12 h-12 text-vdchat-blue" />
    },
    {
      id: 3,
      title: "Integração Com Múltiplas Ferramentas",
      description: "Os dados dos leads qualificados são enviados automaticamente para sua equipe ou para sistemas como CRMs, planilhas ou automações — facilitando o próximo contato.",
      icon: <FileSpreadsheet className="w-12 h-12 text-vdchat-blue" />
    },
    {
      id: 4,
      title: "Contato Personalizado",
      description: "Baseado no perfil do seu cliente, buscamos e entramos em contato com os leads para você.",
      icon: <Users className="w-12 h-12 text-vdchat-blue" />
    },
    {
      id: 5,
      title: "Captação de Leads via ADS",
      description: "Integração direta com ferramentas de anúncios como Facebook e Google ADS para captação eficaz de leads.",
      icon: <Target className="w-12 h-12 text-vdchat-blue" />
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % advantages.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, advantages.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveSlide((prev) => (prev - 1 + advantages.length) % advantages.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveSlide((prev) => (prev + 1) % advantages.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveSlide(index);
  };

  return (
    <section id="advantages" className="py-2 bg-vdchat-black text-white">
      <div className="section-container">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-vdchat-blue to-vdchat-lightblue">
          Nossas Vantagens
        </h2>
        <p className="section-subtitle text-gray-300">
          Descubra como o VD Chat pode transformar seu processo de vendas e atendimento
        </p>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {advantages.map((advantage) => (
                <div 
                  key={advantage.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card p-8 md:p-12 h-full">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="bg-white/5 p-6 rounded-full">
                        {advantage.icon}
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-vdchat-blue to-vdchat-lightblue">
                          {advantage.title}
                        </h3>
                        <p className="text-lg text-gray-300">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 bg-vdchat-blue/80 hover:bg-vdchat-blue text-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 bg-vdchat-blue/80 hover:bg-vdchat-blue text-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index 
                    ? 'bg-vdchat-blue w-6' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
