import { useEffect, useReducer, useState } from "react";
import Card from "../../UI/Card";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if(action.type === 'EMAIL_VALUE') {
    return {value: action.value, isValid: action.value.includes('@')}
  }
  if(action.type === 'EMAIL_BLUR') {
    return {value: state.value, isValid: state.value.includes("@")}
  }
  return {value: '', isValid: null}
}

const passwordReducer = (state, action) => {
  if(action.type === 'PASSWORD_VALUE') {
    return {value: action.value, isValid: action.value.trim().length > 5}
  }
  if(action.type === 'PASSWORD_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 5}
  }
  return {value: '', isValid: null}
}

const Login = (props) => {
  
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})


  const [formIsValid, setFormIsValid] = useState(false);

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
      setFormIsValid(emailIsValid && passwordIsValid);

  }, [emailIsValid, passwordIsValid])

 const emailChangeHandler = event => {
    dispatchEmail({type: 'EMAIL_VALUE', value: event.target.value});
 }

 const passwordChangeHandler = event => {
  dispatchPassword({type: 'PASSWORD_VALUE', value: event.target.value});
 }

 const emailBlurHandler = event => {
    dispatchEmail({type: 'EMAIL_BLUR'});
 }

 const passwordBlurHandler = () => {
    dispatchPassword({type: 'PASSWORD_BLUR'});
 }

  const submitHandler = event => {
      event.preventDefault();
      props.onLogin();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={`${emailIsValid === false ? classes.invalid : ''}`} >
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        </div>
        <div className={`${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
        </div>
        <div>
          <button disabled={!formIsValid} >Login</button>
        </div>
      </form>
      </Card>
  );
};

export default Login;
