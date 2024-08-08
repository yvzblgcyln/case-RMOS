"use client";
import React, { useEffect, useState } from "react";
import { PersonDataTypes } from "../../types/dataTypes";
import { getPeople } from "../../services/api/getData";
import DataTableGetir from "../../components/Data/DataTableGetir";
import { Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import UserDetailModal from "../../components/Data/UserDetailModal";

function GetirKod() {
  const [data, setData] = useState<PersonDataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedUser, setSelectedUser] = useState<PersonDataTypes | undefined>();

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setLoading(true);
    const data = await getPeople();
    if (data.status === 200) setData(data.data.value);
    setLoading(false);
  };

  if (loading) return <div className="loader"></div>;

  return (
    <Flex>
      <UserDetailModal opened={opened} selectedUser={selectedUser} close={close} />
      <DataTableGetir data={data} setSelectedUser={setSelectedUser} open={open} />
    </Flex>
  );
}

export default GetirKod;
