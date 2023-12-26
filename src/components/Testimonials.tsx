import React from "react";
import { css } from "../../styled-system/css";
import { Card, CardContent, CardHeader } from "./shared/Card";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={css({
        w: "full",
        pt: "12",
        pb: "12",
        md: { pt: "24", pb: "24" },
        lg: { pt: "32", pb: "32" },
      })}
    >
      <div
        className={css({
          w: "full",
          maxW: "full",
          pl: "4",
          pr: "4",
          md: { pl: "6", pr: "6" },
        })}
      >
        <h2
          className={css({
            fontSize: "3xl",
            lineHeight: "3xl",
            fontWeight: "bold",
            letterSpacing: "tighter",
            textAlign: "center",
            mb: "8",
            sm: { fontSize: "5xl", lineHeight: "5xl" },
          })}
        >
          Testimonials
        </h2>
        <div
          className={css({
            display: "grid",
            gap: "6",
            lg: { gridTemplateColumns: "2" },
            xl: { gridTemplateColumns: "3" },
          })}
        >
          <Card>
            <CardContent>
              <p className={css({ color: "gray.500" })}>
                "I've experienced a significant improvement in my mental health
                since I started therapy here. The therapists are compassionate
                and professional."
              </p>
            </CardContent>
            <CardHeader>
              <div className={css({ display: "flex", alignItems: "center" })}>
                <img
                  alt="John Doe"
                  className={css({
                    w: "10",
                    h: "10",
                    rounded: "full",
                    mr: "2",
                  })}
                  height="50"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <h3
                  className={css({
                    fontSize: "lg",
                    lineHeight: "lg",
                    fontWeight: "semibold",
                  })}
                >
                  John Doe
                </h3>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardContent>
              <p className={css({ color: "gray.500" })}>
                "The family therapy sessions have really helped improve our
                communication and resolve conflicts. I highly recommend their
                services."
              </p>
            </CardContent>
            <CardHeader>
              <div className={css({ display: "flex", alignItems: "center" })}>
                <img
                  alt="Jane Smith"
                  className={css({
                    w: "10",
                    h: "10",
                    rounded: "full",
                    mr: "2",
                  })}
                  height="50"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <h3
                  className={css({
                    fontSize: "lg",
                    lineHeight: "lg",
                    fontWeight: "semibold",
                  })}
                >
                  Jane Smith
                </h3>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardContent>
              <p className={css({ color: "gray.500" })}>
                "I appreciate the supportive and understanding environment at
                the clinic. It's been a great help in my journey towards better
                mental health."
              </p>
            </CardContent>
            <CardHeader>
              <div className={css({ display: "flex", alignItems: "center" })}>
                <img
                  alt="Alex Johnson"
                  className={css({
                    w: "10",
                    h: "10",
                    rounded: "full",
                    mr: "2",
                  })}
                  height="50"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <h3
                  className={css({
                    fontSize: "lg",
                    lineHeight: "lg",
                    fontWeight: "semibold",
                  })}
                >
                  Alex Johnson
                </h3>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
