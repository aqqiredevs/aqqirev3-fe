import MeetTheTeamCarousel from "./MeetTheTeamCarousel";

const MeetTheTeam = () => {
  return (
    <section className="my-6 xl:min-h-[70vh] flex items-center justify-center">
      <div className="container space-y-6">
        <h2 className="text-bold text-4xl text-center font-bold">
          Meet our Team
        </h2>
        <MeetTheTeamCarousel />
      </div>
    </section>
  );
};

export default MeetTheTeam;
