import { useState } from 'react';
import { Loader2, Linkedin, Facebook, Instagram, X } from 'lucide-react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
}

interface FormErrors {
  nome?: string;
  telefone?: string;
  email?: string;
}

const WaitlistForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    const phoneRegex = /^([1-9]{2})[0-9]{9}$/;
    const phoneDigitsOnly = formData.telefone.replace(/\D/g, '');
    if (!phoneRegex.test(phoneDigitsOnly)) {
      newErrors.telefone = "Telefone deve ter DDD válido e 9 dígitos";
    }

    if (!formData.email.includes('@')) {
      newErrors.email = "Email deve conter @";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      const digits = value.replace(/\D/g, '');
      let formattedValue = '';
      if (digits.length <= 2) {
        formattedValue = digits;
      } else if (digits.length <= 11) {
        formattedValue = `${digits.slice(0, 2)}${digits.slice(2)}`;
      } else {
        formattedValue = `${digits.slice(0, 2)}${digits.slice(2, 11)}`;
      }

      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us2.make.com/ejhc3vgf7jhjokzsgai6f4r942ej7vdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          telefone: parseInt(formData.telefone.replace(/\D/g, '')),
          email: formData.email
        }),
      });

      if (response.ok) {
        // Abre o modal em tela cheia
        setModalVisible(true);
        setFormData({
          nome: '',
          telefone: '',
          email: ''
        });
      } else {
        throw new Error('Falha ao enviar o formulário');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-2 bg-gradient-to-b from-vdchat-black to-vdchat-darkgray text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">
            Entre na Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-vdchat-blue to-vdchat-lightblue">Lista de Espera</span>
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Seja um dos primeiros a experimentar o VD Chat e revolucione seu processo de vendas
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.nome ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-vdchat-blue text-white`}
                  placeholder="Seu nome"
                />
                {errors.nome && <p className="mt-1 text-sm text-red-500">{errors.nome}</p>}
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-200 mb-1">
                  Telefone
                </label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.telefone ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-vdchat-blue text-white`}
                  placeholder="DDD + número (ex: 11999999999)"
                />
                {errors.telefone && <p className="mt-1 text-sm text-red-500">{errors.telefone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-vdchat-blue text-white`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <span>Enviar</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 relative max-w-md w-full text-center">
            {/* Botão de fechar */}
            <button
              onClick={() => setModalVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-vdchat-darkgray">
              Você foi incluído na Lista de Espera!
            </h3>
            <p className="mb-6 text-gray-700">Obrigado por se inscrever. Enquanto isso, siga a gente nas redes sociais abaixo:</p>
            {/* Ícones de Redes Sociais */}
            <div className="flex items-center justify-center gap-4">
              <a href="http://www.linkedin.com/company/vision-digi" target="_blank" rel="noopener noreferrer" className="text-vdchat-blue hover:text-vdchat-lightblue">
                <Linkedin size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574495844983" target="_blank" rel="noopener noreferrer" className="text-vdchat-blue hover:text-vdchat-lightblue">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/_vdchat" target="_blank" rel="noopener noreferrer" className="text-vdchat-blue hover:text-vdchat-lightblue">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WaitlistForm;
