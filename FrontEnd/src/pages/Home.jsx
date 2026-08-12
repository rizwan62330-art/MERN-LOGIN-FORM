import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Home/Header';
import Hero from './Home/Hero';

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-slate-50">
      <Header />
      <Hero />
      <ToastContainer
        position="top-right"
        className="w-[calc(100vw-1.5rem)]! sm:w-auto!"
        toastClassName="!text-sm"
      />
    </div>
  );
}
