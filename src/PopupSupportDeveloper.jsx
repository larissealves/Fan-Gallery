import React, { useState } from 'react';

import '../src/styles/popup.css';

function PopupSupport() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {/* Botão que abre o popup */}
      <button
        className="btn-credits"
        onClick={togglePopup}
        title="Support the developer"
      >
        Support
      </button>

      {/* Popup overlay */}
      {showPopup && (
        <div className="popup-background">
          <div className="popup relative">
            {/* Botão de fechar estilo "X" */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={togglePopup}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Título */}
            <h2>🌟 Support the Developer</h2>

            {/* Texto de apoio */}
            <p>
              Like this project? You can support the developer by sharing or donating ❤️
            </p>

            {/* Lista de opções de apoio */}
            <ul style={{ lineHeight: '1.8', marginTop: '12px', textAlign: 'left', paddingLeft: '16px' }}>
              <li>📬 <strong>PayPal and PIX:</strong> alves.larisser@gmail.com</li>
              <li>🌍 <strong>Wise:</strong> larisser4</li>
            </ul>

            {/* Link externo para apoio */}
            <div className="text-center mt-4">
              <a
                href="https://linktr.ee/larisseralves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                linktr.ee/larisseralves
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupSupport;
