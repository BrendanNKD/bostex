export default function Home() {
  return (
<>
  <div className="relative h-screen w-full overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/bg-home3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Content Overlay */}
    <div className="relative z-10 flex items-center h-full w-full bg-black bg-opacity-50">
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-xl text-white p-4">
        <div className="flex flex-col">
          <p>subheader?</p>
          <h1>title</h1>
          <p>this is the description of the company slogan</p>
        </div>
        <div>image video</div>
      </div>
    </div>
  </div>
</>
  );
}