import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/announcements';

export const fetchAnnouncements = () => axios.get(BASE_URL);
export const createAnnouncement = (data) => axios.post(BASE_URL, data);
