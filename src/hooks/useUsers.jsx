import { useEffect, useState } from "react";
import { fetchUsers } from "../apiLayer/index";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const networkData = await fetchUsers();
        setUsers(networkData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return { users, error, loading };
}

export default useUsers;
