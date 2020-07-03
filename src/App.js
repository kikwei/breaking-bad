import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import CharacterGrid from "./components/characters/CharacterGrid";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${searchTerm}`)
      .then((response) => {
        setCharacters(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));

    //   const fetchCharacters = async () => {
    //     const result = await axios(
    //       `https://www.breakingbadapi.com/api/characters?name=${searchTerm}`
    //     );

    //     setCharacters(result.data);
    //     setIsLoading(false);
    //   };

    //   fetchCharacters();
    // }
  }, [
    searchTerm,
  ]); /* Dependency => If present, effect will only activate if the values in the list change.
Accepts a function that contains imperative, possibly effectful code.*/

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.trim());
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default App;
