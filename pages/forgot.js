import Image from 'next/image'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import styles from '../styles/Home.module.css'
import loginstyles from '../styles/Common.module.css'
import Input from '../components/common/form/input'
import { validationSchema } from '../utils/schema'
import fetchJson from '../lib/fetchJson'
import { API_ENDPOINTS } from '../utils/api-endpoints'

const ForgotPass = () => {
    const handleForgot = async ({username}) =>  {
        try {
            await fetchJson(API_ENDPOINTS.FORGOT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username}),
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <main className={styles.mainContent}>
                <div className={loginstyles.loginCard}>
                    <div className={loginstyles.loginCardLogo}>
                        <Image
                            className={styles.logo}
                            src="/logo-color.svg"
                            alt="Welcome"
                            width={70}
                            height={70}
                            priority
                        />
                    </div>
                    <h1>Password recovery</h1>
                    <div className={loginstyles.formWrapper}>
                        <Formik
                            initialValues={{ username: '' }}
                            validationSchema={validationSchema.forgotSchema}
                            onSubmit={handleForgot}
                        >
                            {({ touched, errors, handleBlur, handleChange }) => {
                                return (
                                    <div>
                                        <Form className={loginstyles.loginForm}>
                                            <Input
                                                id="username"
                                                label="User name"
                                                name="username"
                                                type="text"
                                                background="white"
                                                placeholder="Please enter your user name"
                                                autoComplete="off"
                                                error={touched.username && errors?.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            <div className={loginstyles.crFormCta}>
                                                <input
                                                    type="submit"
                                                    value="Recover password"
                                                    className={loginstyles.defaultButton}
                                                />
                                            </div>
                                        </Form>
                                    </div>
                                )
                            }}
                        </Formik>
                        <p>
                            <Link href="/">Sign in</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ForgotPass