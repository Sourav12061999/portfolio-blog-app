import {} from "react";
import { HeaderActionProps } from "../../index.types";
import useStyles from "Features/Navbar/styles";
function NavItems({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  return (
    <>
      {links.map((link) => {
        return (
          <p
            key={link.label}
            className={classes.link}
            onClick={(event) => {
              if (link.scroll == undefined) {
                return;
              }
              window.scroll(0, link.scroll);
            }}
          >
            {link.label}
          </p>
        );
      })}
    </>
  );
}

export default NavItems;
