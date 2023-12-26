import React, {
  type HTMLProps,
  type PropsWithChildren,
  type SVGProps,
} from "react";
import { css } from "../../styled-system/css";

const BrainIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20" />
      <path d="M12 2v10h10" />
    </svg>
  );
};

export const Navigation = () => {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        padding: "1rem 1.5rem",
        h: "3.5rem",
      })}
    >
      <a
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
        href="#"
      >
        <BrainIcon className={css({ h: "1.5rem", w: "1.5rem" })} />
        <span className={css({ display: "none" })}>Psychotherapy Clinic</span>
      </a>
      <nav
        className={css({
          marginLeft: "auto",
          display: "flex",
          gap: "1rem",
        })}
      >
        <Link href="/about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

const Link = ({
  children,
  ...props
}: PropsWithChildren<HTMLProps<HTMLAnchorElement>>) => (
  <a
    {...props}
    className={css({
      fontSize: "0.875rem",
      fontWeight: 500,
      transition: "text-decoration 0.2s ease",

      _hover: {
        textDecoration: "underline",
        textUnderlineOffset: "0.75rem",
      },
    })}
  >
    {children}
  </a>
);
