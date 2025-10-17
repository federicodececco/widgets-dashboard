import { useEffect, useState } from "react";
import { createClient } from "@/util/supabase/client";

export default function CustomersToContatc() {
  const [customersData, setCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("customers").select();
    } catch (error) {
      console.error("Failed to retrive customersData", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {}, []);
  if (isLoading) {
    return <div>sto caricando</div>;
  }
  return <div></div>;
}
