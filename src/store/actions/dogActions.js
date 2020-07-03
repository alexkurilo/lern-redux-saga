const dogUrl = 'https://dog.ceo/api/breeds/image/random';

const fetchDog = () => {
    return fetch(dogUrl)
        .then(res => res.json());
};

export {
    fetchDog,
};