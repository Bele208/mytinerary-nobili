import { useEffect, useState, useRef } from "react";
import Cards_cities from "../components/Cards_cities";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const text = useRef();

  useEffect(() => {

    if (firstLoad) {
      setIsLoading(true);
    }

    axios(apiUrl + '/cities?city=' + text.current.value)
      .then(res => {
        setCities(res.data.response);
        setIsLoading(false);
        setFirstLoad(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setCities([]);
        setFirstLoad(false);
      });
  }, [reEffect]);

  function handleFilter() {
    setReEffect(!reEffect);
  }

  return (
    <>
      <div className="input">
        <h2>Cities</h2>
        <h3>Collection of the most beautiful places and experiences</h3>
        <input
          ref={text}
          type="text"
          name="text"
          id="text"
          onKeyUp={handleFilter}
          placeholder="Search your city"
          className="search"
        />

      </div>
      {firstLoad && isLoading && <div id="loader"></div>}
      {!isLoading && cities.length === 0 && !firstLoad ? (
        <div className="no-matches">
          <h2>No matches, try another word!</h2>
          <img src="/travolta-lost.gif" alt="Travolta Gif" />
        </div>
      ) : (
        <div className="cont-cards">
          {cities.map(each => (
            <Cards_cities
              key={each.id}
              src={each.photo}
              alt={each.city}
              text={each.city}
              id={each._id}
            />
          ))}
        </div>
      )}
    </>
  );
}
