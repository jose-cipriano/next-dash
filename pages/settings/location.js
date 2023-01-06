import { useState } from 'react'
import { toast } from 'react-toastify'
import { ActionTab } from '../../components/tab'
import fetchJson from '../../lib/fetchJson'
import Tabstyles from '../../styles/Tabs.module.css'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import { validationSchema } from '../../utils/schema'

export default function Location() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (id) => {
        setToggleState(id)
    }
    const [status, setStatus] = useState('idle')
    const addCountry = async ({ country }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_COUNTRY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            return
        })
    }
    const addCity = async ({ city }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_CITY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            return
        })
    }
    const addArea = async ({ area }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_AREA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ area }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            return
        })
    }
    const addStreet = async ({ street }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_STREET, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ street }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            return
        })
    }
    return (
        <div className={Tabstyles.location}>
            <div className={Tabstyles.TabsBlock}>
                <button
                    className={
                        toggleState === 1
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(1)
                    }}
                >
                    country
                </button>
                <button
                    className={
                        toggleState === 2
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(2)
                    }}
                >
                    city
                </button>
                <button
                    className={
                        toggleState === 3
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(3)
                    }}
                >
                    area
                </button>
                <button
                    className={
                        toggleState === 4
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(4)
                    }}
                >
                    street
                </button>
            </div>
            {toggleState === 1 && (
                <ActionTab
                    initialValues={{ country: '' }}
                    validationSchema={validationSchema.countrySchema}
                    onSubmit={addCountry}
                    name="country"
                    label="country"
                    status={status}
                />
            )}
            {toggleState === 2 && (
                <ActionTab
                    initialValues={{ city: '' }}
                    validationSchema={validationSchema.citySchema}
                    onSubmit={addCity}
                    name="city"
                    label="City"
                    status={status}
                />
            )}
            {toggleState === 3 && (
                <ActionTab
                    initialValues={{ area: '' }}
                    validationSchema={validationSchema.areaSchema}
                    onSubmit={addArea}
                    name="area"
                    label="Area"
                    status={status}
                />
            )}
            {toggleState === 4 && (
                <ActionTab
                    initialValues={{ street: '' }}
                    validationSchema={validationSchema.streetSchema}
                    onSubmit={addStreet}
                    name="street"
                    label="Street"
                    status={status}
                />
            )}
        </div>
    )
}
