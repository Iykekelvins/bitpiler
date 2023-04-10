import { members } from "@/utils";
import Image from "next/image";

import c from "./Team.module.scss";

const OurTeam = () => {
  return (
    <div className={c.team}>
      <div className={c.team_intro}>
        <h4>OUR GROWING TEAM</h4>
        <h1>
          Collaborating <br /> for Growth
        </h1>
        <p>
          Our team consists of over 30 design and development experts who work
          with our clients to scale their businesses to from 10 to 100 mln by
          building digital products. We&apos;ve helped multiple companies across
          various industries achieve their goals.
        </p>
      </div>
      <div className={c.team_members}>
        {members.map((user, i) => (
          <div key={i}>
            <Image
              src={user.img}
              height={427}
              width={315}
              alt="team member image"
            />
            <h4>{user.name}</h4>
            <h5>{user.role}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
