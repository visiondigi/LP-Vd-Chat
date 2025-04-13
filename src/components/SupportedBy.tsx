
import React from 'react';

interface Supporter {
  id: number;
  name: string;
  imageUrl: string;
  websiteUrl: string;
}

const SupportedBy = () => {
  const supporters: Supporter[] = [
    {
      id: 1,
      name: "Sprint-CP: UTFPR: Incubadora da UTFPR de Cornélio Procópio",
      imageUrl: "https://sprint.td.utfpr.edu.br/wp-content/uploads/2023/08/Captura-de-tela-2023-08-17-112626.jpg",
      websiteUrl: "https://sprint.td.utfpr.edu.br/"
    },
    {
      id: 2,
      name: "Microsoft For Startups",
      imageUrl: "https://buckleyplanet.com/wp-content/uploads/2023/07/fh.jpg",
      websiteUrl: "https://www.microsoft.com/pt-br/startups/"
    }
  ];

  return (
    <section id="supported-by" className="py-20 bg-vdchat-black text-white">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vdchat-blue to-vdchat-lightblue">Apoiado</span> por
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Parceiros que acreditam e impulsionam a inovação do VD Chat
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {supporters.map((supporter) => (
            <div key={supporter.id} className="flex flex-col items-center">
              <a 
                href={supporter.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full transition-all duration-300 hover:opacity-90"
              >
                <div className="glass-card overflow-hidden h-48 flex items-center justify-center p-6">
                  <img 
                    src={supporter.imageUrl} 
                    alt={supporter.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-gray-300">{supporter.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
