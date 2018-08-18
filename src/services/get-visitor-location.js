import { IPSTACK_API_URL } from '../config-vars'

const getCode = (data) => {
    if(data.continent_code === 'EU') {
        if(data.country_code === 'GB') {
            return 'UK'
        } else {
            return 'EU'
        }
    } else {
        return 'NA';
    }
}

export const getVisitorLocation = () => {
    return new Promise((resolve, reject) => {
        fetch(IPSTACK_API_URL)
        .then(data => {
            return data.json()
        })
        .then(data => {
            resolve(getCode(data));
        })
        .catch(err => {
            reject(err);
        })
    })
}