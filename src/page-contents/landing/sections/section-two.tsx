import Container from "@/components/container";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { Badge } from "@/components/ui/badge";
import GirlImg from "@/assets/girl-smiling.png";
import ManImg from "@/assets/smiling-man.png";
import GroupImg from "@/assets/group-smile.png";
import GroupTwoImg from "@/assets/group-smile-two.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="w-full bg-[#F0F6FF]">
      <Container className="gap-4">
        <Badge>About the App</Badge>
        <Heading as="h2">What is Truetribe App?</Heading>
        <Paragraph className="text-center max-w-[41rem]">
          Truetribe is a modern digital platform for community connection,
          cultural preservation, and empowerment. Whether at home or abroad,
          stay engaged with local events, leadership updates, and the traditions
          that matter
        </Paragraph>
        <section className="w-full mt-4 lg:max-h-[31rem] flex flex-col md:grid md:grid-cols-3 gap-4 [&>img]:object-cover [&>img]:rounded-lg">
          <Image
            src={ManImg}
            alt="man-img"
            width={395}
            height={496}
            className="lg:h-[31rem]"
          />
          <div className="flex flex-col gap-5 w-full [&>*]:rounded-lg">
            <Image
              src={GroupImg}
              alt="group-img"
              className="h-full object-cover"
            />
            <Image
              src={GroupTwoImg}
              alt="group-img"
              className="h-full object-cover"
            />
          </div>
          <Image
            src={GirlImg}
            alt="girl-img"
            width={395}
            height={496}
            className=" lg:h-[31rem]"
          />
        </section>
      </Container>
    </section>
  );
};

export default SectionTwo;
