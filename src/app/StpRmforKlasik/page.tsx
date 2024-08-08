"use client";
import { useEffect, useState } from "react";
import { getData } from "../../services/api/getData";
import { DataTypes } from "../../types/dataTypes";
import DataTable from "../../components/Data/DataTable";
import { showDataType } from "../../types/constTypes";
import { Flex, Select } from "@mantine/core";
import DataGraph from "../../components/Data/DataGraph";
import "../../styles/loader.css";

export default function HomePage() {
  const [data, setData] = useState<DataTypes[]>([]);
  const [showType, setShowType] = useState<showDataType>("table");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setLoading(true);
    const data = await getData();
    if (data.status === 200) setData(data.data.value);
    setLoading(false);
  };

  if (loading) return <div className="loader"></div>;

  return (
    <Flex mih={50} gap="md" direction="column">
      <Select
        label="Select Data Type"
        data={["table", "graph"]}
        value={showType}
        onChange={(option: any) => setShowType(option)}
      />
      {Boolean(data?.length) &&
        (showType === "table" ? <DataTable data={data} /> : showType === "graph" ? <DataGraph data={data} /> : null)}
    </Flex>
  );
}
