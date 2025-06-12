import Container from "@/components/container";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { Badge } from "@/components/ui/badge";
import {
  AnnouncementIcon,
  CalendarIcon,
  FilesIcon,
  PollIcon,
  ScrollIcon,
  WalletIcon,
} from "@/icons/icon-pack-1";
import { cn } from "@/lib/utils";
import type { JSX } from "react";

const SectionThree = () => {
  return (
    <section className="w-full bg-white">
      <Container className="gap-4">
        <Badge variant="secondary">Our Core Values</Badge>
        <Heading as="h2" className="text-center max-w-[49rem]">
          Built to Connect, Support, and Unite our Community.
        </Heading>

        <section className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {coreValues.map((value, index) => (
            <div
              className={cn("p-10 border rounded-lg", {
                "border-blue3b/48 text-blue3b":
                  value.colorIdentifier === "blue",
                "border-orange-stint/48 text-orange-stint":
                  value.colorIdentifier === "orange",
                "border-green2b/48 text-green2b":
                  value.colorIdentifier === "green",
                "border-yellowFF/48 text-yellowFF":
                  value.colorIdentifier === "yellow",
                "border-pinkFF/48 text-pinkFF":
                  value.colorIdentifier === "pink",
                "border-purple97/48 text-purple97":
                  value.colorIdentifier === "purple",
              })}
              key={index + 1}
            >
              {value.icon}
              <div className="mt-10 text-blue-grey-black-900 flex flex-col gap-3">
                <Heading as="h3" className="text-lg lg:text-2xl font-semibold">
                  {value.header}
                </Heading>
                <Paragraph>{value.body}</Paragraph>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default SectionThree;

const coreValues: Array<{
  header: string;
  body: string;
  colorIdentifier: "blue" | "orange" | "green" | "yellow" | "pink" | "purple";
  icon: JSX.Element;
}> = [
  {
    header: "Announcements",
    body: "Stay updated with messages from traditional leaders, community heads, and town unions",
    colorIdentifier: "blue",
    icon: <AnnouncementIcon />,
  },
  {
    header: "Events ",
    body: "Stay updated with messages from traditional leaders, community heads, and town unions",
    colorIdentifier: "orange",
    icon: <CalendarIcon />,
  },
  {
    header: "Cultural  Archive",
    body: "Explore the rich history, values, and customs of Egbu in a well-organized, multimedia format.",
    icon: <ScrollIcon />,
    colorIdentifier: "green",
  },
  {
    icon: <WalletIcon />,
    header: "Contributions",
    body: "Easily make your monthly or annual contributions, see your payment history, and receive digital receipts.",
    colorIdentifier: "yellow",
  },
  {
    icon: <FilesIcon />,
    header: "Member Directory",
    body: "Discover verified members by family, village, or title. View contact cards and service roles.",
    colorIdentifier: "pink",
  },
  {
    icon: <PollIcon />,
    header: "Polls & Decision Making",
    body: "Participate in votes, town hall polls, and collective decisions—no matter where you are in the world.",
    colorIdentifier: "purple",
  },
];
