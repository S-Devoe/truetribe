import Container from "@/components/container";
import { AppstoreAppLink } from "@/components/svgs/appstore-app-link";
import { HeartbeatLine } from "@/components/svgs/heartbeat-line";
import { PlaystoreAppLink } from "@/components/svgs/playstore-app-link";
import { TextHighlight } from "@/components/svgs/text-highlight";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { UsersIcon } from "@/icons/icon-pack-1";
import EgbuWoman from "@/assets/egbu-woman.png";
import GroupLeft from "@/assets/left-side-group.png";
import GroupRight from "@/assets/right-side-group.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-svh">
      <div className="hero-blue-blur absolute top-32 left-6 z-0" />
      <div className="hero-yellow-blur absolute bottom-20 right-0 z-0" />
      <Container className="pb-0 lg:pb-0 flex flex-col items-center relative z-10 h-full">
        <div className="h-fit w-fit p-2 rounded-[1.25rem] bg-white border-[0.5px] border-pry-blue-200 flex items-center gap-1.5">
          <div className="text-white bg-pry-blue-800 rounded-full size-5 p-2 grid place-content-center ">
            <UsersIcon />
          </div>
          <Paragraph className="font-medium">
            Connect. Preserve. Empower
          </Paragraph>
        </div>
        <div className="py-4 flex flex-col items-center gap-4">
          <Heading as="h1" className="text-center">
            The Digital{" "}
            <span className="relative">
              Heartbeat
              <HeartbeatLine className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </span>{" "}
            of <br />
            <span className="text-orange-foreground relative">
              Truetribe
              <TextHighlight className="absolute top-3.5 -right-6 text-blue-grey-black-800" />
            </span>
          </Heading>
          <Paragraph className="max-w-[37.3rem] text-center">
            An all-in-one mobile platform designed to unify, inform, and empower
            every son and daughter of Egbu through culture, service, and
            community
          </Paragraph>
        </div>
        <div className="flex items-center gap-2 mt-1.5 z-1">
          <PlaystoreAppLink />
          <AppstoreAppLink />
        </div>
        <div className="mt-auto relative w-full flex justify-center ">
          <Image
            src={EgbuWoman}
            alt="woman"
            height={200}
            width={289}
            className="z-2"
          />
          <Image
            src={GroupLeft}
            alt="group"
            height={650}
            width={495}
            className="absolute bottom-4 object-contain right-[55%] h-[320px] lg:w-[30rem] lg:h-[39.6rem] z-0"
          />
          <Image
            src={GroupRight}
            alt="group"
            height={650}
            width={495}
            className="absolute bottom-4 object-contain left-[55%] h-[320px] lg:w-[30rem] lg:h-[39.6rem] z-0"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
