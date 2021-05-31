import { BreadCrumbLink, BreadCrumbListItem } from "./styles";

type CrumbProps = {
  href: string;
}

const Crumb: React.FC<CrumbProps> = ({ href, children }) => (
  <BreadCrumbListItem>
    <BreadCrumbLink href={href}>{children}</BreadCrumbLink>
  </BreadCrumbListItem>
);

export default Crumb;
