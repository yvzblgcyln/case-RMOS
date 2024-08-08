import React from "react";
import { DataTypes } from "../../types/dataTypes";
import { Table } from "@mantine/core";
import { format } from "date-fns";

const DataTableRows: React.FC<{ data: DataTypes[] | null; tableHeaders: string[] }> = ({ data, tableHeaders }) => (
  <Table.Tbody>
    {data?.map((item, index) => (
      <Table.Tr key={index}>
        {tableHeaders.map((header) => (
          <Table.Td key={header}>
            {header === "Tarih" ? format(new Date(item.Tarih), "dd.MM.yyyy") : item[header as keyof DataTypes]}
          </Table.Td>
        ))}
      </Table.Tr>
    ))}
  </Table.Tbody>
);

export default DataTableRows;
