const request = require('superagent');

const getJSON = function(url) {
  return new Promise((resolve, reject) => {
    request(url, function(err, res) {
      if (res && res.ok) {
        resolve(res.body);
      } else {
        reject(err);
      }
    });
  });
};

export default getJSON;
