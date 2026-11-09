import React from 'react';

export default function OfficialSeal({ className = "w-28 h-28" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img
        src="/ir-official-stamp.png"
        alt="IR InfoTech Official Stamp"
        className="w-full h-full object-contain filter drop-shadow-sm"
      />
    </div>
  );
}
