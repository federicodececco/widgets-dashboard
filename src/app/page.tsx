"use client";

import { createClient } from "@/util/supabase/client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const supabase = createClient();
  const fetchData = async () => {
    const { data, error } = await supabase.from("orders").select();
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section> </section>
    </main>
  );
}
