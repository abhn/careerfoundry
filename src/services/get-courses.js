import { ALL_COURSES_URL } from '../../config-vars';

export const getCourses = () => {
    return fetch(ALL_COURSES_URL);
}