import React from 'react';
import { X } from '@phosphor-icons/react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full backdrop-opacity-20 bg-white/30 ">
      <div className="relative z-50 flex flex-col justify-between px-10 py-5 rounded shadow-md bg-color5 ">
        <div
          onClick={() => {
            onClose();
          }}
          className="absolute top-2 right-2"
        >
          <X className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
