// import styled from "styled-components";

import { StyledComponent } from "styled-components";
import { FilledButton, GhostButton, OutlinedButton, SIZES } from "./styles";

type ButtonProps = {
  variant?: "fill" | "outline" | "ghost";
  size: "small" | "medium" | "large";
  className?: string;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
  href,
}) => {
  let ButtonComponent: StyledComponent<
    "button" | "a",
    Record<string, unknown>,
    { href?: string },
    never
  >;

  switch (variant) {
    case "fill":
    default:
      ButtonComponent = FilledButton;
      break;
    case "outline":
      ButtonComponent = OutlinedButton;
      break;
    case "ghost":
      ButtonComponent = GhostButton;
  }

  return (
    <ButtonComponent
      style={SIZES[size]}
      className={className}
      as={href ? "a" : "button"}
      href={href}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
