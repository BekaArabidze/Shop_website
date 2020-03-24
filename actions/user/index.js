const axios = require('axios').default;


const axiosInstance = axios.create({
    baseURL: '${process.env.BASE_URL}/api',
    timeout: 1000
});



// ------------ BLOG ACTIONS --------------

export const getServices = async () => {
    return await axiosInstance.get('/admin/services').then(res => console.log(res.data));
}

















