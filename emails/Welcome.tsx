import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Text,
  Button,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import config from "../tailwind.config";

export default function EmailConfirmation() {
  return (
    <Html>
      <Head>
        <title>Welcome</title>
      </Head>
      <Tailwind config={config}>
        <Body>
          <div className="p-6 bg-[#fafafa] ">
            <Container
              style={{ borderTopWidth: 4, borderTopStyle: "solid" }}
              className="p-6 border-[#F26622] "
            >
              <Section className="flex justify-center">
                <Heading className="text-3xl font-bold text-center text-[#F26622]">
                  HELLO!
                </Heading>
                <Img
                  src="https://trello.com/1/cards/66f275e660d69de19b60e103/attachments/66f2e01895bcad82a736ccfa/previews/66f2e01995bcad82a736cd04/download/Asset_2.png"
                  alt="logo"
                />
              </Section>
              <Section className="bg-white border border-[#ededed] rounded-lg shadow-md p-6">
                <Text className="text-lg text-center">Hello [Name],</Text>
                <Text className="text-center mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quae consequuntur commodi doloremque nostrum
                  perferendis asperiores inventore blanditiis maxime similique
                  explicabo dolorum placeat repellendus eligendi nihil nemo
                  repellat voluptatibus saepe voluptatum exercitationem
                  reprehenderit pariatur, velit nisi. Odit minima soluta
                  laudantium? Perspiciatis facilis, aut ipsa ea ad at tempora
                  dolorum cumque?
                </Text>
                <Text className="text-center mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  facilis magni earum similique aspernatur reiciendis commodi
                  modi totam? Eius blanditiis ducimus totam saepe, officiis vero
                  maiores! Non beatae velit amet?
                </Text>
                <Text className="text-center mt-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text className="text-center mt-4">
                  Would you like to get more information?
                </Text>
                <Section className="flex justify-center mt-4">
                  <Button
                    href="#"
                    style={{
                      backgroundColor: "#F26622",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    More Information
                  </Button>
                </Section>
                <Text className="text-center mt-4">
                  If you have any questions, please contact me.
                </Text>
                <Text className="text-center mt-4">
                  Alper Tunga
                  <br />
                </Text>
              </Section>
            </Container>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
