import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import config from "../tailwind.config";

export default function MagicLink() {
  return (
    <Html>
      <Head>
        <title>Payment Completed</title>
      </Head>
      <Tailwind config={config}>
        <Body>
          <div
            style={{ borderTopWidth: 4, borderTopStyle: "solid" }}
            className="p-6 border-[#F26622] bg-[#fafafa]"
          >
            <Container>
              <Section className="flex justify-center">
                <Img
                  src="https://trello.com/1/cards/66f275e660d69de19b60e103/attachments/66f2e01895bcad82a736ccfa/previews/66f2e01995bcad82a736cd04/download/Asset_2.png"
                  alt="logo"
                />
              </Section>

              <Section className="bg-white border border-[#ededed] rounded-lg shadow-md">
                <Heading as="h5" className="text-center text-2xl p-4">
                  Payment Completed
                </Heading>
                <Text className="text-center p-4">
                  Your payment has been processed successfully. Now to your
                  account you can access.
                </Text>
                <Section className="text-center p-4">
                  <a
                    href="#"
                    className="bg-[#F26622] text-white px-4 py-2 rounded"
                  >
                    Login to Your Account
                  </a>
                </Section>
              </Section>
            </Container>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
