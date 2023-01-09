import * as yup from 'yup'

export const validationSchema = {
    loginSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
        password: yup.string('Enter your password').required('Password is required'),
    }),
    forgotSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
    }),
    resetSchema: yup.object({
        password: yup.string('Enter your username').required('Password is required'),
        confirmPwd: yup.string('Enter your username').required('Password is required'),
    }),
    countrySchema: yup.object({
        country: yup.string('Enter the Country').required('Country is required'),
    }),
    citySchema: yup.object({
        city: yup.string('Enter the City').required('City is required'),
    }),
    areaSchema: yup.object({
        area: yup.string('Enter the Area').required('Area is required'),
    }),
    streetSchema: yup.object({
        street: yup.string('Enter the Street').required('Street is required'),
    }),
    changeNameSchema: yup.object({
        name: yup.string('Enter the new name').required('Name is required'),
    }),
    categorySchema: yup.object({
        category: yup.string('Enter the category').required('Category is required'),
    }),
}
