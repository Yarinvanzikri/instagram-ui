import * as yup from 'yup';

export const postCreateSchema = yup.object().shape({
    body: yup.string()
        .min(1)
        .max(116,'At most 116 characters'),
    image: yup.mixed()
        .required('You must select an image')
});