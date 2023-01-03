import { HeaderActionProps } from "Features/Navbar/index.types";
export const NavLinks: HeaderActionProps = {
  links: [
    {
      label: "Home",
      scroll: 200,
    },
    {
      label: "Skills",
      scroll: 500,
    },
    {
      label: "Projects",
      scroll: 800,
    },
    {
      scroll: 1200,
      label: "Pricing",
    },
    {
      scroll: 1500,
      label: "Support",
    },
  ],
};
