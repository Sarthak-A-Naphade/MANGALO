import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import "../css/BodyCSS.css";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredListofRes, setFilterListORes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
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

  return listOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button className="filter-btn" onClick={topRatedRes}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resName='KFC' cuisene='Chicken, Burger' star='4.2 stars' time='38 minutes'/> */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} /> */}
        {filteredListofRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
