import axios from 'axios';

const API_URL = 'http://localhost:5000/api/questions/';

const getAllQuestions = () => {
  return axios.get(API_URL);
};

const postQuestion = (question) => {
  return axios.post(API_URL, question);
};

const getQuestion = (id) => {
  return axios.get(API_URL + id);
};

export default { getAllQuestions, postQuestion, getQuestion };
