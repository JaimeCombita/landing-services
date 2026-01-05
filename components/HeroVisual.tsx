'use client';

import Image from 'next/image';
import { visualWrapper, imageContainer } from '@/styles/sections/heroVisual.css';

export default function HeroVisual() {
  return (
    <div className={visualWrapper}>
      <div className={imageContainer}>
        <Image
          src="/hero-visual.png" // Asegúrate de colocar la imagen en public/
          alt="Composición visual de soluciones digitales"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  );
}