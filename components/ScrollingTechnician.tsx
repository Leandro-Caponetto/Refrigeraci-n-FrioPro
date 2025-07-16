import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';

// Lottie animation data URL
const animationDataUrl = 'https://lottie.host/a8a1f8b6-3a3f-4e6f-8533-3174c84d72d2/r7mF43zXDa.json';

const ScrollingTechnician = () => {
    const lottieRef = useRef<any>(null);
    const [animationJSON, setAnimationJSON] = useState(null);
    const [isLottieReady, setIsLottieReady] = useState(false);

    // Fetch the Lottie animation data from the URL
    useEffect(() => {
        const fetchAnimationData = async () => {
            try {
                const response = await fetch(animationDataUrl);
                const data = await response.json();
                setAnimationJSON(data);
            } catch (error) {
                console.error('Error fetching Lottie animation:', error);
            }
        };

        fetchAnimationData();
    }, []);

    // Effect for controlling the animation frame based on scroll position
    useEffect(() => {
        if (!isLottieReady) return; // Wait for Lottie to be ready

        const handleScroll = () => {
            if (lottieRef.current) {
                const totalFrames = lottieRef.current.getDuration(true);
                if (totalFrames === 0) return; // Guard against duration not being ready

                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPosition = window.scrollY;
                const scrollFraction = scrollHeight > 0 ? scrollPosition / scrollHeight : 0;
                
                const frameToGo = totalFrames * scrollFraction;
                
                lottieRef.current.goToAndStop(frameToGo, true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Set initial frame right away
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLottieReady]);

    if (!animationJSON) {
        return null;
    }

    return (
        <div className="hidden md:block fixed bottom-4 left-4 z-30 w-48 h-48 pointer-events-none" aria-hidden="true">
            <Lottie
                lottieRef={lottieRef}
                animationData={animationJSON}
                loop={false}
                autoplay={false}
                onDOMLoaded={() => setIsLottieReady(true)}
            />
        </div>
    );
};

export default ScrollingTechnician;
