'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function Topbar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible && (
        <div className="bg-yellow-100 border-b border-yellow-200 px-4 py-3 text-yellow-700">
          <div className="container mx-auto flex justify-between items-center">
            <p className='text-center flex-1'>Lütfen e-posta adresinizi doğrulayın.</p>
            <button
              onClick={() => setIsVisible(false)}
              className="text-yellow-700 hover:text-yellow-900"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}