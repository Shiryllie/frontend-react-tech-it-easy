
import { inventory } from './inventory.js';

function showOutcomeInConsole() {
    // 1A
    const tvTypeArray = inventory.map((tv) => {
        return tv.type;
    });
    // 1B
    const soldOut = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    });
    // 1C
    const tv = inventory.find((tv) => {
        return tv.type === 'NH3216SMART';
    });
    // 1D
    const sports = inventory.map((tv) => {
        return `name: ${tv.brand} ${tv.name}, suitable: ${tv.refreshRate >= 100};`;
    });

    // 1E
    const largeTv = inventory.filter((tv) => {
        return tv.availableSizes.find((size) => size >= 65);
    });
    // 1F
const ambilight = inventory.filter((tv) => {
    const optionAmbilight = tv.options.find((option) => {
        return option.name === 'ambiLight';
    });
    if (optionAmbilight.applicable === true) {
        return true;
    };
})
    console.log(tvTypeArray);
    console.log(soldOut);
    console.log(tv);
    console.log(sports);
    console.log(largeTv);
    console.log(ambilight);
}
export default showOutcomeInConsole;