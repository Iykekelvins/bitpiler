import { members } from "@/utils";

import Image from "next/image";
import Buttons from "@/shared/Buttons";
import Link from "@/shared/Link";

import c from "./About.module.scss";

const OurTeam = () => {
  return (
    <section className={c.about_team}>
      <div className={c.about_team_intro} data-animation="text">
        <h4 data-splitting="chars">OUR GROWING TEAM</h4>
        <h1 data-splitting="words">
          Collaborating <br /> for Growth
        </h1>
      </div>
      <div className={c.about_team_members}>
        {members.slice(0, 3).map((user) => (
          <div key={user.name} data-animation="text" data-selector="member">
            <Image
              src={user.img}
              height={427}
              width={315}
              alt="team member image"
            />
            <h4 data-splitting="words">{user.name}</h4>
            <h5 data-splitting="words">{user.role}</h5>
          </div>
        ))}
      </div>
      <div className={c.about_team_footer}>
        <Link href="/our-team" className="" linkText="our team">
          <Buttons title="Meet our Team" blackText />
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
