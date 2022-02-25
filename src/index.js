function greet(firstName) {
  const defaultGreeting = "Hi!";
  if (!firstName || typeof firstName !== "string") {
    return defaultGreeting;
  }
  return `${defaultGreeting} ${firstName}`;
}

const component = (personsName) => greet(personsName);

module.exports = component;
