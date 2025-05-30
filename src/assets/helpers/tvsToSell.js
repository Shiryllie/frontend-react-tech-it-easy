function tvsToSell(productArray){
    {
        let totaal = 0;
        for (let i = 0; i < productArray.length; i++) {
            totaal += productArray[i].originalStock-productArray[i].sold;
        }
        return totaal;
    }
}

export default tvsToSell;

