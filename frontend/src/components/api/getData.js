export const getData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

