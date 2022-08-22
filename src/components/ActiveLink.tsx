import { cloneElement, ReactElement } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { pathname } = useLocation();

  let isActive = false;

  if (pathname.split("/")[1] === rest.to.toString().split("/")[1]) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
