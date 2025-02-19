import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ setLoaded }) => {
    const [showContent, setShowContent] = useState(false);
    const [animationStep, setAnimationStep] = useState("initial");
    const [particlesVisible, setParticlesVisible] = useState(true);
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
            setLoaded(true);
        }, 7900);

        const sequence = [
            { step: "entrance", delay: 0 },
            { step: "slideLeft", delay: 1500 },
            { step: "showText", delay: 2000 },
            { step: "pulseAndGlow", delay: 3200 },
            { step: "energyBurst", delay: 4400 },
            { step: "centerLogo", delay: 5000 },
            { step: "moveToNavbar", delay: 6200 }
        ];

        sequence.forEach(({ step, delay }) =>
            setTimeout(() => setAnimationStep(step), delay)
        );

        setTimeout(() => setParticlesVisible(false), 6500);

        return () => clearTimeout(timer);
    }, [setLoaded]);

    const getResponsiveValues = () => {
        const isMobile = screenSize.width < 640;
        const isTablet = screenSize.width >= 640 && screenSize.width < 1024;
        
        return {
            logoSize: isMobile ? "h-16" : isTablet ? "h-20" : "h-24",
            slideOffset: isMobile ? -60 : isTablet ? -90 : -120,
            textOffset: isMobile ? 30 : isTablet ? 45 : 60,
            fontSize: isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl",
            paddingLeft: isMobile ? "pl-12" : isTablet ? "pl-16" : "pl-24",
            finalPosition: {
                x: isMobile ? "-38vw" : isTablet ? "-42vw" : "-45.8vw",
                y: isMobile ? "-48vh" : isTablet ? "-42vh" : "-47.5vh",
                scale: isMobile ? 0.9 : isTablet ? 0.5 : 0.6
            }
        };
    };

    const responsive = getResponsiveValues();

    const logoVariants = {
        initial: { 
            scale: 0,
            rotate: -180,
            opacity: 0,
            filter: "drop-shadow(0 0 0 rgba(255, 255, 255, 0))"
        },
        entrance: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
            transition: {
                duration: 1.5,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        slideLeft: { 
            x: responsive.slideOffset,
            filter: "drop-shadow(0 0 25px rgba(255, 255, 255, 0.7))",
            transition: { 
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        pulseAndGlow: {
            scale: [1, 1.08, 1],
            filter: ["drop-shadow(0 0 30px rgba(255, 255, 255, 0.9))", 
                    "drop-shadow(0 0 50px rgba(255, 255, 255, 1))",
                    "drop-shadow(0 0 30px rgba(255, 255, 255, 0.9))"],
            transition: {
                duration: 2.4,
                ease: "easeInOut",
                times: [0, 0.5, 1],
            }
        },
        energyBurst: {
            scale: [1, 1.15, 1],
            filter: "drop-shadow(0 0 60px rgba(255, 255, 255, 1))",
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        },
        centerLogo: {
            x: 0,
            filter: "drop-shadow(0 0 35px rgba(255, 255, 255, 1))",
            transition: {
                duration: 1.8,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        moveToNavbar: {
            scale: responsive.finalPosition.scale,
            x: responsive.finalPosition.x,
            y: responsive.finalPosition.y,
            filter: "drop-shadow(0 0 0 rgba(255, 255, 255, 0))",
            transition: {
                duration: 2,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        },
    };

    const textVariants = {
        hidden: { 
            opacity: 0,
            x: 20,
            filter: "blur(10px)",
            scale: 0.8
        },
        showText: { 
            opacity: 1,
            x: responsive.textOffset,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        pulseAndGlow: {
            opacity: 1,
            x: responsive.textOffset,
            scale: [1, 1.08, 1],
            filter: ["blur(0px) brightness(1.6)", "blur(0px) brightness(2)", "blur(0px) brightness(1.6)"],
            transition: {
                duration: 2.4,
                ease: "easeInOut",
                times: [0, 0.5, 1],
            }
        },
        energyBurst: {
            scale: [1, 1.15, 1],
            filter: "blur(0px) brightness(2.5)",
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        },
        exit: {
            opacity: 0,
            filter: "blur(10px)",
            transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    const getParticleSize = () => {
        const isMobile = screenSize.width < 640;
        const isTablet = screenSize.width >= 640 && screenSize.width < 1024;
        return {
            primary: {
                count: isMobile ? 25 : isTablet ? 35 : 45,
                size: isMobile ? 3 : isTablet ? 4 : 6
            },
            secondary: {
                count: isMobile ? 20 : isTablet ? 28 : 35,
                size: isMobile ? 2 : isTablet ? 2.5 : 3
            },
            ambient: {
                count: isMobile ? 15 : isTablet ? 20 : 25
            }
        };
    };

    const ParticleField = () => {
        const particleSizes = getParticleSize();
        
        return (
            <div className="absolute inset-0">
                <motion.div className="relative w-full h-full">
                    {animationStep === "energyBurst" && (
                        <EnergyBurst />
                    )}
                    <OrbitalRing />
                    {[...Array(particleSizes.primary.count)].map((_, i) => (
                        <FloatingParticle key={`primary-${i}`} primary maxSize={particleSizes.primary.size} />
                    ))}
                    {[...Array(particleSizes.secondary.count)].map((_, i) => (
                        <FloatingParticle key={`secondary-${i}`} maxSize={particleSizes.secondary.size} />
                    ))}
                    {[...Array(particleSizes.ambient.count)].map((_, i) => (
                        <AmbientParticle key={`ambient-${i}`} />
                    ))}
                </motion.div>
            </div>
        );
    };

    const EnergyBurst = () => {
        const burstSize = screenSize.width < 640 ? 8 : 12;
        const rayLength = screenSize.width < 640 ? "h-12" : "h-16";
        
        return (
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1.5],
                    opacity: [1, 0]
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                {[...Array(burstSize)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 ${rayLength} bg-white origin-bottom`}
                        initial={{ 
                            rotate: i * (360 / burstSize),
                            opacity: 0.7,
                        }}
                        animate={{
                            opacity: [0.7, 0],
                            scaleY: [0.2, 2.5],
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        style={{
                            filter: "blur(2px)"
                        }}
                    />
                ))}
            </motion.div>
        );
    };

    const OrbitalRing = () => {
        const ringSize = screenSize.width < 640 ? "w-48 h-48" : 
                         screenSize.width < 1024 ? "w-60 h-60" : 
                        "w-70 h-70";
        
        return (
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className={`absolute ${ringSize} rounded-full border border-white opacity-10`}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 8,
                            ease: "linear",
                            repeat: Infinity
                        },
                        scale: {
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }
                    }}
                    style={{ filter: "blur(1px)" }}
                />
            </motion.div>
        );
    };

    const FloatingParticle = ({ primary, maxSize }) => {
        const baseDelay = Math.random() * 2;
        const baseDuration = primary ? 3.5 + Math.random() * 2 : 2.5 + Math.random() * 1;
        const baseSize = primary ? Math.random() * maxSize + 2 : Math.random() * maxSize + 1;
        const radius = screenSize.width < 640 ? 60 : 120;
        const startX = Math.random() * radius - radius/2;
        const startY = Math.random() * radius - radius/2;
        
        return (
            <motion.div
                className={`absolute bg-white rounded-full ${primary ? 'opacity-40' : 'opacity-25'}`}
                initial={{ 
                    opacity: 0,
                    scale: 0,
                    x: startX,
                    y: startY
                }}
                animate={{
                    opacity: [0, primary ? 0.4 : 0.25, 0],
                    scale: [0, 1, 0],
                    x: startX + (Math.random() * radius - radius/2),
                    y: startY + (Math.random() * radius - radius/2),
                }}
                transition={{
                    duration: baseDuration,
                    delay: baseDelay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    width: baseSize,
                    height: baseSize,
                    filter: primary ? 'blur(0.5px)' : 'blur(1px)'
                }}
            />
        );
    };

    const AmbientParticle = () => {
        const angle = Math.random() * Math.PI * 2;
        const radius = screenSize.width < 640 ? 80 : 120;
        const orbitRadius = radius + Math.random() * 30;
        const duration = 10 + Math.random() * 5;
        
        return (
            <motion.div
                className="absolute bg-white rounded-full opacity-20"
                animate={{
                    scale: [0.8, 1, 0.8],
                    opacity: [0.1, 0.2, 0.1],
                    x: [
                        Math.cos(angle) * orbitRadius,
                        Math.cos(angle + Math.PI) * orbitRadius,
                        Math.cos(angle + Math.PI * 2) * orbitRadius
                    ],
                    y: [
                        Math.sin(angle) * orbitRadius,
                        Math.sin(angle + Math.PI) * orbitRadius,
                        Math.sin(angle + Math.PI * 2) * orbitRadius
                    ]
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    width: 2,
                    height: 2,
                    filter: 'blur(1px)'
                }}
            />
        );
    };

    return (
        <AnimatePresence>
            {!showContent && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                >{particlesVisible && <ParticleField />}

                <div className="relative flex items-center justify-center">
                    <motion.div
                        variants={logoVariants}
                        animate={animationStep}
                        className="flex items-center justify-center"
                    >
                        <img
                            src="https://dl.dropboxusercontent.com/scl/fi/wds2aptq1qtsts1ttx3rf/scimat.png?rlkey=gt8538jdbljq8mvax903piyik&st=n0p5y6e1"
                            alt="Logo"
                            className={`${responsive.logoSize} relative z-10`}
                        />
                    </motion.div>
                    
                    <motion.div
                        className={`absolute flex items-center ${responsive.fontSize} text-white font-bold font-serif tracking-wider whitespace-nowrap`}
                        variants={textVariants}
                        initial="hidden"
                        animate={animationStep}
                        exit="exit"
                    >
                        <motion.h1 className={`pt-5 ${responsive.paddingLeft}`}>Sci-Mat</motion.h1>
                    </motion.div>
                </div>

                <motion.div 
                    className="absolute inset-0 bg-black opacity-0"
                    animate={{
                        opacity: [0, 0.15, 0],
                        transition: {
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }}
                />
            </motion.div>
        )}
    </AnimatePresence>
);
};

export default Loader;
