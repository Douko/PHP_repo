async function fetchUserProfile(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    return {
      name: user.name || "Unknown User", //condicional, si no existe user.name se usara 'unknown User'
      email: user.email || "N/A",
      avatar: user.avatar || "default-avatar.png",
    };
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return {
      name: "Unknown User",
      email: "N/A",
      avatar: "default-avatar.png",
    };
  }
}
