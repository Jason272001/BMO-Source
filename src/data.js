export const sandwichQuery = async () => {
  const query = `*[_type=="product" && category=="Sandwich"] | order(_updatedAt.current asc)`;
  return query;
};

export const drinkQuery = async () => {
  const query = `*[_type=="product" && category=='Drink'] | order(_updatedAt asc)`;
  return query;
};

export const dessertQuery = async () => {
  const query = `*[_type=="product" && category=='Dessert'] | order(_updatedAt asc)`;
  return query;
};

export const appetizerQuery = async () => {
  const query = `*[_type=="product" && category=='Appetizer'] | order(_updatedAt asc)`;
  return query;
};

export const soupQuery = async () => {
  const query = `*[_type=="product" && category=='Soup'] | order(_updatedAt asc)`;
  return query;
};

export const userQuery = (username, password) => {
  const query = `*[_type=="user" && userName== '${username}' && password== '${password}' ]`;
  return query;
};
