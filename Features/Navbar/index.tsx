import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import { HeaderActionProps } from "./index.types";
import NavItems from "./Components/NavItems";
import useStyles from "./styles";
const HEADER_HEIGHT = 60;

function Navbar(props: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Group>
        <Group spacing={5} className={classes.links}>
          <NavItems {...props} />
        </Group>
        <Button radius="xl" sx={{ height: 40, fontSize: 20 }}>
          Blogs
        </Button>
      </Container>
    </Header>
  );
}

export default Navbar;
