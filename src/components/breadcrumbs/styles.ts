import styled from 'styled-components';

export const BreadCrumbList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const BreadCrumbListItem = styled.li`
  --spacing: 8px;

  display: inline;

  &:not(:first-child) {
    margin-left: var(--spacing);

    &:before {
      content: '';
            border-right: 1px solid;
      height: 0.8rem;
      transform: rotate(15deg);
      margin-right: var(--spacing);
      display: inline-block;
    }
  }
`

export const BreadCrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`
