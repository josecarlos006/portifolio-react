// src/components/ScrollView.tsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollItemProps {
    children: React.ReactNode;
}

const ScrollItem: React.FC<ScrollItemProps> = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: 50 },
            }}
            className="mb-8"
        >
            {children}
        </motion.div>
    );
};

const ScrollView: React.FC = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex items-start justify-center">
                    Meus Projetos
                </div>
                <ScrollItem>
                    <div className="flex gap-20 mt-10">
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold">Título 1</h1>
                            <p className="mt-2 text-lg">Texto sobre o projeto feito na imagem.</p>
                        </div>
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="mt-4 w-[200px] h-full" />
                    </div>
                </ScrollItem>
                <ScrollItem>
                    <div className="flex gap-20 mt-10">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="mt-4 w-[200px] h-full" />
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold">Título 2</h1>
                            <p className="mt-2 text-lg">Texto sobre o projeto feito na imagem.</p>
                        </div>
                    </div>
                </ScrollItem>
                <ScrollItem>
                    <div className="flex gap-20 mt-10">
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold">Título 3</h1>
                            <p className="mt-2 text-lg">Texto sobre o projeto feito na imagem.</p>
                        </div>
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="mt-4 w-[200px] h-full" />
                    </div>
                </ScrollItem>
                <ScrollItem>
                    <div className="flex gap-20 mt-10">
                        <img src="https://via.placeholder.com/400" alt="Placeholder" className="mt-4 w-[200px] h-full" />
                        <div className="mt-5">
                            <h1 className="text-2xl font-bold">Título 4</h1>
                            <p className="mt-2 text-lg">Texto sobre o projeto feito na imagem.</p>
                        </div>
                    </div>
                </ScrollItem>
            </div>
        </>
    );
};

export default ScrollView;
