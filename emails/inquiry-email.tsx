/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Font,
  Head,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

export const InquiryEmail = ({
  body,
  email,
}: {
  body: string;
  email: string;
}) => {
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
          <Text className="text-2xl font-bold my-2">Inquiry</Text>
          <Img
            src="https://wabtech-admin.vercel.app/logo.png"
            alt="Wabtech Logo"
            height="60"
            width="60"
            className="mx-auto"
          />

          <Text className="mt-4 text-left">{`From ${email}`}</Text>

          <Text className="mt-4 text-lg text-left">{body}</Text>

          <Text className="mt-4 pt-3 border-t border-t-slate-500 text-sm text-slate-600">
            Copyright ©{new Date().getFullYear()} Wabtech
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
};
