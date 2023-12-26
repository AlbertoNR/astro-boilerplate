import React, { type SVGProps } from "react";
import { css } from "../../styled-system/css";

export const Footer = () => {
  return (
    <footer
      className={css({
        display: "flex",
        flexDir: "column",
        gap: "2",
        sm: { flexDir: "row" },
        pt: "6",
        pb: "6",
        w: "full",
        flexShrink: "0",
        alignItems: "center",
        pl: "4",
        pr: "4",
        md: { pl: "6", pr: "6" },
        borderTopWidth: "1px",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          mr: "4",
          ml: "4",
        })}
      >
        <PhoneIcon className={css({ h: "5", w: "5" })} />
        <p className={css({ fontSize: "sm", lineHeight: "sm", ml: "4" })}>
          (123) 456-7890
        </p>
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          mr: "4",
          ml: "4",
        })}
      >
        <MailIcon className={css({ h: "5", w: "5" })} />
        <p className={css({ fontSize: "sm", lineHeight: "sm", ml: "4" })}>
          info@psychotherapyclinic.com
        </p>
      </div>
      <nav
        className={css({
          sm: { ml: "auto", gap: "6" },
          display: "flex",
          gap: "4",
        })}
      >
        <a
          className={css({
            fontSize: "xs",
            lineHeight: "xs",
            _hover: { textDecorationLine: "underline" },
            textUnderlineOffset: "4px",
          })}
          href="#"
        >
          <FacebookIcon className={css({ w: "4", h: "4" })} />
        </a>
        <a
          className={css({
            fontSize: "xs",
            lineHeight: "xs",
            _hover: { textDecorationLine: "underline" },
            textUnderlineOffset: "4px",
          })}
          href="#"
        >
          <TwitterIcon className={css({ w: "4", h: "4" })} />
        </a>
        <a
          className={css({
            fontSize: "xs",
            lineHeight: "xs",
            _hover: { textDecorationLine: "underline" },
            textUnderlineOffset: "4px",
          })}
          href="#"
        >
          <InstagramIcon className={css({ w: "4", h: "4" })} />
        </a>
      </nav>
    </footer>
  );
};

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

const MailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};
