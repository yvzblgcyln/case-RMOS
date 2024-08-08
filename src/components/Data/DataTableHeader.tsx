import { Table } from "@mantine/core";
import React from "react";

function DataTableHeader({ tableHeaders }: { tableHeaders: string[] }) {
  return (
    <Table.Thead>
      <Table.Tr>
        {tableHeaders.map((item, index) => (
          <Table.Th key={index}>{item}</Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
}

export default DataTableHeader;
