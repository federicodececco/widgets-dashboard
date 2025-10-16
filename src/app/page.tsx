"use client";

import PieChartWithLegend from "@/components/PieChartWithLegend";
import { createClient } from "@/util/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [chartData, setChartData] = useState<null | any[]>(null);
  const supabase = createClient();
  const fetchChartData = async () => {
    try {
      const { data, error } = await supabase.from("orders").select();
      setChartData(data);
      console.log(data);
    } catch (error) {
      console.error("failed to retrive chartdata", error);
    }
  };
  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <main>
      <section className="grid grid-cols-2 md:grid-cols-4">
        {chartData != null && (
          <div>
            <PieChartWithLegend data={chartData}></PieChartWithLegend>
          </div>
        )}
      </section>
    </main>
  );
}
