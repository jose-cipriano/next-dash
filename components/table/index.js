import { Formik, Form, FieldArray } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import fetchJson from '../../lib/fetchJson'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import { validationSchema } from '../../utils/schema'
import { Button } from '../common/button'
import Input from '../common/form/input'
import Modal from '../common/modal'
import tableStyles from './table.module.css'
import loginstyles from '../../styles/Common.module.css'

export const TableRecord = ({ records, toggleState, getRecords }) => {
    const [showModal, setShowModal] = useState(-1)
    const handleDelete = async (id) => {
        let apiEndpoint
        switch (toggleState) {
            case 1:
                apiEndpoint = API_ENDPOINTS.DELETE_COUNTRY
                break
            case 2:
                apiEndpoint = API_ENDPOINTS.DELETE_CITY
                break
            case 3:
                apiEndpoint = API_ENDPOINTS.DELETE_AREA
                break
            case 4:
                apiEndpoint = API_ENDPOINTS.DELETE_STREET
                break
            default:
                break
        }

        await fetchJson(apiEndpoint, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then((res) => {
            toast(res.message)
            getRecords(toggleState)
            return
        })
    }
    const handleChangeLocation = async ({name}, recordId) => {
        let apiEndpoint
        switch (toggleState) {
            case 1:
                apiEndpoint = API_ENDPOINTS.EDIT_COUNTRY
                break
            case 2:
                apiEndpoint = API_ENDPOINTS.EDIT_CITY
                break
            case 3:
                apiEndpoint = API_ENDPOINTS.EDIT_AREA
                break
            case 4:
                apiEndpoint = API_ENDPOINTS.EDIT_STREET
                break
            default:
                break
        }

        await fetchJson(apiEndpoint, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, recordId})
        }).then((res) => {
            toast(res.message)
            setShowModal(-1)
            getRecords(toggleState)
            return
        })

    }

    if (records?.length === 0) return <div>No record</div>

    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {records?.map((record, index) => {
                    return (
                        <tr key={record._id}>
                            <td>{index}</td>
                            <td>{record.name}</td>
                            <td>
                                <Button
                                    style={{ marginRight: '1rem' }}
                                    onClick={() => handleDelete(record._id)}
                                >
                                    Delete
                                </Button>
                                <Button onClick={() => setShowModal(record._id)}>Edit</Button>
                                <Modal
                                    onClose={() => setShowModal(-1)}
                                    show={showModal === record._id}
                                    title="Change location"
                                >
                                    <Formik
                                        initialValues={{ name: record.name }}
                                        validationSchema={validationSchema.changeLocationSchema}
                                        onSubmit={(args)=> {
                                            handleChangeLocation({...args}, record._id)
                                        }}
                                    >
                                        {({ touched, errors, handleBlur, handleChange }) => {
                                            return (
                                                <Form>
                                                    <Input
                                                        id="name"
                                                        label="change name"
                                                        name="name"
                                                        type="text"
                                                        background="white"
                                                        placeholder="Change name"
                                                        autoComplete="off"
                                                        error={touched.name && errors?.name}
                                                        onChange={(...args) => {
                                                            handleChange(...args)
                                                        }}
                                                        onBlur={handleBlur}
                                                        defaultValue={record.name}
                                                        required
                                                    />
                                                    <div className={tableStyles.crFormCta}>
                                                        <input
                                                            type="submit"
                                                            value="Confirm Edit"
                                                            className={loginstyles.defaultButton}
                                                        />
                                                    </div>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </Modal>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
