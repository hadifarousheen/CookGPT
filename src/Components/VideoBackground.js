const VideoBackground = () => {
  return (
    <div className="w-screen  ">
      <video autoPlay muted loop className="md:h-screen w-screen object-cover">
        <source
          src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
