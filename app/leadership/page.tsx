import ebenezer_zergabachew from "../assets/leadership_photos/ebenezer_zergabachew.jpg";
import brody_emery from "../assets/leadership_photos/brody_emery.jpg";
import jeremiah_hohn from "../assets/leadership_photos/jeremiah_hohn.jpg";
import mason_butler from "../assets/leadership_photos/mason_butler.png";
import { LeadershipProfile } from "../components/LeadershipProfile";

export const metadata = {
  title: "Leadership",
  description: "The leadership of the Entrepreneurship Club at Virginia Tech.",
};

function LeadershipPage() {
  const leadershipData = [
    {
      headshot: ebenezer_zergabachew,
      name: "Ebenezer Zergabachew",
      title: "President",
      linkedin: "https://www.linkedin.com/in/ebenezer-zergabachew",
    },
    {
      headshot: jeremiah_hohn,
      name: "Jeremiah Hohn",
      title: "Vice President",
      linkedin: "https://www.linkedin.com/in/jeremiahhohn/",
    },
    {
      headshot: brody_emery,
      name: "Brody Emery",
      title: "Vice President",
      linkedin: "https://www.linkedin.com/in/brody-emery-88539321b/",
    },
    {
      headshot: mason_butler,
      name: "Mason Butler",
      title: "Videographer / Photographer",
      linkedin: "https://www.linkedin.com/in/mason-butler/",
    },
  ];

  return (
    <div className="container">
      <h1 className="mb-20 text-4xl text-primary">Leadership</h1>
      <div className="lg:grid lg:grid-cols-2">
        {leadershipData.map((leader) => (
          <LeadershipProfile
            key={leader.name}
            name={leader.name}
            headshot={leader.headshot}
            title={leader.title}
            linkedin={leader.linkedin}
          />
        ))}
      </div>
    </div>
  );
}

export default LeadershipPage;
