import axios from 'axios'

const journalApi = axios.create({
    baseURL :'https://vue-demos-e4aa3-default-rtdb.firebaseio.com/'
})

export default journalApi