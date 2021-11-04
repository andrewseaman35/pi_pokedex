const toReadableNumber = (pokemonNumber) => {
    console.log(pokemonNumber)
    const s = "000" + pokemonNumber;
    // #XXX
    return `#${s.substr(-3)}`;
}

export {
    toReadableNumber,
};