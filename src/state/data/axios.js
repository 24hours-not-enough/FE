import axios from 'axios';

class Axios {
  constructor() {
    this.base = process.env.REACT_APP_IP;

    this.instance = axios.create({
      baseURL: this.base,
    });
  }

  get(url, config) {
    config
      ? this.instance.get(url, config)
      : this.instance.get(url);
  }

  post(url, config) {
    config
      ? this.instance.post(url, config)
      : this.instance.post(url);
  }

  put(url, config) {
    config
      ? this.instance.put(url, config)
      : this.instance.put(url);
  }

  delete(url, config) {
    config
      ? this.instance.delete(url, config)
      : this.instance.delete(url);
  }
}

export default Axios;
