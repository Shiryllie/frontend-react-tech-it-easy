function screenSize(tv) {
    return tv.availableSizes.map(size => {
        const cm = size * 2.54.toFixed();
        return `${size} inches (${cm} cm)`;
    })
        .join(' | ');

}

export default screenSize;


