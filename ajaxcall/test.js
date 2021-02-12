const axios = require('axios')
// axios.interceptors.request.use(
//   function (req) {
//     req.time = { startTime: new Date() };
//     return req;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
// axios.interceptors.response.use(
//   function (res) {
//     res.config.time.endTime = new Date();
//     res.duration =
//       res.config.time.endTime - res.config.time.startTime;
//     return res;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all',{params: {
        foo: 'bar'
      }})
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = await getBreeds()

  if (breeds.data.message) {
    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
  }
}

countBreeds()