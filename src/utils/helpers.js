export const formatPrice = (number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    //The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array.
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
};
