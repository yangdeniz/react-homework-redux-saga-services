export const getServices = async () => {
  const response = await fetch(process.env.REACT_APP_SERVICES_API);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}