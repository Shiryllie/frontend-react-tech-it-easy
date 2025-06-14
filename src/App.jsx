import './App.css';
import './constants/inventory.js';
import calculateSoldTvs from "./assets/helpers/calculateSoldTvs.js";
import totalBoughtTvs from "./assets/helpers/totalBoughtTvs.js";
import tvsToSell from "./assets/helpers/tvsToSell.js";
import createTvName from "./assets/helpers/createTvName.js";
import createPrice from "./assets/helpers/createPrice.js";
import screenSize from "./assets/helpers/screenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import outofstock from "./assets/out-of-stock.png";
import techiteasy from "./assets/tech_it_easy.png";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import showOutcomeInConsole from './constants/practice.js';


function App() {
    showOutcomeInConsole();

    function sortBestSellers() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });
        console.log("Best verkocht eerst",inventory);
    }
    function sortCheapest(){
        inventory.sort((a, b) => {
            return a.price - b.price;
        });
        console.log("Goedkoopste eerst",inventory);
    }

    function sortForSport(){
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });
        console.log("Meest geschikt voor sport",inventory);
    }

    // function biggestScreenFirst(){
    //     inventory.sort((a, b) => {
    //         return b.availableSizes - a.availableSizes;
    //     });
    //     console.log("Grootste schermgroottes eerst",inventory);
    // }

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
            <main>
                <h2>Best verkochte tv</h2>
                <div className="main-container">
                    <div className="image-wrapper">
                        <img src={bestSellingTv.sourceImg} alt="tv"/>
                    </div>
                    <div className="tv-description">
                        <h2>{createTvName(bestSellingTv)}</h2>
                        <h3 className="tv-price">{createPrice(bestSellingTv.price)}</h3>
                        <h3>{screenSize(bestSellingTv)}</h3>
                        <span className="icon">
                            wifi <img src={check} alt="check"/>
                            speech <img src={minus} alt="minus"/>
                            hdr <img src={check} alt="check"/>
                            bluetooth <img src={check} alt="check"/>
                            ambilight <img src={minus} alt="minus"/>
                        </span>
                    </div>
                </div>
                <h2>Alle tv's</h2>
                <button type="button" onClick={sortBestSellers}>Meest verkocht eerst</button>
                <button type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
                <button type="button" onClick={sortForSport}>Meest geschikt voor sport</button>
                {/*<button type="button" onClick={biggestScreenFirst}>Grootste schermgroottes eerst</button>*/}
                <ul>
                    {inventory.map((tv) => {
                        return <li key={tv.type}>{tv.brand}</li>
                    })}
                </ul>
                {inventory.map((tv) => {
                    return <li key={tv.type}>
                        <div className="main-container">
                            <div className="image-wrapper"><img src={tv.sourceImg} alt="afbeelding van tv"/></div>
                            <div className="tv-description">
                                <h2>{createTvName(tv)}</h2>
                                <h3 className="tv-price">{createPrice(tv.price)}</h3>
                                <h3>{screenSize(tv)}</h3>
                                <div className="applications">
                                {tv.options.map((option) => {
                                    if(option.applicable===true) {
                                        return <li key={`${tv.type}-${option.name}`} className="applications"><img src={check} alt="check-icon" className="icon"/>{option.name}</li>
                                    } else {
                                        return <li key={`${tv.type}-${option.name}`} className="applications"><img src={minus} alt="minus" className="icon"/>{option.name}</li>
                                    }
                                })}
                                </div>
                            </div>
                        </div>
                    </li>
                })}

                {/*  // <div className="main-container">
                //     <div className="image-wrapper">
                //         <img src={inventory[0].sourceImg} alt="tv"/>
                //     </div>
                //     <div className="tv-description">
                //         <h2>{createTvName(inventory[0])}</h2>
                //         <h3 className="tv-price">{createPrice(inventory[0].price)}</h3>
                //         <h3>{screenSize(inventory[0])}</h3>
                //         <span className="applications">
                //             wifi <img src={check} alt="check"/>
                //             speech <img src={minus} alt="minus"/>
                //             hdr <img src={check} alt="check"/>
                //             bluetooth <img src={check} alt="check"/>
                //             ambilight <img src={minus} alt="minus"/>
                //         </span>
                //     </div>
                // </div>*/}
            </main>
        </>
    )
}

export default App
