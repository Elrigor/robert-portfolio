import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";

const TypingEffect = () => {
  const { t } = useTranslation();
  
  const sentences = useMemo(() => [
    "Robert Mihai Maracine",
    t("developer"),
  ], [t]);

  const [currentSentence, setCurrentSentence] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && currentIndex === sentences[currentSentence]?.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentSentence((prevSentence) =>
          prevSentence === sentences.length - 1 ? 0 : prevSentence + 1
        );
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [currentSentence, currentIndex, isDeleting, sentences]);

  useEffect(() => {
    if (
      currentSentence >= sentences.length - 1 &&
      isDeleting &&
      currentIndex === 0
    ) {
      return;
    }

    const interval = setInterval(() => {
      if (
        !isDeleting &&
        sentences[currentSentence]?.[currentIndex] !== undefined
      ) {
        setCurrentText(
          (prevText) => prevText + sentences[currentSentence][currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [currentSentence, currentIndex, isDeleting, sentences]);

  const isTextEmpty = currentText.length === 0;

  return (
    <div id="container">
      <div className="typing-effect-text">
        <h2>
          {isTextEmpty ? <span>&nbsp;</span> : currentText}
        </h2>
      </div>
      <div id="typing-effect-cursor"></div>
    </div>
  );
};

export default TypingEffect;
