'use client';

import { loadingOverlay, spinner, spinnerText } from '@/styles/components/loading.css';

interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = 'Enviando...' }: LoadingSpinnerProps) {
  return (
    <div className={loadingOverlay}>
      <div className={spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={spinnerText}>{message}</p>
    </div>
  );
}
