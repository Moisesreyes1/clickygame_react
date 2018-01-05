import React from "react";
import Bootstrap from "./components/Bootstrap";
import Header from "./components/Header";
import Panel from "./components/Panel";
import cartoons from "./cartoons.json";
// import CartoonCard from "./components/CartoonCard";
import Counter from "./components/Counter";

const App = () => (
<div>
    <Header />
    <Counter />
    <Panel />
</div>
);

export default App;
