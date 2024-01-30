export const shuffleCards = (arr, num) => {
    const shuffledAnimals = arr.sort(() => 0.5 - Math.random());
    return shuffledAnimals.slice(0, num);
};

