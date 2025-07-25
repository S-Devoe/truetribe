import { cn } from "@/lib/utils";
import { IconPropsT } from "@/types";

export const TextHighlight = (props: IconPropsT) => {
  return (
    <svg
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-4 w-6 lg:h-[34px] lg:w-[35px]", props.className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.384 7.41796C12.1872 5.94436 13.7958 4.20542 15.3421 2.5087C15.6738 2.1423 15.657 1.57415 15.2849 1.27011C14.9326 0.937201 14.3722 0.972094 14.0607 1.30983C12.5635 2.95544 11.01 4.64696 9.28642 6.04802C8.91722 6.34529 8.85666 6.90229 9.15693 7.28429C9.45691 7.66609 10.0145 7.71503 10.384 7.41796Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7805 18.1056C18.8676 17.2679 23.8285 15.7852 28.9562 15.0616C29.4264 15.0065 29.764 14.5586 29.6954 14.0824C29.6266 13.6061 29.1925 13.2587 28.7022 13.3425C23.5655 14.0598 18.596 15.5365 13.5 16.3679C13.0166 16.4566 12.6906 16.9124 12.7668 17.394C12.863 17.8467 13.297 18.1942 13.7805 18.1056Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4878 31.7779C19.7024 30.653 17.9171 29.5279 16.1314 28.4028C15.7363 28.1254 15.1896 28.2555 14.927 28.6704C14.6647 29.0855 14.7998 29.6082 15.1952 29.8858C16.9835 31.0127 18.7714 32.1396 20.5593 33.2663C20.9746 33.515 21.5192 33.3837 21.7795 32.9671C22.0197 32.5793 21.9027 32.0264 21.4878 31.7779Z"
        fill="currentColor"
      />
    </svg>
  );
};
