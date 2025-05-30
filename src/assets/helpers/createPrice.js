function createPrice(tvPrice){
    // van 159 naar €159,-
    return tvPrice.toLocaleString('nl-NL', {
        style: 'currency',
        currency: 'EUR'
    });
}

export default createPrice;