import * as yup from 'yup'

export const validationSchema = {
    loginSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .required('Password is required'),
    }),
    forgotSchema: yup.object({
        username: yup
            .string("Enter your username")
            .email("Enter a valid username")
            .required("Email is required"),
    }),
    resetSchema: yup.object({
        password: yup
            .string("Enter your username")
            .required("Password is required"),
        confirmPwd: yup
            .string("Enter your username")
            .required("Password is required"),
    }),
}
