export const baseUrl = "https://jsonplaceholder.typicode.com/";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${baseUrl}users`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
