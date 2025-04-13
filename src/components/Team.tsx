
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
      description: "Founder",
      linkedinUrl: "https://www.linkedin.com/in/",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFnC56r0_Dzkg/profile-displayphoto-shrink_800_800/B4DZSdnROqHUAc-/0/1737811105087?e=1750291200&v=beta&t=yvn_f56o40jtDMjUkJBJ4qpXf1_yljpo2TOJjthwVlo"
    },
    {
      id: 2,
      name: "João Vitor Marques",
      description: "Founder",
      linkedinUrl: "https://www.linkedin.com/in/",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG_-f5F8Ee69Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701764082204?e=1750291200&v=beta&t=nfqaBFzOdotBSb1kNNegb5VMVfBzLqQfuDBKlehKb6M"
    },
    {
      id: 3,
      name: "Matheus Henrique",
      description: "Founder",
      linkedinUrl: "https://www.linkedin.com/in/",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFL9bmZM5RD7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720370366083?e=1750291200&v=beta&t=XLvoqu5vF6rmOmhM999Nn6KhGK0hc5qwje2wiTw9zrM"
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
