import { ALL_COURSES_URL } from '../config-vars';

export const getCourses = () => {
    return new Promise((resolve, reject) => {
        fetch(ALL_COURSES_URL)
        .then(data => data.json())
        .then(data => {
            resolve(data.courses)
        })
        .catch(err => reject(err))
    })
}