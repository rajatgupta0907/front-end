'use client';

import {motion} from 'framer-motion';
import {TypingText} from '../components';
import styles from '../styles';
import {fadeIn, slideIn,staggerContainer,textVariant} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'></div>
    <motion.div variants={staggerContainer} initial='hidden' whileInView="show" viewport={{once:false,amount:0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverse" textStyles="Text Center"/>
      <motion.p variants={fadeIn('up','tween',0.2,1) } className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">

      Welcome to the <span className='font-extrabold text-white'>Metaverse</span>, where digital realms collide with boundless creativity!<span className='font-extrabold text-white'>VR</span> Step into a world where imagination knows no limits and virtual experiences come to life with stunning realism. Explore vast landscapes, engage in thrilling adventures, and connect with people from across the globe in this immersive digital universe.


      </motion.p>
      <motion.img variants={fadeIn('up','tween',0.3,1) } src='/arrow-down.svg' alt='arrow down' className='w-[18px] h-[20px] object-contain'>

      </motion.img>
    </motion.div>
  </section>
);

export default About;
