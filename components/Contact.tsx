import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const recipientEmail = 'caponettopeppers@gmail.com';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Mensaje de ${name} desde FríoPro`);
        const body = encodeURIComponent(
            `Has recibido un nuevo mensaje a través del formulario de contacto de FríoPro:\n\n` +
            `Nombre: ${name}\n` +
            `Correo electrónico: ${email}\n\n` +
            `Mensaje:\n${message}`
        );
        
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4">Contactanos</h2>
                    <p className="text-lg text-brand-gray">
                        ¿Tenés alguna pregunta o querés agendar un servicio? Completá el formulario y nos pondremos en contacto.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-brand-gray">Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-3 bg-brand-gray-light/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-gray">Tu Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-3 bg-brand-gray-light/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                                placeholder="ejemplo@correo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-brand-gray">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="mt-1 block w-full px-4 py-3 bg-brand-gray-light/50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                                placeholder="Describí tu consulta o el servicio que necesitás..."
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-brand-blue hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all duration-300"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
