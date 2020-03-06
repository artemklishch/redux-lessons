export const fetchForGetUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json());
};