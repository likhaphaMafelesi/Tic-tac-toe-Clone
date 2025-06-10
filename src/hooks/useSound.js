
import { useEffect, useRef } from "react";

const useSound = (url, options = { volume: 1.0, timeout: 1000 }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = options.volume || 1.0;
    audioRef.current = audio;
  }, [url, options.volume]);

  const playSound = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;

    audioRef.current
      .play()
      .then(() => {
        if (options.timeout) {
          setTimeout(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }, options.timeout);
        }
      })
      .catch((error) => {
        console.error("Audio play failed:", error);
      });
  };

  return playSound;
};

export default useSound;
