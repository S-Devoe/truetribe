import Container from "@/components/container";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { Badge } from "@/components/ui/badge";
import Party from "@/assets/young-people-party.png";

import Image from "next/image";

const SectionFive = () => {
  return (
    <section className="w-full bg-[#F0F6FF]">
      <Container className="gap-4">
        <Badge>Our Cultural Commitment</Badge>
        <Heading className="max-w-[54rem] text-center" as="h2">
          Preserving the Past, Empowering the Present
        </Heading>
        <Paragraph className="text-center max-w-[41rem]">
          This app isn&apos;t just about technology—it&apos;s about connection.
          Turetribe is committed to preserving tradition while embracing
          innovation. From storytelling to service, every tap brings us closer
          as a people.
        </Paragraph>
        <section className="w-full mt-4">
          <Image
            src={Party}
            alt="girl-img"
            width={1060}
            height={496}
            className="rounded-md object-contain lg:h-[31rem]"
          />
        </section>
      </Container>
    </section>
  );
};

export default SectionFive;
