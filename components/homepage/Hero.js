/* eslint-disable react/no-unescaped-entities */
import classes from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image width="300" height="300" alt="hero" src="/images/site/mia.jpg" />
      </div>
      <h1>Hello, I'm Mia</h1>
      <p>It is a place where I share my thoughts and ideas.</p>
    </section>
  );
}
