import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLElement> {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: Props) => {
  return (
    <section
      {...rest}
      className={cn(
        "width-container flex flex-col items-center py-4 lg:py-14",
        rest.className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
