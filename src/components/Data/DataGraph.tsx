import React, { memo } from "react";
import { DataTableProps } from "../../types/dataTypes";
import { BarChart } from "@mantine/charts";

function DataGraph(props: DataTableProps) {
  const { data } = props;

  return (
    <BarChart
      h={300}
      data={data ?? []}
      dataKey="Gun Tarih"
      type="stacked"
      series={[
        { name: "Gelen Top Kişi", color: "teal.6" },
        { name: "Giden Toplam Kişi", color: "red.6" },
        { name: "Toplam Kişi", color: "violet.6" },
      ]}
    />
  );
}

export default memo(DataGraph);
