import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headerColor?: "black3b" | "darkGreen" | "black33" | "lightGreen";
  miniH1?: boolean;
}
const Heading = ({
  children,
  as = "h1",
  headerColor,
  miniH1,
  ...rest
}: HeadingProps) => {
  const HeadingTag = as;
  return (
    <HeadingTag
      {...rest}
      className={cn(
        "text-blue-grey-black-1000 tracking-[1.28px] leading-[83px] font-bold text-3xl lg:text-[4rem]",
        {
          "text-[2rem] lg:text-[3rem] font-extrabold": as === "h2",
        },
        rest.className
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
