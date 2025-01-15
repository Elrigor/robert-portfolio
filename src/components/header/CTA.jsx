import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import CV from "../../assets/personal_cv.pdf";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

const CTA = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const pdfRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3));
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5));

  const handleFullscreen = () => {
    if (pdfRef.current.requestFullscreen) {
      pdfRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const container = pdfRef.current;
    if (container) {
      container.style.transform = `scale(${zoom})`;
      container.style.transformOrigin = "center";
    }
  }, [zoom]);

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
          <h2 style={{ margin: 0, color: "var(--color-primary)" }}>{t("resume__title")}</h2>
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
          }}
        >
          <iframe
            src={CV}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: "var(--color-bg)",
              transition: "transform 0.3s ease",
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
          <a href={CV} download className="btn btn-primary">
            {t("download")}
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default CTA;
