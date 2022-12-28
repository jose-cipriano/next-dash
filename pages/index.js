import LoginLayout from '../components/layout/layoutblank'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import loginstyles from '../styles/Common.module.css'
import Input from '../components/common/form/input'
import { Formik, Form } from "formik";
import { validationSchema } from "../utils/schema";

export default function Home() {
    const handleSignin = async ({username, password}) => {
        console.log(username, password)
        
    }

    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainContent}>
                <div className={loginstyles.loginCard}>
                    <div className={loginstyles.loginCardLogo}>
                        <Image
                            className={styles.logo}
                            src="/logo-color.svg"
                            alt="welcome"
                            width={70}
                            height={70}
                            priority
                        />
                    </div>
                    <h1>Welcome back!</h1>
                    <Formik 
                        initialValues={{ username: "", password: "" }}
                        validationSchema={validationSchema.loginSchema}
                        onSubmit={handleSignin}>
                        {({touched, errors, handleBlur, handleChange}) => {
                            return (
                                <div className={loginstyles.formWrapper}>
                                    <Form
                                        className={loginstyles.loginForm}
                                    >
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
                                        <Input
                                            id="password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            background="white"
                                            placeholder="Please enter your user password"
                                            autoComplete="off"
                                            error={touched.password && errors?.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <div className={loginstyles.crFormCta}>
                                            <input
                                                type="submit"
                                                value="Sign in"
                                                className={loginstyles.defaultButton}
                                            />
                                        </div>
                                    </Form>
                                    <p><Link href="/forgot">Forgot password?</Link></p>
                                </div>
                            )
                        }}
                    </Formik>
                </div>
            </main>
        </>
    )
}

Home.getLayout = function getLayout(home) {
  return (
    <>
      <LoginLayout>{home}</LoginLayout>
    </>
  )
}