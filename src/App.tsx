import { useEffect, useState } from "react";
import supabase from "./utils/db/db";
import { Button } from "../src/components/ui/button";

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
    <div>
      <ul>
        {countries.map((country: any) => (
          <li className="py-4" key={country.name}>
            {country.name}
          </li>
        ))}
      </ul>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
