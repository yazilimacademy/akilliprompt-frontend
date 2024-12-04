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
} from '@react-email/components';
import * as React from 'react';
import config from '../tailwind.config';
export default function EmailConfirmation() {
  return (
    <Html>
      <Head>
        <title>Email Onayı</title>
      </Head>
      <Tailwind config={config}>
        <Body>
          <div
            style={{ borderTopWidth: 4, borderTopStyle: 'solid' }}
            className="p-6 border-[#F26622] bg-[#fafafa]"
          >
            <Container>
              <Section className="flex justify-center">
                <Img
                  src="https://trello.com/1/cards/66f275e660d69de19b60e103/attachments/66f2e01895bcad82a736ccfa/previews/66f2e01995bcad82a736cd04/download/Asset_2.png"
                  alt="Email Confirmation"
                  width={100}
                  height={100}
                />
              </Section>
              <Section className="bg-white border border-[#ededed] rounded-lg shadow-md">
                <Heading className="text-center text-[#F26622] ">
                  Email Confirmation
                </Heading>

                <Text className="text-center p-4">
                  We have sent an email to trial@gmail.com, please email Confirm
                  the validity of your address. After receiving the email,
                  Follow the link provided to complete your registration.
                </Text>

                <Text className="text-center p-4">
                  If you have not received any emails,
                  <Button href="#" style={{ color: '#007BFF' }}>
                    Send confirmation email again
                  </Button>
                </Text>
              </Section>
            </Container>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
