'use client';

import Image from 'next/image';
import { 
  visualWrapper, 
  imageStyle, 
  particle, 
  particle1, 
  particle2, 
  particle3 
} from '@/styles/sections/heroVisual.css';

export default function HeroVisual() {
  return (
    <div className={visualWrapper}>
      <div className={`${particle} ${particle1}`} />
      <div className={`${particle} ${particle2}`} />
      <div className={`${particle} ${particle3}`} />
      <Image
        src="/logonew.png"
        alt="Composición visual de soluciones digitales"
        width={650}
        height={600}
        className={imageStyle}
        priority
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}