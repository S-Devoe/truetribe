import { TrueTribeLogo } from "@/icons/logo";
import Container from "../container";
import { AppstoreAppLink } from "../svgs/appstore-app-link";
import { PlaystoreAppLink } from "../svgs/playstore-app-link";
import Paragraph from "../typography/paragraph";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/icons/socials";

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <Container className="px-5 xl:px-0 text-white lg:py-16">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col items-center md:items-start justify-center gap-5">
            <TrueTribeLogo />
            <Paragraph className="text-white text-center md:text-start text-sm lg:text-sm max-w-[23rem]">
              An all-in-one mobile platform designed to unify, inform, and
              empower every son and daughter of Egbu through culture, service,
              and community
            </Paragraph>
            <div className="flex items-start gap-2 md:mt-6 z-1">
              <PlaystoreAppLink />
              <AppstoreAppLink />
            </div>
          </div>
          <div className="mt-5 md:mt-0 flex flex-col items-center md:items-start gap-5">
            <div className="flex items-center gap-14 [&>a]:text-sm">
              <Link href="#">About Us</Link>
              <Link href="#">Join community</Link>
            </div>
            <div className="mt-12 flex items-end gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.header}
                  href={link.url}
                  className="flex items-center justify-center text-[#E5E7EB] size-9 border-[1.5px] border-[#e5e7eb1f] rounded-full"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#e5e7eb1f] pt-6 w-full">
          <Paragraph className="text-[#E5E7EB] text-center md:text-start">
            © {new Date().getFullYear()} truetribe. All rights reserved.{" "}
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const socialLinks = [
  {
    header: "linkedIn",
    url: "#",
    icon: <LinkedInIcon />,
  },
  {
    header: "facebook",
    url: "#",
    icon: <FacebookIcon />,
  },
  {
    header: "twitter",
    url: "#",
    icon: <TwitterIcon />,
  },
  {
    header: "instagram",
    url: "#",
    icon: <InstagramIcon />,
  },
];
