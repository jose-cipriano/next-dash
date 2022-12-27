import LoginLayout from '../components/layout/layoutblank'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import loginstyles from '../styles/Common.module.css'
import Input from '../components/common/form/input'



export default function Home() {
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
                            <Input
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                background="white"
                                placeholder="Please enter your user password"
                                autoComplete="off"
                                required
                            />
                            <div className={loginstyles.crFormCta}>
                                <input
                                    type="submit"
                                    value="Sign in"
                                    className={loginstyles.defaultButton}
                                />
                            </div>
                        </form>
                        <p><Link href="/forgot">Forgot password?</Link></p>
                    </div>
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