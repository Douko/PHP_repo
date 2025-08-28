async function submitMultiStepForm(userData) {
  try {
    //Step1
    const validationResult = await validateUserData(userData);
    if (!validationResult.isValid) {
      throw new Error("User data validation failed");
    }
    //Step2
    const user = await createUserAccount(userData);
    //Step3
    const profile = await setupUserProfile();
    //Step4
    await sendWelcomeEmail(user.email);

    return { user, profile };
  } catch (error) {
    console.error("Error in form submission process:", error);
    throw error;
  }
}

async function validateUserData(userData) {}
async function createUserAccount(userData) {}
async function setupUserProfile(userId, profileData) {}
async function sendWelcomeEmail(email) {}

//Usage
(async () => {
  try {
    const result = await submitMultiStepForm({
      username: "newuser",
      email: "newuser@example.com",
      password: "securepassword123",
      profile: {},
    });
    console.log("User registration complete:", result);
  } catch (error) {
    console.error("Registration failed:", error);
  }
})();
