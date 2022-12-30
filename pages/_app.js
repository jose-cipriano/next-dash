import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'
import useSWR from 'swr'
import Home from '.'
import ForgotPass from './forgot'
import ResetPassword from './reset/[token]'
import Dashboard from './dashboard'
import { API_ENDPOINTS } from '../utils/api-endpoints'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const { data: user } = useSWR(API_ENDPOINTS.ME)

    const OriginalComponent = Component
    if (Component === Home || Component === ForgotPass || Component === ResetPassword) {
        Component = Dashboard
    }

    const getLayout = Component.getLayout || ((page) => page)

    return (
        <SWRConfig
            value={{
                fetcher: fetchJson,
                onError: (err) => {
                    console.error(err)
                },
            }}
        >
            {user?.isLoggedIn ? (
                getLayout(<Component {...pageProps} />)
            ) : OriginalComponent === Component ? (
                <Home />
            ) : (
                <OriginalComponent />
            )}
        </SWRConfig>
    )
}
