const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('nllb-200-3-3b','9f72fe17e00647b14876ae5f9190164d792136c1')
// Returns an Axios promise with the results.
// In case of success, results are contained in `response.data`. 
// In case of failure, you can retrieve the status code in `err.response.status` 
// and the error message in `err.response.data.detail`.
client.translation(`John Doe has been working for Microsoft in Seattle since 1999.`,'eng_Latn','fra_Latn').then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
