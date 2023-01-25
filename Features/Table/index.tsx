import { Table, ScrollArea } from "@mantine/core";
import { PropTypes } from "./index.types";
import TRows from "./components/TRows";
import { Fragment } from "react";

function TableReviews({ data }: PropTypes) {
  return (
    <ScrollArea style={{ width: "100%" }}>
      <Table
        fontSize={20}
        withBorder
        sx={{ minWidth: 800 }}
        verticalSpacing="xs"
      >
        <thead>
          <tr>
            <th>Book title</th>
            <th>Topics</th>
            <th>Visits</th>
            <th>Reviews</th>
            <th>Reviews distribution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Fragment>
              <TRows {...row} />
            </Fragment>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableReviews;
