const component = (personsName) => {
  const defaultGreeting = "Hi!";
  if (!personsName || typeof personsName !== "string") {
    return defaultGreeting;
  }
  return `${defaultGreeting} ${personsName}`;
};

module.exports = component;
