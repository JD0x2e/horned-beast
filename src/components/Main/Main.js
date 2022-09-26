import { Component } from "react";
import HornedBeast from "./HornedBeast/HornedBeast";
import "./Main.css";

class Main extends Component {
  render() {
    const allBeasts = [
      {
        _id: 1,
        image_url:
          "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1,
      },

      {
        _id: 2,
        image_url:
          "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        title: "Rhino Family",
        description: "Parent rhino with two babies",
        keyword: "rhino",
        horns: 2,
      },

      {
        _id: 3,
        image_url:
          "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        title: "Unicorn Head",
        description: "Someone wearing a very silly unicorn head mask",
        keyword: "unicorn",
        horns: 1,
      },
    ];

    return (
      <div className="main">
        {allBeasts.map((beast) => {
          return (
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          );
        })}
      </div>
    );

    // return (
    //   <div>
    //     <HornedBeast
    //       title="Buffalo"
    //       imageUrl="https://www.awf.org/sites/default/files/styles/species_image/public/2020-04/SpeciesPage_AfricanBuffalo02_Challenges.jpg?h=29c6c1f6&itok=VHn68yL8"
    //       description="Big hairy boy"
    //     />
    //     <HornedBeast
    //       title="Narwhale"
    //       imageUrl="https://images.squarespace-cdn.com/content/v1/55632188e4b006bb6875f181/1574595520234-ZW3W0YK4M6DGMR9PH44K/narhval.jpg?format=750w"
    //       description="Big wet boy"
    //     />
    //     <HornedBeast
    //       title="Unicorn"
    //       imageUrl="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/unicorn-day-e1523293823642.jpg"
    //       description="Big magic boy"
    //     />
    //   </div>
    // );
  }
}

export default Main;
