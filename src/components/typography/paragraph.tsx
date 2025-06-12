import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  textColor?: "black900";
}
const Paragraph = ({
  children,
  textColor = "black900",
  ...rest
}: ParagraphProps) => {
  return (
    <p
      {...rest}
      className={cn(
        "font-normal text-sm md:text-base",
        {
          "text-blue-grey-black-900": textColor === "black900",
        },
        rest.className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
