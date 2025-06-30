import axios from 'axios';

const BASE_URL = 'https://notice-board-ploq.onrender.com/api/announcements';

export const fetchAnnouncements = () => axios.get(BASE_URL);
export const createAnnouncement = (data) => axios.post(BASE_URL, data);
