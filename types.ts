import React from 'react';

export interface DiagnosticResult {
  problema_identificado: string;
  posibles_causas: {
    causa: string;
    solucion_sugerida: string;
  }[];
  recomendacion_profesional: string;
}

export enum LoadingState {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Testimonial {
    text: string;
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
}

export interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface AboutPoint {
    icon: React.ReactNode;
    title: string;
    description: string;
}
