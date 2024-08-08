import React, { memo } from "react";
import { Table } from "@mantine/core";
import { format } from "date-fns";
import { PersonDataTableProps, PersonDataTypes } from "../../types/dataTypes";
import { RoomTableHeaders } from "../../helpers/consts";

function DataTableGetir(props: PersonDataTableProps) {
  const { data, setSelectedUser, open } = props;

  const handleSelectUser = (Id: number) => {
    const filteredData = data?.find((item) => item.Id === Id);
    setSelectedUser(filteredData);
    open();
  };

  return (
    <Table stickyHeader withColumnBorders withTableBorder highlightOnHover striped>
      <Table.Thead>
        <Table.Tr>
          {RoomTableHeaders.map((item, index) => (
            <Table.Th key={index}>{item}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data?.map((item, index) => (
          <Table.Tr key={index} onClick={() => handleSelectUser(item.Id)} style={{ cursor: "pointer" }}>
            {RoomTableHeaders.map((header) => (
              <Table.Td key={header}>
                {header === "Dogum_tarihi" || header === "Sistem_tarihi"
                  ? format(new Date(item.Dogum_tarihi), "dd.MM.yyyy")
                  : item[header as keyof PersonDataTypes]}
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default memo(DataTableGetir);
