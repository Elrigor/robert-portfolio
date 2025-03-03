import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

const CTA = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(0.8);
  const pdfRef = useRef(null);

  // URL del visor y de descarga del PDF en Google Drive
  const pdfViewerURL = "https://drive.google.com/file/d/1-ySnVHQExm0WVKMJewZRJEOychbmFZYh/preview";
  const pdfDownloadURL = "https://drive.google.com/uc?export=download&id=1-ySnVHQExm0WVKMJewZRJEOychbmFZYh";

  const openModal = () => {
    setZoom(0.8);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 2));
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5));

  const handleFullscreen = () => {
    if (pdfRef.current.requestFullscreen) {
      pdfRef.current.requestFullscreen();
    }
  };

  return (
    <div className="cta">
      <button className="btn btn-primary" onClick={openModal}>
        {t("view")}
      </button>
      <a href="#contact" className="btn">
        {t("talk")}
      </a>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Resume"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 20,
          },
          content: {
            margin: "auto",
            width: "90%",
            height: "90%",
            padding: 0,
            backgroundColor: "var(--color-bg)",
            border: "none",
            overflow: "hidden",
            zIndex: 20,
          },
        }}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            backgroundColor: "var(--color-bg-variant)",
            borderBottom: "1px solid var(--color-primary-variant)",
          }}
        >
          <a
            href={pdfDownloadURL}
            download="Resume.pdf"
            className="btn download-btn"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            {t("download")}
          </a>
          <button
            onClick={closeModal}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-primary)",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          >
            ✕
          </button>
        </div>
        <div
          ref={pdfRef}
          style={{
            flex: 1,
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: "calc(100% - 50px)",
            transform: `scale(${zoom})`, // Aplica el zoom inicial
            transformOrigin: "center", // Centra el escalado
            transition: "transform 0.3s ease", // Suaviza cambios de zoom
          }}
        >
          <iframe
            src={pdfViewerURL}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: "var(--color-bg)",
            }}
            title="Resume"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "var(--color-bg-variant)",
            borderTop: "1px solid var(--color-primary-variant)",
          }}
        >
          <div>
            <button className="btn zoom-btn" onClick={handleZoomOut}>
              -
            </button>
            <button className="btn zoom-btn" onClick={handleZoomIn}>
              +
            </button>
          </div>
          <button className="btn btn-primary" onClick={handleFullscreen}>
            {t("fullscreen")}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CTA;
