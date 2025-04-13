
import { Linkedin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  description: string;
  linkedinUrl: string;
  imageUrl: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Luiz Marçon",
      description: "Co-fundador e líder de desenvolvimento do VD Chat",
      linkedinUrl: "https://www.linkedin.com/in/",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
    },
    {
      id: 2,
      name: "João Vitor Marques",
      description: "Co-fundador e especialista em inteligência artificial",
      linkedinUrl: "https://www.linkedin.com/in/",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300"
    },
    {
      id: 3,
      name: "Matheus Henrique",
      description: "Co-fundador e líder de produto e estratégia",
      linkedinUrl: "https://www.linkedin.com/in/",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300"
    }
  ];

  return (
    <section id="team" className="py-20 bg-vdchat-darkgray text-white">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vdchat-blue to-vdchat-lightblue">Criadores</span> do VD Chat
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Conheça a equipe de inovadores por trás da tecnologia que está transformando o atendimento e as vendas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="glass-card p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-vdchat-blue/30">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300 text-center mb-4">{member.description}</p>
                
                <a 
                  href={member.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
