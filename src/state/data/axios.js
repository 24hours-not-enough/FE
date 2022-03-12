import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_IP,
});

export default instance;

// class Axios {
//   constructor() {
//     this.base = process.env.REACT_APP_IP;

//     this.instance = axios.create({
//       baseURL: this.base,
//     });
//   }

//   get(config) {
//     return this.instance.get(config);
//   }

//   post(config) {
//     return this.instance.post(config);
//   }

//   put(config) {
//     return this.instance.put(config);
//   }

//   delete(config) {
//     return this.instance.delete(config);
//   }
// }

// export default Axios;
