
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-vdchat-black/90 backdrop-blur-md shadow-lg py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://roaring-strudel-a4468e.netlify.app/img/logo.png" 
            alt="VD Chat Logo" 
            className="h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-vdchat-blue transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('advantages')} 
            className="text-white hover:text-vdchat-blue transition-colors"
          >
            Vantagens
          </button>
          <button 
            onClick={() => scrollToSection('waitlist')} 
            className="text-white hover:text-vdchat-blue transition-colors"
          >
            Lista de Espera
          </button>
          <button 
            onClick={() => scrollToSection('supported-by')} 
            className="text-white hover:text-vdchat-blue transition-colors"
          >
            Apoiadores
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="text-white hover:text-vdchat-blue transition-colors"
          >
            Criadores
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-vdchat-darkgray/95 backdrop-blur-lg">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white hover:text-vdchat-blue transition-colors py-2"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('advantages')} 
              className="text-white hover:text-vdchat-blue transition-colors py-2"
            >
              Vantagens
            </button>
            <button 
              onClick={() => scrollToSection('waitlist')} 
              className="text-white hover:text-vdchat-blue transition-colors py-2"
            >
              Lista de Espera
            </button>
            <button 
              onClick={() => scrollToSection('supported-by')} 
              className="text-white hover:text-vdchat-blue transition-colors py-2"
            >
              Apoiadores
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-white hover:text-vdchat-blue transition-colors py-2"
            >
              Criadores
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
