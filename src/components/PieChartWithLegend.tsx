import { Order, PieChartData } from "@/util/classes";
import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

interface PieChartInterface {
  data: any[];
}
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#c0c0c0c0"];

export default function PieChartWithLegend({ data }: PieChartInterface) {
  const [elaboratedData, setElaboratedData] = useState<
    PieChartData[] | undefined
  >(undefined);

  useEffect(() => {
    /* function to transform data input into usablae data by recharts */
    const handleData = (datas: Order[]) => {
      const categoryData: Record<Order["status"], Order[]> = {
        processing: [],
        completed: [],
        refunded: [],
        failed: [],
      };

      datas.forEach((elem: Order) => {
        console.log(elem);
        categoryData[elem.status].push(elem);
      });

      setElaboratedData([
        { name: "Processing", value: categoryData.processing.length },
        { name: "Completed", value: categoryData.completed.length },
        { name: "Refunded", value: categoryData.refunded.length },
        { name: "Failed", value: categoryData.failed.length },
      ]);
    };

    handleData(data);
  }, [data]);

  if (elaboratedData != undefined) {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={elaboratedData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {elaboratedData.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
