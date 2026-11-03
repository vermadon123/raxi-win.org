import { Link } from "react-router-dom";
import { Crown } from "lucide-react";

const mentors = [
  {
    name: "Jane",
    role: "Team Jane",
    blurb: "Helps new players finish register + first login without fake invite traps.",
    image: "/assets/raxi-win-mentor-jane.webp",
  },
  {
    name: "Sabby",
    role: "Team Sabby",
    blurb: "Walks through lobby games, recharge habits, and team invite basics.",
    image: "/assets/raxi-win-mentor-sabby.webp",
  },
  {
    name: "Thalia",
    role: "Mentor",
    blurb: "Guides deposit / gift redeem questions on the official app flow.",
    image: "/assets/raxi-win-mentor-thalia.webp",
  },
  {
    name: "Marianna",
    role: "Mentor",
    blurb: "Supports players who need a calm check before big top-ups.",
    image: "/assets/raxi-win-mentor-marianna.webp",
  },
  {
    name: "Karen",
    role: "Mentor",
    blurb: "Focuses on responsible play limits and staying on trusted hosts.",
    image: "/assets/raxi-win-mentor-karen.webp",
  },
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 relative overflow-hidden">
      <div className="absolute top-16 right-16 w-40 h-40 rounded-full bg-gradient-gaming opacity-10 floating-element" />
      <div className="absolute bottom-16 left-16 w-32 h-32 rounded-full bg-gradient-primary opacity-15 floating-element" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <Crown className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">MENTORS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Raxi Win <span className="text-gradient">mentors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jane, Sabby, Thalia, Marianna and Karen help new players get started — register with a real
            invite, learn the lobby, redeem gifts safely, and play within limits. Mentors are not a reason
            to share OTP or remote-access apps.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="gaming-card p-3 md:p-4 group text-center transition-all duration-500 hover:scale-105 hover:shadow-glow"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src={mentor.image}
                  alt={`Raxi Win mentor ${mentor.name}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <h3 className="mt-3 text-lg font-bold text-gradient">{mentor.name}</h3>
              <p className="text-sm text-muted-foreground">{mentor.role}</p>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{mentor.blurb}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-muted-foreground leading-relaxed text-center md:text-left">
          <h3 className="text-xl font-bold text-gradient text-center">What mentors help with</h3>
          <p>
            Use mentor guidance for{" "}
            <Link to="/registration" className="text-primary hover:underline">
              registration
            </Link>
            ,{" "}
            <Link to="/login" className="text-primary hover:underline">
              login
            </Link>
            , and reading offer boards — not for sending money to personal UPI IDs. If something feels off,
            stick to in-app support on the host you opened from this site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
