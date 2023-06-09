import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";

const TypingEffect = () => {
  const { t } = useTranslation();

  const sentences = useMemo(() => [
    "Robert Mihai Maracine",
    t("developer"),
  ], [t]);

  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let isMounted = true;
    let currentSentence = 0;
    const typeSentence = async (sentence, deleteAfter = true) => {
      for (let i = 0; i < sentence.length; i++) {
        if (!isMounted) return;
        setCurrentText(sentence.slice(0, i+1));
        await new Promise(resolve => setTimeout(resolve, 65));
      }
      
      if (deleteAfter) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        for (let i = sentence.length; i >= 0; i--) {
          if (!isMounted) return;
          setCurrentText(sentence.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 65));
        }
      }
    };

    const typeAllSentences = async () => {
      while (isMounted) {
        await typeSentence(sentences[currentSentence]);
        currentSentence = (currentSentence + 1) % sentences.length;
      }
    };

    typeAllSentences();

    return () => {
      isMounted = false;
    };
  }, [sentences]);

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
