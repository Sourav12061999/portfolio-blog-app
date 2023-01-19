import { Table, ScrollArea } from "@mantine/core";
import { PropTypes } from "./index.types";
import TRows from "./components/TRows";
import { Fragment } from "react";

function TableReviews({ data }: PropTypes) {
  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Book title</th>
            <th>Year</th>
            <th>Author</th>
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
