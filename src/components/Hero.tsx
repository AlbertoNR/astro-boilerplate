import React from "react";
import { css } from "../../styled-system/css";

export const Hero = () => {
  return (
    <section
      className={css({
        w: "full",
        pt: "12",
        pb: "12",
        md: { pt: "24", pb: "24" },
        lg: { pt: "32", pb: "32" },
        xl: { pt: "48", pb: "48" },
      })}
    >
      <div
        className={css({
          w: "container",
          maxW: "container",
          pl: "4",
          pr: "4",
          md: { pl: "6", pr: "6" },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            mt: "4",
            mb: "4",
            textAlign: "center",
          })}
        >
          <img
            alt="Psychotherapy Clinic"
            className={css({ w: "48", h: "48", rounded: "full" })}
            height="300"
            src="/home.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <div className={css({ mt: "2", mb: "2" })}>
            <h1
              className={css({
                fontSize: "3xl",
                lineHeight: "3xl",
                fontWeight: "bold",
                letterSpacing: "tighter",
                sm: { fontSize: "4xl", lineHeight: "4xl" },
                md: { fontSize: "5xl", lineHeight: "5xl" },
                lg: { fontSize: "6xl/none", lineHeight: "6xl/none" },
              })}
            >
              Welcome to Psychotherapy Clinic
            </h1>
            <p
              className={css({
                ml: "auto",
                mr: "auto",
                maxW: "700px",
                color: "gray.500",
                md: { fontSize: "xl", lineHeight: "xl" },
                _dark: { color: "gray.400" },
              })}
            >
              We offer professional and compassionate therapy services to help
              you navigate life's challenges.
            </p>
          </div>
          <div className={css({ mr: "4", ml: "4" })}>
            <a
              className={css({
                display: "inline-flex",
                h: "9",
                alignItems: "center",
                justifyContent: "center",
                rounded: "md",
                bgColor: "gray.900",
                pl: "4",
                pr: "4",
                pt: "2",
                pb: "2",
                fontSize: "sm",
                lineHeight: "sm",
                fontWeight: "medium",
                color: "gray.50",
                shadow: "shadow",
                transitionProperty:
                  "color, background-color, border-color, text-decoration-color, fill, stroke",
                transitionTimingFunction: "colors",
                transitionDuration: "colors",
                _hover: {
                  bgColor: "gray.900/90",
                  _dark: { bgColor: "gray.50/90" },
                },
                _focusVisible: {
                  ring: "none",
                  ringOffset: "none",
                  shadow: "1",
                },
                _disabled: { pointerEvents: "none", opacity: "0.5" },
                _dark: { bgColor: "gray.50", color: "gray.900" },
              })}
              href="#"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
