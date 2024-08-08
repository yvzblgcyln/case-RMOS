import React, { memo } from "react";
import { DataTableProps } from "../../types/dataTypes";
import { Table } from "@mantine/core";
import { format } from "date-fns";
import { DataTypes } from "../../types/dataTypes";
import { tableHeaders } from "../../helpers/consts";

function DataTable(props: DataTableProps) {
  const { data } = props;

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            {tableHeaders.map((item, index) => (
              <Table.Th key={index}>{item}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
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
      </Table>
    </Table.ScrollContainer>
  );
}

export default memo(DataTable);
