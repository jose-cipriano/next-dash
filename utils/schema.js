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
    //   TODO
    //   forgotSchema: yup.object({
    //     email: yup
    //       .string("Enter your email")
    //       .email("Enter a valid email")
    //       .required("Email is required"),
    //   }),
}
