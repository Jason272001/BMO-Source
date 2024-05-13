export const sandwichQuery = async () => {
  const query = `*[_type=="product" && category=="Sandwich"]`;

  return query;
};

export const drinkQuery = async () => {
  const query = `*[_type=="product" && category=='Drink']`;
  return query;
};

export const dessertQuery = async () => {
  const query = `*[_type=="product" && category=='Dessert']`;
  return query;
};

export const appetizerQuery = async () => {
  const query = `*[_type=="product" && category=='Appetizer']`;
  return query;
};

export const soupQuery = async () => {
  const query = `*[_type=="product" && category=='Soup']`;
  return query;
};
