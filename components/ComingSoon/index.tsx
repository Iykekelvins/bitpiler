import c from "./ComingSoon.module.scss";
import Buttons from "@/shared/Buttons";

const ComingSoon = () => {
  return (
    <div className={c.soon}>
      <div className={c.soon_content}>
        <h4 className="white">COMING SOON</h4>
        <h1 className="white">
          Get Notified when <br /> we Launch
        </h1>
        <p>
          With the right mentors, and challenging projects, any skill can be
          mastered.{" "}
        </p>

        <div className={c.soon_content_input}>
          <input type="text" placeholder="Enter Email Address" />
          <Buttons title="Notify me" started />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
