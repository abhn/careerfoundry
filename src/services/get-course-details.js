import { COURSE_DETAILS_URL } from '../../config-vars';

export const getCourses = (urlSlug) => {
    return fetch(`${COURSE_DETAILS_URL}${urlSlug}`);
}