// Adapted from https://www.amitsn.com/blog/how-to-generate-a-sitemap-for-your-react-website-with-dynamic-content

require("babel-register")({
  presets: ["es2015", "react"]
});

require('dotenv').config();
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
const fire = require("./components/firebase").default;

function generateSitemap(params) {
  return (
    new Sitemap(router)
      .applyParams(params)
      .build("https://codeschooldirectory.co.za")
      .save("./public/sitemap.xml")
  )
}

function getSchools() {
  let messagesRef = fire
    .database()
    .ref()
    .orderByKey()
    .limitToLast(100);

  messagesRef.on("value", function(snapshot) {
    // We have received the data from Firebase.
    let keyMap = [];

    snapshot.forEach(function(school) {
      let schoolRow = school.val()
      keyMap.push({ school: schoolRow.key });
    });
    console.log(keyMap.length + ' entries found.');

    const paramsConfig = {
      "/:school": keyMap
    };
    generateSitemap(paramsConfig);
    console.log('Sitemap generated!');

    process.exit(0);
  });
}

getSchools();


