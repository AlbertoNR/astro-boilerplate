import React from "react";
import { css } from "../../styled-system/css";
import { Card, CardContent, CardHeader } from "./shared/Card";

export const Services = () => {
  return (
    <section
      id="services"
      className={css({
        w: "full",
        pt: "12",
        pb: "12",
        md: { pt: "24", pb: "24" },
        lg: { pt: "32", pb: "32" },
        bgColor: "gray.100",
        _dark: { bgColor: "gray.800" },
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
          Our Services
        </h2>
        <div
          className={css({
            display: "grid",
            gap: "6",
            lg: { gridTemplateColumns: "3" },
            xl: { gridTemplateColumns: "4" },
          })}
        >
                <Card>
        <CardHeader>
          <img
            alt="Individual Therapy"
            className={css({ w: 'full', h: '40', objectFit: 'cover' })}
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover',
            }}
            width="200"
          />
          <h3 className={css({ fontSize: 'lg', lineHeight: 'lg', fontWeight: 'semibold', mt: '2' })}>
            Individual Therapy
          </h3>
        </CardHeader>
        <CardContent>
          <p className={css({ color: 'gray.500' })}>One-on-one sessions to help you navigate personal challenges.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            alt="Family Therapy"
            className={css({ w: 'full', h: '40', objectFit: 'cover' })}
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover',
            }}
            width="200"
          />
          <h3 className={css({ fontSize: 'lg', lineHeight: 'lg', fontWeight: 'semibold', mt: '2' })}>Family Therapy</h3>
        </CardHeader>
        <CardContent>
          <p className={css({ color: 'gray.500' })}>
            Group sessions to help families resolve conflicts and improve communication.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            alt="Couples Therapy"
            className={css({ w: 'full', h: '40', objectFit: 'cover' })}
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover',
            }}
            width="200"
          />
          <h3 className={css({ fontSize: 'lg', lineHeight: 'lg', fontWeight: 'semibold', mt: '2' })}>
            Couples Therapy
          </h3>
        </CardHeader>
        <CardContent>
          <p className={css({ color: 'gray.500' })}>Sessions for couples looking to strengthen their relationship.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            alt="Group Therapy"
            className={css({ w: 'full', h: '40', objectFit: 'cover' })}
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover',
            }}
            width="200"
          />
          <h3 className={css({ fontSize: 'lg', lineHeight: 'lg', fontWeight: 'semibold', mt: '2' })}>Group Therapy</h3>
        </CardHeader>
        <CardContent>
          <p className={css({ color: 'gray.500' })}>
            Group sessions where individuals can gain insight and support from others facing similar issues.
          </p>
        </CardContent>
      </Card>
        </div>
      </div>
    </section>
  );
};
