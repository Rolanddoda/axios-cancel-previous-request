> ### A tiny vue app showing how to cancel previous api requests using axios

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### How to cancel previous request

```js
import axios from 'axios'
const request = axios.CancelToken.source()

axios.get('api url', { cancelToken: request.token })

request.cancel('Request cancelled')
```