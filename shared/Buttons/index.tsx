import { FC } from "react";
import c from "./Buttons.module.scss";

interface IButton {
  title: string;
  arrow?: boolean;
  play?: boolean;
  started?: boolean;
  blackText?: boolean;
  onClick?: () => void;
}

const Buttons: FC<IButton> = ({
  title,
  arrow,
  play,
  started,
  blackText,
  onClick,
}) => {
  return (
    <button
      className={`${c.button} ${
        started ? c.started : blackText ? c.black : ""
      }`}
      onClick={onClick}
    >
      <span>{title}</span>
      {arrow ? (
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5148 0.514771L13.6239 1.40567L17.5882 5.37004H0V6.62998H17.5882L13.6239 10.5943L14.5148 11.4852L20 5.99996L14.5148 0.514771Z"
            fill="white"
          />
        </svg>
      ) : play ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_223_10)">
            <path
              d="M6.45992 4.5325L15.2166 9.64083C15.2793 9.67757 15.3314 9.73009 15.3676 9.79317C15.4037 9.85625 15.4228 9.9277 15.4228 10.0004C15.4228 10.0731 15.4037 10.1446 15.3676 10.2077C15.3314 10.2707 15.2793 10.3233 15.2166 10.36L6.45992 15.4683C6.39648 15.5054 6.32437 15.5249 6.25092 15.5251C6.17746 15.5253 6.10527 15.5061 6.04165 15.4693C5.97802 15.4326 5.92524 15.3797 5.88864 15.316C5.85205 15.2524 5.83294 15.1801 5.83326 15.1067V4.8925C5.83323 4.81918 5.85256 4.74716 5.88927 4.6837C5.92599 4.62025 5.9788 4.5676 6.04237 4.53108C6.10594 4.49456 6.17802 4.47546 6.25134 4.47571C6.32465 4.47596 6.3966 4.49555 6.45992 4.5325Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_223_10">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <></>
      )}
    </button>
  );
};

export default Buttons;
