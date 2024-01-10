import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
const captchaRef = useRef(null);
const [disable , setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }
        , [])


    const obj={}
    const handdelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        obj.email = email;
        obj.password = password;
        console.log(obj);
       
    }
    const habelValidetCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisable(false);
            alert('Captcha Matched');
        }
   
        else {
            setDisable(true);
            alert('Captcha Does Not Match');
        }


    }

  return (
    <>
   <div>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handdelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          < LoadCanvasTemplateNoReload /> 
          </label>
          <input type="text" ref={captchaRef} placeholder="captcha" name='captcha' className="input input-bordered" required />
          <button onClick={habelValidetCaptcha} type='submit' className="btn btn-outline btn-primary mt-4">validet</button>
        </div>
        <div className="form-control mt-6 ">
          <button disabled ={disable} className="btn btn-primary">Login</button>
        
        </div>
      </form>
    </div>
  </div>
</div>
   </div>
    </>
  )
}

export default Login