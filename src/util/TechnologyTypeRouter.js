function getWebsiteFromType(type) {
  let directTo = "";
  let lowerCaseType = type.toLowerCase();

  if (lowerCaseType.includes("html")) {
    directTo = "https://www.youtube.com/watch?v=u0OeZfIfBRI";
  } else if (lowerCaseType.includes("python")) {
    directTo = "https://www.youtube.com/watch?v=-67hh86N42Q";
  } else if (lowerCaseType.includes("javascript")) {
    directTo = "https://www.youtube.com/watch?v=dlfrWbYk1v0";
  } else if (lowerCaseType.includes("java")) {
    directTo = "https://www.youtube.com/watch?v=PaqbTmkbMR8";
  } else if (
    lowerCaseType.includes("full-stack") ||
    lowerCaseType.includes("full stack") ||
    lowerCaseType.includes("front end") ||
    lowerCaseType.includes("back end")
  ) {
    directTo = "https://www.youtube.com/watch?v=dlfrWbYk1v0";
  } else if (lowerCaseType.includes("software")) {
    directTo = "https://www.youtube.com/watch?v=MSA3WsGeTNI";
  } else if (lowerCaseType.includes("aws")) {
    directTo = "https://www.youtube.com/watch?v=mZ5H8sn_2ZI";
  } else if (lowerCaseType.includes("react")) {
    directTo = "https://www.youtube.com/watch?v=JPT3bFIwJYA";
  } else if (lowerCaseType.includes("node.js")) {
    directTo = "https://www.youtube.com/watch?v=uVwtVBpw7RQ";
  } else if (lowerCaseType.includes("progressive web app")) {
    directTo = "https://www.youtube.com/watch?v=VmKePMB0C8Q";
  } else if (lowerCaseType.includes("css")) {
    directTo = "https://www.youtube.com/watch?v=s7ONvIgOWdM";
  } else {
    directTo = "https://www.google.com/search?q=what+is+" + type;
  }
  https: return directTo;
}

function sendToLearningMaterial(type) {
  var win = window.open(getWebsiteFromType(type), "_blank");
  win.focus();
}

export default sendToLearningMaterial;
