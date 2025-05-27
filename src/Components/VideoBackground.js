const VideoBackground = () => {
  return (
    <div className="w-full pt-8">
      <iframe
        className="md:h-screen w-full"
        src="https://www.youtube.com/embed/uygb9O-MDPw?si=0HoyK244XgrEdyus&amp;controls=0&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
