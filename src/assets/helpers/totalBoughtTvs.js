function totalBoughtTvs(productArray){
    {
        let totaal = 0;
        for (let i = 0; i < productArray.length; i++) {
            totaal += productArray[i].originalStock;
        }
        return totaal;
    }
}

export default totalBoughtTvs;