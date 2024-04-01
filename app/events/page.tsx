import startup_sprint_flyer from "./startup_sprint.jpg";
import meet_the_founders from "./meet_founders.jpg";
import women_in_eship from "./women_in_eship.png";
import Image from "next/image";
import venture_weekend from "./venture-weekend.jpg";

function page() {
  return (
    <div>
      <h1 className="mx-auto w-fit text-3xl font-bold text-secondary">
        Upcoming Events
      </h1>

      <Image
        className="mx-auto mt-10 lg:w-1/3"
        src={venture_weekend}
        alt="Venture Weekend Flyer"
      />

      <h2 className="mt-20 text-3xl font-bold text-primary">Previous Events</h2>

      <div className="mt-10 lg:grid lg:grid-cols-3">
        <Image
          className="lg:w-11/2 mx-auto"
          src={startup_sprint_flyer}
          alt="Startup Sprint Flyer"
        />
        <Image
          className="lg:w-11/2 mx-auto mt-12 lg:mt-0"
          src={meet_the_founders}
          alt="Meet the Founders Flyer"
        />
        <Image
          className="lg:w-11/2 mx-auto mt-12 lg:mt-0"
          src={women_in_eship}
          alt="Women in EShip Flyer"
        />
      </div>
    </div>
  );
}

export default page;
