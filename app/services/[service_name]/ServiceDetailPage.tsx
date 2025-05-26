'use client';

import { useState, useRef, useEffect } from 'react';
import { FaCar, FaCarSide } from 'react-icons/fa';
import type { Service } from '@/data/services'; 

export default function ServiceDetailsPage(props: { service: Service }) {
    const [openType, setOpenType] = useState<null | 'sedan' | 'suv'>(null);
    const sedanRef = useRef<HTMLDivElement>(null);
    const suvRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sedanRef.current &&
                !sedanRef.current.contains(event.target as Node) &&
                suvRef.current &&
                !suvRef.current.contains(event.target as Node)
            ) {
                setOpenType(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Why Us?</h2>
          <p className="text-[#292524] mb-8 text-lg leading-relaxed">{props.service.description}</p>

          {/* FEATURES */}
          <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-4">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {props.service.features.map((feature, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="text-[#d6781c] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
                    7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#292524]">{feature}</p>
              </div>
            ))}
          </div>

          {/* BENEFITS */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">Why It’s Important</h3>
            <ul className="space-y-4">
              {props.service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start bg-gray-50 p-4 rounded-xl">
                  <div className="text-[#d6781c] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
                        7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[#292524]">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* FEATURES CARD */}
          {/*<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {props.service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-[#d6781c] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
                        7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[#292524]">{feature}</p>
                </div>
              ))}
            </div>
          </div>*/}

          {/* BENEFITS CARD */}
          

          {/* PRICE CARD */}
          <div className="bg-gray-50 p-8 rounded-xl flex flex-col items-center">
            <h4 className="text-xl font-bold text-[#292524] mb-8">Type of car</h4>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
              {/* Sedan */}
              <div
                ref={sedanRef}
                className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition hover:shadow-2xl hover:-translate-y-1 cursor-pointer relative"
                onClick={() => setOpenType(openType === 'sedan' ? null : 'sedan')}
              >
                <FaCar className="h-20 w-20 text-[#0f2c47] mb-4" />
                <span className="text-lg font-semibold text-[#292524]">Sedan / Coupe</span>
                {openType === 'sedan' && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white border border-gray-200 rounded-xl shadow-lg px-8 py-4 z-20 min-w-[180px] text-center animate-fade-in">
                    <span className="block text-[#292524] font-semibold text-lg mb-2">Sedan / Coupe Price</span>
                    <span className="text-2xl font-bold text-[#d6781c]">
                      {props.service.price.sedan} {props.service.currency}
                    </span>
                  </div>
                )}
              </div>

              {/* SUV */}
              <div
                ref={suvRef}
                className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition hover:shadow-2xl hover:-translate-y-1 cursor-pointer relative"
                onClick={() => setOpenType(openType === 'suv' ? null : 'suv')}
              >
                <FaCarSide className="h-20 w-20 text-[#0f2c47] mb-4" />
                <span className="text-lg font-semibold text-[#292524]">SUV</span>
                {openType === 'suv' && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white border border-gray-200 rounded-xl shadow-lg px-8 py-4 z-20 min-w-[180px] text-center animate-fade-in">
                    <span className="block text-[#292524] font-semibold text-lg mb-2">SUV Price</span>
                    <span className="text-2xl font-bold text-[#d6781c]">
                      {props.service.price.suv} {props.service.currency}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
