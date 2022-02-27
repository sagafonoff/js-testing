function greet(firstName) {
  const defaultGreeting = "Hi!";
  if (!firstName || typeof firstName !== "string") {
    return defaultGreeting;
  }

  // Extract only the first name
  firstName = firstName.split(" ")[0].trim();

  // Capitalize the first letter
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  return `${defaultGreeting} ${firstName}`;
}

const component = (personsName) => greet(personsName);

module.exports = component;
