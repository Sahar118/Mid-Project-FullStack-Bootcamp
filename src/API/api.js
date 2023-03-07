import axios from "axios";

const api = axios.create({
    baseURL: "https://640065bb29deaba5cb36770d.mockapi.io/Didactic-Diagnosis-App/api/paragraphs/ConcludingParagraph"
});

export default api;