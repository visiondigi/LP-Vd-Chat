
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import WaitlistForm from '@/components/WaitlistForm';
import SupportedBy from '@/components/SupportedBy';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the title
    document.title = 'VD Chat - IA para Captação de Leads e Vendas';
    
    // Add a meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'VD Chat é a IA que cria seu próprio funcionário SDR 24/7, de forma intuitiva e personalizável para captação de leads e automatização de vendas.');
    }
  }, []);

  return (
    <div className="bg-vdchat-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <Advantages />
      <SupportedBy />
      <WaitlistForm />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
