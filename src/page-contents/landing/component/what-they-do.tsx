import Container from "@/components/container";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";

export type WhatTheyDoBgType =
  | "blush-pink"
  | "peach-cream"
  | "sky-glow"
  | "cloud-white";

interface WhatTheyDoProps {
  bgColor: WhatTheyDoBgType;
  reverse: boolean;
  header: string;
  paragraph: string;
  imageSrc: string | StaticImageData;
}
const WhatTheyCanDo = ({
  bgColor,
  reverse,
  header,
  imageSrc,
  paragraph,
}: WhatTheyDoProps) => {
  return (
    <section
      className={cn("w-full bg-white", {
        "bg-blush-pink": bgColor === "blush-pink",
        "bg-peach-cream": bgColor === "peach-cream",
        "bg-sky-glow": bgColor === "sky-glow",
        "bg-cloud-white": bgColor === "cloud-white",
      })}
    >
      <Container
        className={cn(
          "gap-4 md:gap-14 lg:gap-28 flex-col md:flex-row items-center justify-center",
          {
            " md:flex-row-reverse": reverse,
          }
        )}
      >
        <div className="flex-1 flex-col gap-4">
          <Badge>Our Core Values</Badge>
          <Heading as="h2" className="text-center md:text-start">
            {header}
          </Heading>
          <Paragraph className="max-w-[24.5rem]">{paragraph}</Paragraph>
        </div>
        <Image
          src={imageSrc}
          alt="citizen"
          height={600}
          width={600}
          className="flex-1 h-[37rem] w-[37rem] object-contain rounded-lg"
        />
      </Container>
    </section>
  );
};

export default WhatTheyCanDo;
