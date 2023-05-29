import React from 'react';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      address: '',
      address2: '',
      city: '',
      state: ''

    },
    onSubmit: values =>{
      console.log('form:',values);
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};
      if(!values.email) {
        errors.email = 'Email Required';
      }
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Username should be an email';
      }
      if(!values.password) {
        errors.password = 'Password Required';
      }
      if(!values.address) {
        errors.address = 'Address Required';
      } 
      if(!values.address2) {
        errors.address = null;
      }
      if(!values.city) {
        errors.city = 'City Required';
      }
      if(!values.state) {
        errors.state = 'State Required'
      } else if (!values.state) {
        errors.state = 'Please enter 2-digit state code'
      }
      return errors;
    }
  });
  
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div id="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div id="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
        <div id="address" onChange={formik.handleChange} value={formik.values.address}/><br/>
        {formik.errors.address ? <div style={{color:'red'}}>{formik.errors.address}</div> : null}
        <div id="address2" onChange={formik.handleChange} value={formik.values.address2}/><br/>
        {formik.errors.address2 ? <div style={{color:'red'}}>{formik.errors.address2}</div> : null}
        <div id="city" onChange={formik.handleChange} value={formik.values.city}/><br/>
        {formik.errors.city ? <div style={{color:'red'}}>{formik.errors.city}</div> : null}
        <div id="state" onChange={formik.handleChange} value={formik.values.state}/><br/>
        {formik.errors.state ? <div style={{color:'red'}}>{formik.errors.state}</div> : null}              
      </form>      
    </div>
  );
}

export default App;
