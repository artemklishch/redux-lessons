export const getDataFromServer = baseUrl => {
  return fetch(baseUrl)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error();
    });
};