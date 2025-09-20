// import axios from 'axios'
// ? ----------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/todoss/adad')
//   .then((res) => {
//     if (res.status === 404) {
//       console.log('err')
//     }
//     res.json();
//   }
//   )
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ? ----------------------------------------------------------------------------------------------

// function data() {
//   const res = axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.data)
//   return res;
// }

// data().then(data => console.log(data))

// ?----------------------------------------------------------------------------------------------------------------

// const api = axios.create(
//   {
//     baseURL: 'https://jsonplaceholder.typicode.com'
//   }
// );

// api.customGet = async () => {
//   try {
//     const res = await api.get('/posts')
//     console.log(res.data)
//   }
//   catch (err) {
//     console.log('err')
//   }
//   }

// api.customGet()

