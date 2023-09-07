import { useEffect, useState } from "react";
import supabase from "./utils/db/db";

function App() {
  const [countries, setCountries] = useState<any>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country: any) => (
        <li className="py-4" key={country.name}>
          {country.name}
        </li>
      ))}
    </ul>
  );
}

export default App;
