import {} from "react";
import { Anchor, Group, Text, Progress, Badge } from "@mantine/core";
import useStyles from "../../style";
import { TableDataTypes } from "Features/Table/index.types";
function TRows({
  title,
  visits,
  topics,
  reviews: { positive, negative },
}: TableDataTypes) {
  const { classes, theme } = useStyles();
  const totalReviews = negative + positive;
  const positiveReviews = (positive / totalReviews) * 100;
  const negativeReviews = (negative / totalReviews) * 100;
  return (
    <tr key={title}>
      <td>
        <Anchor<"a"> size="sm" onClick={(event) => event.preventDefault()}>
          {title}
        </Anchor>
      </td>
      <td>
        {topics.map((el) => (
          <Badge variant="gradient" ml={2}>
            {el}
          </Badge>
        ))}
      </td>
      <td>
        <Anchor<"a"> size="sm" onClick={(event) => event.preventDefault()}>
          {visits}
        </Anchor>
      </td>
      <td>{Intl.NumberFormat().format(totalReviews)}</td>
      <td>
        <Group position="apart">
          <Text size="xs" color="teal" weight={700}>
            {positiveReviews.toFixed(0)}%
          </Text>
          <Text size="xs" color="red" weight={700}>
            {negativeReviews.toFixed(0)}%
          </Text>
        </Group>
        <Progress
          classNames={{ bar: classes.progressBar }}
          sections={[
            {
              value: positiveReviews,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.teal[9]
                  : theme.colors.teal[6],
            },
            {
              value: negativeReviews,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.red[9]
                  : theme.colors.red[6],
            },
          ]}
        />
      </td>
    </tr>
  );
}

export default TRows;
