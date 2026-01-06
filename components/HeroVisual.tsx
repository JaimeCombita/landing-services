'use client';

import Image from 'next/image';
import { visualWrapper, imageStyle } from '@/styles/sections/heroVisual.css';

export default function HeroVisual() {
  return (
    <div className={visualWrapper}>
      <Image
        src="/hero-visual.png"
        alt="Composición visual de soluciones digitales"
        width={650}
        height={600}
        className={imageStyle}
        priority
      />
    </div>
  );
}