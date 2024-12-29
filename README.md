(a) How to run the project.
Ans.
Step1:
Prerequisites:-
Make sure you have the following installed:
Node.js (v14 or later)
npm (v6 or later)
React Native CLI or Expo CLI (depending on your setup)

Step2: -
Clone the repository to your local machine:
<----git clone https://github.com/ratanssingh/Better-Software-Engineering.git
cd Better-Software-Engineering/LoginSignUp---->
Install the dependencies:
Start the React Native development server:
<---npx react-native start--->
Run the app on your emulator or physical device:For Android
<----npx react-native run-android---->
Once the app is running, you can interact with the login and signup functionality.

(b) The design choices made.
Ans.
1.React Native: React Native was chosen for its flexibility to build cross-platform mobile applications using a single codebase for both Android and iOS.
2.Formik and Yup: Formik is used to manage form state, validation, and handling user inputs efficiently. Yup is used for schema validation to ensure correct input formats and to enhance user experience.
3.AsyncStorage: AsyncStorage is utilized to remember user credentials locally, allowing users to stay logged in after they restart the app.
4.Custom UI Elements: Custom buttons and inputs with styling (including placeholders, borders, and a background image) have been implemented to provide a clean and intuitive user interface.
5.Alert for Feedback: An alert is shown upon successful login or signup to give immediate feedback to the user.

(c)Assumptions and Limitations.
Ans.
Assumptions: -
The app assumes that the user will provide a valid email and password during the signup and login process. There's basic validation for the format of the email and the length of the password.
The remember me functionality only stores the email in AsyncStorage and does not provide a complete authentication mechanism such as tokens.

Limitations: -
No Backend: This app does not have a backend. It only simulates the login/signup process locally. For a real-world app, a backend (e.g., Firebase, Node.js with Express, etc.) should be integrated for secure authentication and database storage.
Password Visibility: Passwords are entered as plain text and are not stored securely. A more secure solution would involve using encryption or hashing for storing credentials.
Limited Validation: Only basic email format and password length validation are implemented. More complex validations (e.g., password strength) could be added for a better user experience.
No Advanced Error Handling: Error handling is minimal, and in a real-world scenario, there would be more complex checks, such as network issues, authentication errors, etc.

