import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLablel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredListofRes, setFilterListORes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser, setUserName} = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLablel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json;
    // console.log(json);
    setListOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListORes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function topRatedRes() {
    let filteredList = listOfRestuarants.filter(
      (res) => res.info?.avgRating > 4
    );
    setFilterListORes(filteredList);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline !!! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filterData = listOfRestuarants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListORes(filterData);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={topRatedRes}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username : </label>
        <input
            type="text"
            className="border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard resName='KFC' cuisene='Chicken, Burger' star='4.2 stars' time='38 minutes'/> */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} /> */}
        {filteredListofRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted  resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
