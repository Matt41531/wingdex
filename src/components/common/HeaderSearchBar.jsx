import { Input } from "../ui/input";
import { supabase } from "../../../utils/supabase";
import { useState, useEffect, useContext } from "react";
import { ComboBoxResponsive } from "../ui/combobox";
import { CardsContext } from "@/hooks/cardsContext";

function HeaderSearchBar() {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    habitat: null,
    food: null,
    eggCount: null,
  });
  const { setCardResults } = useContext(CardsContext);

  //TO-DO: Make this dynamic with DB tables or at least moving to a constants file
  const habitat = [
    {
      value: "forest",
      label: "Forest",
    },
    {
      value: "prairie",
      label: "Prairie",
    },
    {
      value: "wetlands",
      label: "Wetlands",
    },
  ];

  const food = [
    {
      value: "worm",
      label: "Worm",
    },
    {
      value: "fruit",
      label: "Fruit",
    },
    {
      value: "wheat",
      label: "Wheat",
    },
    {
      value: "wild",
      label: "Wild",
    },
  ];

  const eggCount = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
    {
      value: "6",
      label: "6",
    },
  ];

  useEffect(() => {
    searchBirdsByName();
  }, [searchText, filters]);

  function handleFilterChange(type, value) {
    console.log("Filter: ", type, value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  }

  async function searchBirdsByName() {
    try {
      console.log("Filters: ", filters);
      let searchQuery = supabase
        .from("cards")
        .select("*")
        .ilike("name", `%${searchText}%`);
      if (filters.habitat) {
        searchQuery = searchQuery.eq(`${filters.habitat}_habitat`, true);
      }
      if (filters.food) {
        searchQuery = searchQuery.gt(`${filters.food}_required`, 0);
      }
      if (filters.eggCount) {
        searchQuery = searchQuery.eq("egg_count", filters.eggCount);
      }

      const { data, error } = await searchQuery;
      if (error) {
        throw new Error(error.message);
      }
      setCardResults(data);
      console.log("Search results:", data);
      console.log("Search text:", searchText);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  return (
    <>
      <Input
        type="search"
        placeholder="Search birds..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <ComboBoxResponsive
        options={habitat}
        title="Habitat"
        onChange={(value) => handleFilterChange("habitat", value)}
      />
      <ComboBoxResponsive
        options={food}
        title="Food"
        onChange={(value) => handleFilterChange("food", value)}
      />
      <ComboBoxResponsive
        options={eggCount}
        title="Egg Count"
        onChange={(value) => handleFilterChange("eggCount", value)}
      />
    </>
  );
}

export default HeaderSearchBar;
