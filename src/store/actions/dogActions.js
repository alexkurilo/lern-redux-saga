const dogUrl = 'https://dog.ceo/api/breeds/image/random';

export function fetchDogAction () {
    return fetch(dogUrl)
        .then(res => res.json());
};