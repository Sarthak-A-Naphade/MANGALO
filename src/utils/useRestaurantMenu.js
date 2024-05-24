import { useEffect, useState } from "react";
import { Menu_API_URL } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenu = async() =>{

    const data = await fetch(Menu_API_URL+resID);
    const json = await data.json();
    setResInfo(json.data);

  }

  return resInfo;
};

export default useRestaurantMenu;
