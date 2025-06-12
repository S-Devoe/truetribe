import Container from "@/components/container";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import MobileApp from "@/assets/mobile-app.png";
import Image from "next/image";
import { PlaystoreAppLink } from "@/components/svgs/playstore-app-link";
import { AppstoreAppLink } from "@/components/svgs/appstore-app-link";

const SectionSix = () => {
  return (
    <section className="w-full py-10">
      <Container className="bg-sunlight-haze rounded-lg flex-col md:flex-row items-center justify-between gap-7 md:gap-14 px-5 md:px-12 pb-2 lg:pb-2">
        <div className="">
          <Heading as="h2" className="text-center md:text-start">
            Your Community in Your Pocket -
            <span className="text-primary">Join Today</span>
          </Heading>
          <Paragraph className="text-center md:text-start max-w-[29rem]">
            Truetribe is a modern digital platform for community connection,
            cultural preservation, and empowerment. Whether at home or abroad,
            stay engaged with local events, leadership updates, and the
            traditions that matter
          </Paragraph>
          <div className="flex md:justify-start justify-center items-start gap-2 mt-6 z-1">
            <PlaystoreAppLink />
            <AppstoreAppLink />
          </div>
        </div>

        <Image
          src={MobileApp}
          alt="mobile-app"
          width={518}
          height={559}
          className="h-[25rem] lg:h-[34.9rem]"
        />
      </Container>
    </section>
  );
};

export default SectionSix;
