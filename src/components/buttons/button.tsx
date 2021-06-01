// import styled from "styled-components";

import {
  BaseBtn,
  FilledButton,
  GhostButton,
  OutlinedButton,
  SIZES,
} from "./styles";

type ButtonProps = {
  variant?: "fill" | "outline" | "ghost";
  size: "small" | "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  if (variant === "fill")
    return <FilledButton style={SIZES[size]}>{children}</FilledButton>;

  if (variant === "outline")
    return <OutlinedButton style={SIZES[size]}>{children}</OutlinedButton>;

  if (variant === "ghost")
    return <GhostButton style={SIZES[size]}>{children}</GhostButton>;

  return <BaseBtn style={SIZES[size]}>{children}</BaseBtn>;
};

export default Button;
