import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string().required('You must put in a Name'),
    email: Yup.string().required('You must use a vaild Email').strict(),
    password: Yup.string().required('Please select a Password').min(5, 'Password minimum 5 characters'),
    termsOfService: Yup.boolean().oneOf([true]).required('Must agree to Terms of service')
})

export default FormSchema;