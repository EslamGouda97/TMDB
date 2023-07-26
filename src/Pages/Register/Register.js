import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './RegisterForm.css';
import LanguageContext from "../../context/languages";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const { lang } = useContext(LanguageContext);

  const navigate =useNavigate();
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = validateInput(name, value);
    setFormErrors({ ...formErrors, [name]: errors[name] });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    navigate('/movies')
    
  };

  const langData = {
    en: {
      register:'Register',
      email:'Email address',
      name:'Name ',
      username:'Username',
      password:'Password ',
      confirmPassword:'Confirm Password ',
      emailHint:'Enter email',
      nameHint:'Enter name ',
      usernameHint:'Enter username',
      passwordHint:'Enter password ',
      ConfirmPasswordHint:'Enter Confirmed Password',
      nameError: 'Name is required',
      emailError:  'Email address is invalid',
      usernameError:  'Username should not contain spaces',
      passwordError: 'Password should contain at least one lowercase, one uppercase, one digit, and one special character (@$!%*?&) and be at least 8 characters long',
      confirmPasswordError: 'Passwords do not match',
    
    },
    ar: {
      register:'إنشاء حساب',
      email:"عنوان البريد الإلكتروني",
      name: "الاسم",
      username:"اسم المستخدم",
      password:"كلمة المرور" ,
      confirmPassword:'تأكيد كلمة المرور ',
      emailHint:"أدخل البريد الإلكتروني" ,
      nameHint:'أدخل الاسم',
      usernameHint:"أدخل اسم المستخدم",
      passwordHint:"أدخل كلمة المرور",
      ConfirmPasswordHint:'اعد كتابة كلمة المرور',
      nameError: 'الاسم مطلوب ياصحبي',
      emailError:  'الايميل غلط جرب واحد تاني',
      usernameError:  'اسم المستخدم ميكنش فيه مسافات ',
      passwordError: 'يجب أن تحتوي كلمة المرور على الأقل على حرف صغير واحد ، وحرف كبير واحد ، ورقم واحد ، وحرف خاص واحد (@ $!٪ *؟ &) وأن تتكون من 8 أحرف على الأقل',
      confirmPasswordError: 'ياعم اكتب الرقم السري زي اللي فوق',

  
    },
    es: { register:'Register',
    email:'Email address',
    name:'Name ',
    username:'Username',
    password:'Password ',
    confirmPassword:'Confirm Password ',
    emailHint:'Enter email',
    nameHint:'Enter name ',
    usernameHint:'Enter username',
    passwordHint:'Enter password ',
    ConfirmPasswordHint:'Enter Confirmed Password',
    nameError: 'Name is required',
    emailError:  'Email address is invalid',
    usernameError:  'Username should not contain spaces',
    passwordError: 'Password should contain at least one lowercase, one uppercase, one digit, and one special character (@$!%*?&) and be at least 8 characters long',
    confirmPasswordError: 'Passwords do not match',
  
    }
  };

  const validateInput = (name, value) => {
    const errors = { ...formErrors };
    switch (name) {
      case 'name':
        errors.name = value.trim().length === 0 ?langData[lang].nameError:'' ;
        break;
      case 'email':
        errors.email = !/\S+@\S+\.\S+/.test(value) ? langData[lang].emailError : '';
        break;
      case 'username':
        errors.username = !/^\S+$/.test(value) ? langData[lang].usernameError : '';
        break;
      case 'password':
        errors.password =
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
            value
          ) ||
          value.trim().length < 8
            ? langData[lang].passwordError
            : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value !== formData.password ? langData[lang].confirmPasswordError  : '';
        break;
      default:
        break;
    }
    return errors;
  };

  return (
    <div className="register-form-container my-5">
      <h2>{langData[lang].register}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{langData[lang].email}</Form.Label>
          <Form.Control
            type="email"
            placeholder={langData[lang].emailHint}
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={formErrors.email}
            isValid={formData.email && !formErrors.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>{langData[lang].name}</Form.Label>
          <Form.Control
            type="text"
            placeholder={langData[lang].nameHint}
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={formErrors.name}
            isValid={formData.name && !formErrors.name}
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>{langData[lang].username}</Form.Label>
          <Form.Control
            type="text"
            placeholder={langData[lang].usernameHint}
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={formErrors.username}
            isValid={formData.username && !formErrors.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{langData[lang].password}</Form.Label>
          <Form.Control
            type="password"
            placeholder={langData[lang].passwordHint}
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={formErrors.password}
            isValid={formData.password && !formErrors.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>{langData[lang].confirmPassword}</Form.Label>
          <Form.Control
            type="password"
            placeholder={langData[lang].ConfirmPasswordHint}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
           isInvalid={formErrors.confirmPassword}
            isValid={formData.confirmPassword && !formErrors.confirmPassword}
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className='my-3 mx-auto d-block' variant="primary" type="submit">
        {langData[lang].register}
  </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;


// export default function RegisterForm (){
//   const [count,setCount]=useState(0);
//   function changeCount(){
//     setCount(Math.random)
//   }

//   useEffect(()=>{
//     //Call api
//     console.log("Did mount")
//   },[]);

//   useEffect(()=>{
//     if(count===0)
//     return;
//     console.log("Did update ")
//   },[count]);

//   useEffect(()=>{
//     console.log("Did mount ")
    
//     return ()=>{

//       console.log("unmount mount ")
//     };
//   },[]);


//   return(
// <> 
// <div className="container text-center my-5">

//   <h1>
//     Count :{count}
//   </h1>
//   <button  className="btn btn-primary" onClick={()=>changeCount()}>Change</button>
// </div>


// </>
//   )
// }

// import React, { useState } from 'react'

// export default function Register() {


//   const [user,setUser]= useState({
//   email:'',
//   password:''
//   });
//   function getuser(e){
// const {name,value}=e.target;
//     setUser({...user,[name]:value})
//     console.log(user)
//   }




//   return (
// <div className='register-form-container my-5'>
// <form className=' w-60 text-center  ' >
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control"onChange={(e)=>getuser(e)} id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" onChange={(e)=>getuser(e)} id="exampleInputPassword1" name='password' placeholder="Password"/>
//   </div>
//   <div className="form-check">
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//     <input type="submit" className="form-check-input" id="exampleCheck1"/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </div>
//   )
// }
