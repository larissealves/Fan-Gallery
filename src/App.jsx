import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

import PopupInspiration from "./PopupInspiration";
import PopupSupport from "./PopupSupportDeveloper";

import HeadphonesIcon from '@mui/icons-material/Headphones';
import RefreshIcon from '@mui/icons-material/Refresh';
import InfoIcon from '@mui/icons-material/Info';

import iconCheck from './images/iconCheck.png';

export default function App() {
  const [images, setImages] = useState([null, null, null, null]);
  const [useCamera, setUseCamera] = useState(false);
  const [captionText, setCaptionText] = useState("Barbie's boyfriend");
  const [isExporting, setIsExporting] = useState(false); // Flag para exportação

  const videoRef = useRef(null);
  const galleryRef = useRef(null);

  // Upload manual de imagem
  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  // Inicia câmera para tirar foto
  const startCamera = async () => {
    setUseCamera(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    }
  };

  // Tira a foto da câmera e salva como imagem
  const takePhoto = () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL();
      const updatedImages = [...images];
      updatedImages[3] = dataUrl;
      setImages(updatedImages);
      stopCamera();
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setUseCamera(false);
  };

  // Exporta a galeria como imagem
  const saveGalleryAsImage = async () => {
    setIsExporting(true); // Ativa modo exportação para ajustar visual do DOM
    await new Promise((resolve) => setTimeout(resolve, 100)); // Espera DOM atualizar

    if (galleryRef.current) {
      const canvas = await html2canvas(galleryRef.current);
      const link = document.createElement("a");
      link.download = "my_captcha.png";
      link.href = canvas.toDataURL();
      link.click();
    }

    setIsExporting(false); // Desativa modo exportação
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="fisrt-column text-center">
        <span className="text-lg font-semibold mb-4">
          Create your own custom reCAPTCHA with friends or idols
        </span>

        {/* Menu superior */}
        <div className="menu mb-4 flex gap-4">
          <div>
            <span className="material-symbols-outlined">photo_library</span>
            <PopupInspiration />
          </div>

          <div>
            <span className="material-symbols-outlined">support_agent</span>
            <PopupSupport />
          </div>
        </div>
      </div>

      <div className="second-column">
        {/* Área da galeria exportável */}
        <div ref={galleryRef} className="main-content bg-white shadow-md">

          {/* Título com input editável ou texto fixo no modo export */}
          <div className="main-content-details bg-blue-600 text-white px-4 py-6 text-center flex flex-col items-center gap-2">
            <p className="text-sm sm:text-base">Select all images with</p>

            {isExporting ? (
              <span className="font-bold text-xl sm:text-2xl">{captionText}</span>
            ) : (
              <input
                type="text"
                value={captionText}
                onChange={(e) => setCaptionText(e.target.value.slice(0, 100))}
                placeholder="e.g., Jackson's boyfriend"
                className="bg-transparent text-white font-bold text-xl sm:text-2xl text-center border-b border-white outline-none w-full max-w-md"
                maxLength={100}
              />
            )}
          </div>

          {/* Galeria de imagens */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="item border border-gray-300 shadow-sm w-40 h-40 bg-gray-200 rounded-xl overflow-hidden relative flex items-center justify-center"
              >
                {/* Ícone de check no último quadro, se imagem estiver presente */}
                {idx === 3 && img && (
                  <img
                    src={iconCheck}
                    alt="Icon check"
                    className="icon-check absolute top-1 left-1 w-6 h-6"
                  />
                )}

                {img ? (
                  <img
                    src={img}
                    alt={`foto-${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : idx === 3 ? (
                  useCamera ? (
                    <div className="flex flex-col items-center">
                      <video ref={videoRef} className="w-40 h-32 object-cover" />
                      <button
                        onClick={takePhoto}
                        className="mt-2 px-2 py-1 bg-green-600 text-white rounded"
                      >
                        Take Photo
                      </button>
                      <button
                        onClick={stopCamera}
                        className="mt-1 text-sm text-red-500"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center relative">
                      <button
                        onClick={startCamera}
                        className="mb-2 px-2 py-1 bg-blue-500 text-white rounded"
                      >
                        Use Camera
                      </button>
                      <label className="text-gray-500 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(idx, e)}
                          className="hidden"
                        />
                        Or upload
                      </label>
                    </div>
                  )
                ) : (
                  <label className="w-full h-full flex items-center justify-center text-gray-500 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(idx, e)}
                      className="hidden"
                    />
                    Choose photo
                  </label>
                )}
              </div>
            ))}
          </div>

          {/* Rodapé com ícones e botão */}
          <div className="footer">
            <div className="footer-item flex gap-4 justify-center mt-4">
              <RefreshIcon style={{ fontSize: 40, color: '#6B7280' }} />
              <HeadphonesIcon style={{ fontSize: 40, color: '#6B7280' }} />
              <InfoIcon style={{ fontSize: 40, color: '#6B7280' }} />
            </div>

            <div className="text-center">
              {/* Substitui o botão por um div estilizado durante exportação */}
              {!isExporting && (
                <button
                  onClick={saveGalleryAsImage}
                  title="Download"
                  className="mt-6 bg-blue-600 text-white px-6 py-2 shadow hover:bg-blue-700 transition w-full sm:w-auto text-sm sm:text-base"
                  disabled={images.includes(null)}
                >
                  VERIFY
                </button>

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
