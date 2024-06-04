import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLablel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/mockData.json"

it("Should render RestaurantCard component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with opened label",()=>{
    const RestaurantCardPromoted = withPromotedLablel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    const label = screen.getByText("Opened");

    expect(label).toBeInTheDocument();

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})