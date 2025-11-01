const responses = {
  Hello: "Hi there! Welcome to my portfolio. How can I assist you today?",
  "What's your name?":
    "I'm your friendly portfolio assistant! Feel free to ask me anything about my creator's work.",
  Help: "Sure! I can help you navigate this portfolio. What would you like to know?",
  "Contact Info":
    "You can find my creator's contact information in the 'Contact' section of this website. Would you like me to guide you there?",
  Projects:
    "Here are some highlights from my creator's projects. You can find more details in the 'Projects' section.",
  Email: "You can contact me at:\n\nasvicki2002@gmail.com",
  LinkedIn:
    "Connect with me on LinkedIn:\n\nhttps://www.linkedin.com/in/a-s-vignesh/",
  GitHub: "Check out my projects on GitHub:\n\nhttps://github.com/A-S-Vignesh",
  default:
    "I'm sorry, I didn't understand that. Could you please try one of the options below?",

  getFollowUps: (question) => {
    // Add follow-up questions based on the user's input
    switch (question) {
      case "Projects":
        return ["Notepad", "Pokemon", "Food Restuarent"];
      case "Contact Info":
        return ["Email", "LinkedIn", "GitHub"];
      default:
        return null;
    }
  },
};

const options = ["Hello", "What's your name?", "Contact Info", "Projects"];

export default responses;
export { options };
