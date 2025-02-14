import Image, { StaticImageData } from "next/image";
import { BsLinkedin } from "react-icons/bs";

export function LeadershipProfile({
  headshot,
  name,
  title,
  linkedin,
}: {
  headshot: StaticImageData;
  name: string;
  title: string;
  linkedin: string;
}) {
  return (
    <div className="mb-20">
      <Image
        className="lg:float-left lg:w-1/4"
        src={headshot}
        alt={`${name}'s Headshot`}
        width={400}
      />
      <div className="mt-6 lg:float-left lg:ml-6">
        <span className="text-2xl text-primary lg:float-left">{name}</span>
        <br />
        <div className="clear-left"></div>
        <span className="text-xl">{title}</span>
        <br />
        <a className="btn mt-6" href={linkedin} target="_blank">
          <BsLinkedin className="text-2xl text-primary"></BsLinkedin>
          Connect
        </a>
      </div>
      <div className="clear-left"></div>
    </div>
  );
}
