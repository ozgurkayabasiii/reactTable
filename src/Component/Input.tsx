import { useField } from "formik"

export default function Input({label,...props}:any) {
    const [field,helpers,meta]=useField(props)
    return (
   
    <label>
        <div>{label}</div>
        <input  {...field} {...props} />
    </label>
  )
}
