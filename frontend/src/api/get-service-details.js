export const getServiceDetails = async (id) => {
  const response = await fetch(process.env.REACT_APP_SERVICES_API + id);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
} 