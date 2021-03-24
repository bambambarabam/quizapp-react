import axios from 'axios';

export default axios.create({
    baseURL: 'https://quizapp-8b7c7-default-rtdb.europe-west1.firebasedatabase.app/'
})