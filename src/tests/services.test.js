import { getCourseDetails } from '../services/get-course-details'
import { getCourses } from '../services/get-courses'
import { getVisitorLocation } from '../services/get-visitor-location'

/**
 * Testing our non-react code and services here
 */
describe('testing services', () => {
    it('getCourseDetails', async () => {
        const res = await getCourseDetails('become-a-web-developer')
        expect(res.slug).toEqual('become-a-web-developer')
        expect(Object.keys(res).length).toEqual(3)
    });

    it('getCourses', async () => {
        const res = await getCourses();
        expect(Object.keys(res).length).toBeGreaterThan(0);
    })

    it('getVisitorLocation', async () => {
        const res = await getVisitorLocation();
        expect(res).toMatch('NA' || 'UK' || 'EU') 
    })
})

