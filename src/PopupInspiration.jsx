import React, { useState } from 'react';

import '../src/styles/popup.css';
import imgYin from './images/img-yin.jpg';
import imgWar from './images/img-war.jpg';

import imgBarbie from './images/exemplo.png';

function PopupInspiration() {
  const [showPopInspiration, setShowPopInspiration] = useState(false);

  const togglePopup = () => {
    setShowPopInspiration(!showPopInspiration);
  };

  return (
    <>
      {/* Botão que abre o popup */}
      <button
        className="btn-credits"
        onClick={togglePopup}
        title="Inspiration"
      >
        Inspiration
      </button>

      {/* Popup overlay */}
      {showPopInspiration && (
        <div className="popup-background fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="popup bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">

            {/* Botão de fechar estilo "X" */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={togglePopup}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Título */}
            <h2 className="text-lg font-semibold text-purple-600 mb-2">💜 Inspiration</h2>

            {/* Texto de apoio */}
            <p className="text-gray-700 text-sm mb-4">
              Create custom, meme-style reCAPTCHA images using your favorite people
            </p>

            {/* Imagens lado a lado */}
            <div className="flex gap-4 justify-center mb-4">
              <img
                src={imgWar}
                alt="image War"
                className="img-custom  object-cover rounded-lg border border-gray-300"
              />
              <img
                src={imgYin}
                alt="image Yin"
                className="img-custom  object-cover rounded-lg border border-gray-300"
              />
            </div>
            <div className="flex gap-4 justify-center mb-4">
              <img
                src={imgBarbie}
                alt="image Barbie"
                className="img-custom barbie object-cover rounded-lg border border-gray-300"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupInspiration;
