// import {useFormik} from "formik";
import {Formik,Form,Field} from 'formik'
import Input from './Component/Input';
export default function UserForm() {
//   const { handleSubmit, handleChange, values } = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       age: '',
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
  return (
    
        <Formik
        initialValues={{
            userId:'',
            id:'',
            title:'',
            body:''
        }}
        onSubmit={values=>{
          console.log(values)
        }}
        >
            {({values}) =>(
                <Form>
                  <Input label="Body" name="Body" /><br/>
                  <button type="submit">Ara</button>
                </Form>
            )}
            
        </Formik>
      
  );
}
/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Adı : </label>
        <input type="text" id="firstname"value={values.firstname} onChange={handleChange}/><br/>
        <label htmlFor="username">Soydı : </label>
        <input type="text" id="lastname"value={values.lastname} onChange={handleChange}/><br/>
        <label htmlFor="username">Yaşı :</label>
        <input type="text" id="age"value={values.age} onChange={handleChange}/><br/>

        <button type="submit">Gönder</button>
      </form> */
