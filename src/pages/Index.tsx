
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
    document.title = 'VD Chat';
    
    // Add a meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'VD Chat');
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
