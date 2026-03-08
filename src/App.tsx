import { useRef } from "react";
function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playVideo = () => {
    try {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } 
            videoRef.current.play();
        }
    } catch (error) {
        console.error('Error playing fullscreen video:', error);
    }
};

const handleVideoEnd = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    window.location.reload();
}
  return (
    <>
    <button onClick={playVideo}>Enter Atrioc's Store</button>
    <div className="scare">
      <video
          ref={videoRef}
          id="app--video"
          preload="auto"
          playsInline
          onEnded={handleVideoEnd}>
          <source src="https://github.com/SickkMade/monkescare/raw/refs/heads/main/public/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default App