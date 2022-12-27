import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { errorHelper } from '../utils/tools'
//import TextField from '@mui/material/TextField'
//import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'
import loginstyles from '../styles/Common.module.css'
import Input from '../components/common/form/input'

const ForgotPass = () => {


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
                        <form
                            className={loginstyles.loginForm}
                            action="/"
                            method="post"
                        >
                           <Input
                                id="user"
                                label="User name"
                                name="user"
                                type="text"
                                background="white"
                                placeholder="Please enter your user name"
                                autoComplete="off"
                                required
                            />
                            <div className={loginstyles.crFormCta}>
                                <input
                                    type="submit"
                                    value="Recover password"
                                    className={loginstyles.defaultButton}
                                />
                            </div>
                        </form>
                        <p><Link href="/">Sign in</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ForgotPass