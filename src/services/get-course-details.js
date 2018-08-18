import { COURSE_DETAILS_URL } from '../config-vars';

export const getCourseDetails = (urlSlug) => {
    return new Promise((resolve, reject) => {
        fetch(`${COURSE_DETAILS_URL}${urlSlug}`)
        .then(data => data.json())
        .then(data => {
            resolve(data)
        })
        .catch(err => reject(err))
    })
}