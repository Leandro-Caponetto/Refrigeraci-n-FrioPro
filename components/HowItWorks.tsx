import React, { useEffect, useRef, useState } from 'react';

const useFadeInOnScroll = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isVisible };
};

const Step = ({ number, title, description, delay }: { number: number, title: string, description: string, delay: number }) => {
    const { ref, isVisible } = useFadeInOnScroll();
    return (
        <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="relative">
                <div className="mx-auto w-20 h-20 flex items-center justify-center bg-white border-4 border-brand-blue rounded-full text-brand-blue text-2xl font-bold shadow-lg">
                    {number}
                </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-gray-dark">{title}</h3>
            <p className="mt-2 text-brand-gray">{description}</p>
        </div>
    );
}

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4">Resolvé cualquier problema en 3 simples pasos</h2>
                    <p className="text-lg text-brand-gray">Nuestro proceso está diseñado para ser rápido, fácil y efectivo.</p>
                </div>
                <div className="relative">
                    {/* Dotted line for desktop */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300"></div>
                    <div className="grid md:grid-cols-3 gap-16 text-center relative">
                        <Step number={1} title="Describí el Síntoma" description="Contanos qué le pasa a tu equipo. ¿No enfría? ¿Hace ruido? Sé lo más detallado posible." delay={0} />
                        <Step number={2} title="Recibí el Diagnóstico" description="Nuestra IA analiza la información y te da un diagnóstico preciso y las posibles soluciones." delay={150} />
                        <Step number={3} title="Solucioná el Problema" description="Seguí nuestras guías para arreglarlo vos mismo o contactá a un técnico recomendado." delay={300} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;