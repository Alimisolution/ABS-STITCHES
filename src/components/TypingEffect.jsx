import { useEffect, useRef, useState } from "react";

function TypingEffect(typeText) {
  const [position, setPosition] = useState(0);
  const curPosition = useRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((value) => value + 1);
      curPosition.current += 1;
      if (curPosition > typeText.lemgth) {
        return () => clearInterval(timer);
      }
    }, 500);
    return () => {
      clearInterval(timer);
      setPosition(0);
      curPosition.current = 0;
    };
  }, [typeText]);
  return typeText.substring(0, position);
}

export default TypingEffect;
