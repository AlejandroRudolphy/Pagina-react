import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LinearIndeterminate from './Terms'


const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url()
});

export default function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <br/>  
       
      <div>
      <div> 
      <LinearIndeterminate/>
      <br/>  
        <label> Create a New Account </label>
        </div>
        <br/>  
        <label>First Name  </label>
        <input type="text" name="firstName" ref={register} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br/>  
      <div style={{ marginBottom: 10 }}>
        <label>Last Name  </label>
        <input type="text" name="lastName" ref={register} />
        {errors.lastName && <p>{errors.lastName.message}</p>} 
      </div>
      <br/>  
      <div>
        <label> Age  </label>
        <input type="text" name="age" ref={register} color />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <br/>  
      <div>
        <label>Email  </label>
        <input type="text" name="website" ref={register} />  
        
      </div>
      <br/> 
      <div>
      <LinearIndeterminate/>
      <br/> 
      <input type="submit" value="Sign up"/>
      </div>
    
    </form>
  );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
