import styled from "styled-components";
import { COLORS } from "../constants";

type SizesType = {
  small: Record<string, string>;
  medium: Record<string, string>;
  large: Record<string, string>;
}

export const SIZES: SizesType = {
  small: {
    '--borderRadius': '2px',
    '--fontSize': `${16 /16}rem`,
    '--width': '93px',
    '--height': '35px',
  },
  medium: {
    '--borderRadius': '2px',
    '--fontSize': `${18/16}rem`,
    '--width': '117px',
    '--height': '53px',
  },
  large: {
    '--borderRadius': '4px',
    '--fontSize': `${18/16}rem`,
    '--width': '152px',
    '--height': '65px',
  }
}

const BaseBtn = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: var(--fontSize);
  text-transform: uppercase;
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  /* In case it is used as a link */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: auto;
`;

export const FilledButton = styled(BaseBtn)`
  background: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background: ${COLORS.primaryLight}
  }

  &:focus {
    outline: 1px  solid ${COLORS.white};
    outline-offset: -2px;
  }
`;

export const OutlinedButton = styled(BaseBtn)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};

  &:hover {
    background: ${COLORS.offwhite}
  }

  &:focus {
    outline: 2px  solid ${COLORS.primary};
    outline-offset: -4px;
  }
`;

export const GhostButton = styled(BaseBtn)`
  background: transparent;
  color: ${COLORS.gray};

  &:hover {
    background: ${COLORS.transparentGray15}
  }

  &:focus {
    outline: none;
    border: 2px  solid ${COLORS.transparentGray75};
  }
`;
