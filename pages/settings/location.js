import { useState } from 'react'
import { ActionTab } from '../../components/tab'
import Tabstyles from '../../styles/Tabs.module.css'
import { validationSchema } from '../../utils/schema'

export const Location = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (id) => {
        setToggleState(id)
    }

    const addCountry = ({ country }) => {
        console.log(country)
    }
    const addCity = ({ city }) => {
        console.log(city)
    }
    const addArea = ({ area }) => {
        console.log(area)
    }
    const addStreet = ({ street }) => {
        console.log(street)
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
                />
            )}
            {toggleState === 2 && (
                <ActionTab
                    initialValues={{ city: '' }}
                    validationSchema={validationSchema.citySchema}
                    onSubmit={addCity}
                    name="city"
                    label="City"
                />
            )}
            {toggleState === 3 && (
                <ActionTab
                    initialValues={{ area: '' }}
                    validationSchema={validationSchema.areaSchema}
                    onSubmit={addArea}
                    name="area"
                    label="Area"
                />
            )}
            {toggleState === 4 && (
                <ActionTab
                    initialValues={{ street: '' }}
                    validationSchema={validationSchema.streetSchema}
                    onSubmit={addStreet}
                    name="street"
                    label="Street"
                />
            )}
        </div>
    )
}
