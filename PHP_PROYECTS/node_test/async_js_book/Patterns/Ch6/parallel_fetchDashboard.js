async function fetchDashboardData(userId) {
  try {
    const [userProfile, userPosts, userAnalytics] = await Promise.all([
      fetch(`https://api.example.com/users/${userId}`).then((res) =>
        res.json()
      ),
      fetch(`https://api.example.com/posts?userId=${userId}`).then((res) =>
        res.json()
      ),
      fetch(`https://api.example.com/analytics/${userId}`).then((res) =>
        res.json()
      ),
    ]);

    return {
      profile: userProfile,
      posts: userPosts,
      analytics: userAnalytics,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}

//Usage
(async () => {
  try {
    const dashboardData = await fetchDashboardData(123);
    console.log("Dashboard data:", dashboardData);
  } catch (error) {
    console.error("Failed to load dashboard:", error);
  }
})();
