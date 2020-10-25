import React from "react";
import EditPlayerModal from "./EditPlayerModal";

const App2 = () => {
  const player = {
    firstName: "Werner",
    lastName: "Faust",
    email: "wfa@test.de",
  };

  const handleSave = (player) => {
    console.log(player);
  };

  return (
    <div>
      <h1>App2</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <EditPlayerModal player={player} save={handleSave}/>

    </div>
  );
};

export default App2;
