/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import {
  Img,
  Button,
  Html,
  Container,
  Head,
  Font,
  Tailwind,
  Text,
  Link,
} from "@react-email/components";

export const EmailVerification = ({ url }: { url: string }) => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Questrial"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://db.onlinewebfonts.com/t/7800b61e9285dbd9d87245c1e0ed4b1d.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#0bab7c",
              },
            },
          },
        }}
      >
        <Container
          className="p-4 rounded-lg shadow bg-slate-100 flex-center-center text-center"
          style={{
            border: "1px solid #ccc",
          }}
        >
          <Text className="text-2xl font-bold my-2">Email Verification</Text>
          <Img
            src="https://www.wabtech.tech/logo.png"
            alt="Wabtech Logo"
            height="60"
            width="60"
            className="mx-auto"
          />
          <Text className="mt-2 text-lg text-left">
            Click the following button to verify your email address
          </Text>
          <Button
            href={url}
            className="bg-brand px-6 py-3 rounded-full font-medium leading-4 text-white w-max mx-auto"
          >
            Click me
          </Button>
          <Text className="mt-4 text-lg text-left">
            If the above didn't work, copy and paste this link into your web
            browser address bar to verify your email address
          </Text>
          <Link href={url} className="text-brand underline mt-2 text-base">
            {url}
          </Link>
          <Text className="mt-4 pt-3 border-t border-t-slate-500 text-sm text-slate-600">
            Copyright ©{new Date().getFullYear()} Wabtech
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
};
