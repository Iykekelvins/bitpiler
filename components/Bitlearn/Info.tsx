import { useEffect } from "react";
import c from "./Bitlearn.module.scss";
import { animateGroup } from "@/animations";

const Info = () => {
  useEffect(() => {
    animateGroup('[data-animation="text"]');
  }, []);
  return (
    <section className={c.bitlearn_info}>
      <div className={c.bitlearn_info_grid}>
        <div className={c.bitlearn_info_grid_item} data-animation="text">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_408_631)">
              <path
                d="M24.7667 0C16.3672 0 9.53355 6.83361 9.53355 15.2332C9.53355 19.0121 10.9172 22.4736 13.2039 25.1389L11.6002 26.7426C10.2937 26.1202 8.67995 26.3486 7.5998 27.4286L0 35.0285L4.97141 40L12.5713 32.4001C13.6515 31.32 13.8797 29.7062 13.2573 28.3997L14.861 26.796C17.5264 29.0826 20.9878 30.4664 24.7667 30.4664C33.1663 30.4664 39.9999 23.6328 39.9999 15.2332C39.9999 6.83361 33.1664 0 24.7667 0V0ZM10.9141 30.743L4.97141 36.6857L3.31427 35.0285L9.25693 29.0858C9.71393 28.6289 10.4573 28.6289 10.9141 29.0858C11.3722 29.5438 11.3722 30.285 10.9141 30.743ZM24.7667 28.1228C17.6594 28.1228 11.8771 22.3405 11.8771 15.2332C11.8771 8.12585 17.6594 2.34357 24.7667 2.34357C31.8741 2.34357 37.6564 8.12585 37.6564 15.2332C37.6564 22.3405 31.8741 28.1228 24.7667 28.1228Z"
                fill="white"
              />
              <path
                d="M29.4543 9.37426C29.4543 6.78978 27.3517 4.68713 24.7672 4.68713C22.1827 4.68713 20.0801 6.78978 20.0801 9.37426C20.0801 11.9587 22.1827 14.0614 24.7672 14.0614C27.3517 14.0614 29.4543 11.9587 29.4543 9.37426ZM24.7672 11.7178C23.475 11.7178 22.4236 10.6665 22.4236 9.37426C22.4236 8.08202 23.475 7.0307 24.7672 7.0307C26.0594 7.0307 27.1108 8.08202 27.1108 9.37426C27.1108 10.6665 26.0594 11.7178 24.7672 11.7178Z"
                fill="white"
              />
              <path
                d="M24.7669 14.0614C20.2441 14.0614 16.5645 17.741 16.5645 22.2639V23.4357H32.9694V22.2639C32.9694 17.741 29.2899 14.0614 24.7669 14.0614ZM19.0257 21.0921C19.5702 18.4211 21.9376 16.405 24.7669 16.405C27.5963 16.405 29.9637 18.4211 30.5081 21.0921H19.0257Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_408_631">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h2 data-splitting="words">
            Be employable in <br /> 6 years months
          </h2>
          <p data-splitting="words">
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs. And then we
            will implement them. Our team consists of over 30 design and
            development experts who work with our clients to scale their
            businesses to from 10 to 100 mln by building digital products.
            We&apos;ve helped multiple companies across various industries
            achieve their goals.
          </p>
        </div>
        <div className={c.bitlearn_info_grid_item} data-animation="text">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_408_631)">
              <path
                d="M24.7667 0C16.3672 0 9.53355 6.83361 9.53355 15.2332C9.53355 19.0121 10.9172 22.4736 13.2039 25.1389L11.6002 26.7426C10.2937 26.1202 8.67995 26.3486 7.5998 27.4286L0 35.0285L4.97141 40L12.5713 32.4001C13.6515 31.32 13.8797 29.7062 13.2573 28.3997L14.861 26.796C17.5264 29.0826 20.9878 30.4664 24.7667 30.4664C33.1663 30.4664 39.9999 23.6328 39.9999 15.2332C39.9999 6.83361 33.1664 0 24.7667 0V0ZM10.9141 30.743L4.97141 36.6857L3.31427 35.0285L9.25693 29.0858C9.71393 28.6289 10.4573 28.6289 10.9141 29.0858C11.3722 29.5438 11.3722 30.285 10.9141 30.743ZM24.7667 28.1228C17.6594 28.1228 11.8771 22.3405 11.8771 15.2332C11.8771 8.12585 17.6594 2.34357 24.7667 2.34357C31.8741 2.34357 37.6564 8.12585 37.6564 15.2332C37.6564 22.3405 31.8741 28.1228 24.7667 28.1228Z"
                fill="white"
              />
              <path
                d="M29.4543 9.37426C29.4543 6.78978 27.3517 4.68713 24.7672 4.68713C22.1827 4.68713 20.0801 6.78978 20.0801 9.37426C20.0801 11.9587 22.1827 14.0614 24.7672 14.0614C27.3517 14.0614 29.4543 11.9587 29.4543 9.37426ZM24.7672 11.7178C23.475 11.7178 22.4236 10.6665 22.4236 9.37426C22.4236 8.08202 23.475 7.0307 24.7672 7.0307C26.0594 7.0307 27.1108 8.08202 27.1108 9.37426C27.1108 10.6665 26.0594 11.7178 24.7672 11.7178Z"
                fill="white"
              />
              <path
                d="M24.7669 14.0614C20.2441 14.0614 16.5645 17.741 16.5645 22.2639V23.4357H32.9694V22.2639C32.9694 17.741 29.2899 14.0614 24.7669 14.0614ZM19.0257 21.0921C19.5702 18.4211 21.9376 16.405 24.7669 16.405C27.5963 16.405 29.9637 18.4211 30.5081 21.0921H19.0257Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_408_631">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h2 data-splitting="words">
            Personalized & <br /> Continuous Learning
          </h2>
          <p data-splitting="words">
            We&apos;ll study your product and give you solutions that will
            connect your objectives with your users&apos; needs. And then we
            will implement them. Our team consists of over 30 design and
            development experts who work with our clients to scale their
            businesses to from 10 to 100 mln by building digital products.
            We&apos;ve helped multiple companies across various industries
            achieve their goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
