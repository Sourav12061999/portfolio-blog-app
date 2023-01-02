import {} from "react";
import { HeaderActionProps } from "../../index.types";
import useStyles from "Features/Navbar/styles";

function NavItems({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}

export default NavItems;
