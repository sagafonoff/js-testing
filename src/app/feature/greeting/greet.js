function greet(name) {
  const delimeter = " ";
  const defaultGreeting = "Hi!";
  const format = new RegExp(
    /^(\s)*[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])*))*(\s)*$/
  );

  function checkValidNameFormat(name) {
    return name && typeof name === "string" && format.test(name);
  }

  function capatalizeFirstName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  if (!checkValidNameFormat(name)) {
    return defaultGreeting;
  }

  const firstName = capatalizeFirstName(name.split(delimeter)[0]);

  return `${defaultGreeting} ${firstName}`;
}

export { greet };
