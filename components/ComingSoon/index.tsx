import Head from "next/head";
import Buttons from "@/shared/Buttons";

import c from "./ComingSoon.module.scss";

const ComingSoon = () => {
  return (
    <div className={c.soon}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="Keywords" />

        <title>Bitpiler - Coming Soon</title>
      </Head>
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
