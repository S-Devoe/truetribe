import Container from "@/components/container";
import Heading from "@/components/typography/heading";
import { Badge } from "@/components/ui/badge";
import React from "react";
import CitizenImage from "@/assets/citizen.png";
import { StaticImageData } from "next/image";
import WhatTheyCanDo, { WhatTheyDoBgType } from "../component/what-they-do";

const SectionFour = () => {
  return (
    <>
      <section className="w-full bg-blush-pink">
        <Container className="gap-4">
          <Badge variant="secondary">Community Roles</Badge>
          <Heading as="h2" className="max-w-[40rem] text-center">
            Built for Every Member of the Kingdom
          </Heading>
        </Container>
      </section>
      {whatTheyDo.map((item, index) => (
        <WhatTheyCanDo
          key={index}
          bgColor={item.bgColor}
          reverse={item.isReversed}
          header={item.header}
          imageSrc={item.imageSrc}
          paragraph={item.paragraph}
        />
      ))}
    </>
  );
};

export default SectionFour;

const whatTheyDo: Array<{
  header: string;
  paragraph: string;
  imageSrc: string | StaticImageData;
  isReversed: boolean;
  bgColor: WhatTheyDoBgType;
}> = [
  {
    header: "Citizens",
    paragraph:
      "Receive real-time updates, pay community dues, participate in polls and discussions, access event details, and engage with cultural content and resources.",
    imageSrc: CitizenImage,
    isReversed: false,
    bgColor: "blush-pink",
  },
  {
    header: "Village Reps",
    paragraph:
      "Manage local member directories, share news and event info, coordinate community development projects, and serve as a bridge between leaders and citizens.",
    imageSrc: CitizenImage,
    isReversed: true,
    bgColor: "peach-cream",
  },
  {
    header: "Town Union Executives",
    paragraph:
      "Oversee member engagement, approve updates, manage contributions, post official announcements, and host virtual meetings or digital congresses.",
    imageSrc: CitizenImage,
    isReversed: false,
    bgColor: "sky-glow",
  },
  {
    header: "Elders & Chiefs",
    paragraph:
      "Preserve and share cultural knowledge, send blessings or ceremonial updates, contribute to the heritage archive, and guide community discourse.",
    imageSrc: CitizenImage,
    isReversed: true,
    bgColor: "cloud-white",
  },
  {
    header: "Youths & Volunteers",
    paragraph:
      "Discover cultural programs, find job and scholarship opportunities, volunteer for local events, and connect with mentors within the community.",
    imageSrc: CitizenImage,
    isReversed: false,
    bgColor: "blush-pink",
  },
];
