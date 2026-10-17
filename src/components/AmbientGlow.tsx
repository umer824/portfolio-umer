import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-[10%] -right-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px]" />
      <div className="absolute top-[40%] -left-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-[100px]" />
      <div className="absolute bottom-[5%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[90px]" />
    </div>
  );
};
