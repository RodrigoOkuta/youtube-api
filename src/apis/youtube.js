import axios from 'axios'

const KEY = 'AIzaSyCnD4dfmEpxHj31GZdnvbBKbt53TD8cHjs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    }
})