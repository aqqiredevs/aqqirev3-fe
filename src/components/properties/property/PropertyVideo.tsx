const PropertyVideo = () => {
  return (
    <section className="xl:p-4 mt-6">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Property Video Tour</h3>
      </div>
      <div className="mt-4">
        <video
          className="w-full aspect-video rounded-lg"
          controls
          poster="/placeholder-video-thumbnail.jpg"
        >
          <source src="/videos/property-tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default PropertyVideo;
