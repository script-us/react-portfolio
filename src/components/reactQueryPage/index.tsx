import React, { useEffect, useMemo } from 'react'
import { Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useReactQuery from '@/react-query/example/useReactQuery'
import { ITestInterface } from '@/redux/auth/interface'
import TextField from '../shared/textField'

interface InitialValues {
  userId: string
  title: string
}

const ReactQueryPage = () => {
  const { testData, useAddPost, testLoading } = useReactQuery()
  const initialValues = useMemo(() => {
    return {
      userId: '',
      title: '',
    }
  }, [])

  const validationSchema = Yup.object().shape({
    userId: Yup.string().required('Please provide your userId'),
    title: Yup.string().required('Please enter the title'),
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  })

  useEffect(() => {
    formik.resetForm({ values: initialValues })
  }, [])

  const test = useAddPost()
  const handleSubmit = (values: InitialValues) => {
    const payload = {
      body: values.userId,
      title: values.title as string,
    }
    test.mutate(payload)
  }

  return (
    <>
      {testLoading && <h1>Loading...</h1>}
      <h1>API CALLING USING REACT-QUERY</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Body*"
          type="text"
          name="userId"
          value={formik.values.userId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.userId && formik.touched.userId}
          helperText={formik.touched.userId && formik.errors.userId ? formik.errors.userId : ''}
        />
        <br />
        <br />
        <TextField
          label="Title*"
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.errors.title && formik.touched.title}
          helperText={formik.touched.title && formik.errors.title ? formik.errors.title : ''}
        />
        <br />
        <br />
        <Button type="submit">submit!</Button>
      </form>
      {(testData as ITestInterface[])?.map((res) => {
        return (
          <div style={{ display: 'flex' }}>
            <ul>
              <li>{res.userId}</li>
            </ul>
            <ul style={{ marginLeft: '30px' }}>
              <li>{res.title}</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}
export default ReactQueryPage
