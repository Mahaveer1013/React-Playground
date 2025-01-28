export const putData = async (url, body, options) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to update data");
  }
  return response.json();
};
