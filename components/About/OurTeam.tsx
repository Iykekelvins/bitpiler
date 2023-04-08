import { members } from "@/utils";
import c from "./About.module.scss";
import Image from "next/image";
import Buttons from "@/shared/Buttons";
import Link from "next/link";

const OurTeam = () => {
  return (
    <section className={c.about_team}>
      <div className={c.about_team_intro}>
        <h4>OUR GROWING TEAM</h4>
        <h1>
          Collaborating <br /> for Growth
        </h1>
      </div>
      <div className={c.about_team_members}>
        {members.map((user) => (
          <div key={user.name}>
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
      <div className={c.about_team_footer}>
        <Link href="/our-team">
          <Buttons title="Meet our Team" blackText />
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
