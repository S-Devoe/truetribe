import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const Heading = ({ children, as = "h1", ...rest }: HeadingProps) => {
  const HeadingTag = as;
  return (
    <HeadingTag
      {...rest}
      className={cn(
        "text-blue-grey-black-1000 lg:tracking-[1.28px] lg:leading-[83px] font-bold text-3xl lg:text-[4rem]",
        {
          "text-[1.5rem] lg:text-[3rem] font-extrabold": as === "h2",
        },
        rest.className
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
