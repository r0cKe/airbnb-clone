import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const search = ({ searchResults }) => {
  // Getting params from the router
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  
  // For elected location on Map
  const [selectedLocation, setSelectedLocation] = useState({});

  // To get the center coordinates of data
  const coordinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = getCenter(coordinates);
  
  // Map props
  const [initialViewState, setInitialViewState] = useState({
    latitude: center.latitude,
    longitide: center.longitude,
    zoom: 11,
  });


  // Date Range  
  const range = `${startDate} - ${endDate}`;

  return (
    <div>
      <Header
        placeholder={`${
          location?.slice(0, 1).toUpperCase() + location?.slice(1)
        } | ${range} | ${noOfGuests} Guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} for {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in <span className="capitalize">{location}</span>
          </h1>

          <div className="hidden md:inline-flex space-x-3 text-gray-300 whitespace-nowrap mb-6">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard key={item.lat} item={item} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map
            initialViewState={initialViewState}
            mapStyle="mapbox://styles/r0cke/clejq31q3006c01msieb9klpg"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            style={{ width: "100%", height: "100%" }}
            on
          >
            {searchResults.map((result) => (
              <div key={result.long}>
                <Marker
                  longitude={result.long}
                  latitude={result.lat}
                  offset={[10, -10]}
                  onClick={() => setSelectedLocation(result)}
                >
                  <p className="cursor-pointer text-2xl ">📌</p>
                </Marker>

                {/* Popup shows on click of marker */}
                {selectedLocation.long === result.long && (
                  <Popup
                    onClose={() => setSelectedLocation({})}
                    closeOnClick={false}
                    latitude={result.lat}
                    longitude={result.long}
                  >
                    {result.title}
                  </Popup>
                )}
              </div>
            ))}
          </Map>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}

export default search;
