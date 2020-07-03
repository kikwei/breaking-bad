import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map((character, key) => (
        <CharacterItem key={key} character={character}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
