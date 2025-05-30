function createTvName(tv){
    // [merk] [type] - [naam]
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

export default createTvName;