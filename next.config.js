// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
// const withFonts = require('next-fonts');

// module.exports = withFonts(withCSS(
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: "url-loader",
//           options: {
//             limit: 100000
//           }
//         }
//       });
//       return config;
//     }
//   })
// ));


  // module.exports = withFonts(withCSS(withSass({
  // enableSvg: true,
  // webpack(config, options) {
  // return config;
  // }
  // }))); 



  // next.config.js
const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

require("dotenv").config();

module.exports = withImages(
  withCSS(
    withSass({
      webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
          acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
          return acc;
        }, {});

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
      }
    })
  )
);