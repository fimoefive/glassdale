let witness = [];

export const useWitness = () => {
    return witness.slice();
};

export const getWitnesses = () => {
    return fetch("http://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(parsedWitnesses => {
            // console.table(parsedCriminals)
            witnesses = parsedWitnesses
        }
    )
};