import * as yup from 'yup';
import {checkAvailabilityUser} from '../services/user.service'

export const registerSchema = yup.object().shape({
    username: yup.string()
        .test("username", 'This Username has already been registered',async function (username)
        {
            await checkAvailabilityUser(username);
            return await checkAvailabilityUser(username);
        })
        .min(3)
        .required(),
    email: yup.string()
        .email()
        .required(),
    password: yup.string()
        .required()
        .min(6)
        .max(20)
});
/*
validationSchema: Yup.object({
        email: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .max(20, 'Must be less  than 20 characters')
            .required('Email is required')
            .test('Unique Email', 'Email already in use', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`http://localhost:8003/api/u/user/${value}/available`)
                         ‏
 */