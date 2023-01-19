import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  progressBar: {
    "&:not(:first-of-type)": {
      borderLeft: `3px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      }`,
    },
  },

  headers: {
    fontSize: 30,
  },
}));

export default useStyles;
