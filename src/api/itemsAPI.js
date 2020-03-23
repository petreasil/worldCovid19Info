export const fetchItems = async () => {
  let data = [];
  try {
    const response = await fetch(
      "https://coronavirus-19-api.herokuapp.com/countries"
    );
    data = await response.json();
  } catch (err) {
    console.log(err);
  } finally {
    return data;
  }
};
