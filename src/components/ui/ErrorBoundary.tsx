'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMsg: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMsg: ''
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in 3D Scene:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white p-6 z-[100]">
          <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-center">3D Engine Crashed</h2>
          <p className="text-white/70 max-w-md text-center leading-relaxed mb-4">
            An unexpected error occurred while rendering the 3D scene.
          </p>
          <div className="text-xs text-red-400 bg-red-900/20 p-4 rounded-lg max-w-lg overflow-auto">
            {this.state.errorMsg}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
