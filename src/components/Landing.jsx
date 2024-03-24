import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <div className="relative w-full sm:h-[250vh] h-[150vh]">
            <div className="picture w-full h-full overflow-hidden">
                <img
                    data-scroll
                    data-scroll-speed="-1"
                    className="w-full h-full object-cover"
                    src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(jpeg):quality(70)"
                    alt=""
                />
            </div>
            <div className="w-full absolute top-0">
                <div className="text max-w-2xl h-full mx-auto sm:mx-36 px-5 sm:px-20 text-white">
                    <div className="para mt-[14rem] sm:mt-[30rem]">
                        {[
                            'Global digital design studio partnering',
                            'with brands and businesses that create',
                            'exceptional experiences where people',
                            'live, work, and unwind.',
                        ].map((item, index) => (
                            <p
                                key={index}
                                className="text-md masker sm:text-2xl overflow-hidden"
                            >
                                <motion.span
                                    initial={{
                                        rotate: 90,
                                        y: '100%',
                                        opacity: 0,
                                    }}
                                    viewport={{ once: true }}
                                    animate={{ rotate: 0, y: '0', opacity: 1 }}
                                    transition={{
                                        ease: [0.22, 1, 0.36, 1],
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    className="inline-block origin-left"
                                >
                                    {item}
                                </motion.span>
                            </p>
                        ))}
                    </div>
                    <div className="headings mt-14 sm:mt-10">
                        {['Digital', 'Design', 'Experience'].map(
                            (item, index) => (
                                <h1
                                    key={index}
                                    className="text-5xl sm:text-[13rem] tracking-tighter leading-none"
                                >
                                    <motion.span
                                        initial={{
                                            rotate: 90,
                                            y: '100%',
                                            opacity: 0,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            y: '0',
                                            opacity: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            ease: [0.22, 1, 0.36, 1],
                                            duration: 0.6,
                                            delay: 1 + index * 0.5,
                                        }}
                                        className="inline-block origin-left"
                                    >
                                        {item}
                                    </motion.span>
                                </h1>
                            )
                        )}
                    </div>
                    <div className="para2 sm:w-50 mt-40 sm:mt-[20rem] ">
                        <p className="sm:text-xl">
                            We help experience-driven companies thrive by making
                            their audience feel the refined intricacies of their
                            brand and product in the digital space.
                            Unforgettable journeys start with a click.
                        </p>
                        <a
                            className="sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 mt-6 inline-block"
                            href="#"
                        >
                            The Studio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
