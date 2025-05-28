import './App.css';
import './constants/inventory.js';
import calculateSoldTvs from "./assets/helpers/calculateSoldTvs.js";
import totalBoughtTvs from "./assets/helpers/totalBoughtTvs.js";
import tvsToSell from "./assets/helpers/tvsToSell.js";
import {inventory} from "./constants/inventory.js";


function App() {

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
                <div className="header-container">
                <div className="container-items-sold">
                    <h3>Aantal verkochte producten</h3>
                    <h2>{calculateSoldTvs(inventory)}</h2>
                </div>
                <div className="container-items-bought">
                    <h3>Aantal ingekochte producten</h3>
                    <h2>{totalBoughtTvs(inventory)}</h2>
                </div>
                <div className="container-items-to-sell">
                    <h3>Aantal te verkopen producten</h3>
                    <h2>{tvsToSell(inventory)}</h2>
                </div>
                </div>
            </header>
        </>
    )
}

export default App
