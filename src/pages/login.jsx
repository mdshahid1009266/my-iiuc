
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';


export default () => {

    const navigate = useNavigate();
    const dummyLoginUser = {
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(true);
    const [error, seterror] = useState(true);

    const [type, setTupe] = useState('password');
    const [itype, isetTupe] = useState('ri-eye-off-line login__eye');
    const passhandel = () => {
        (type == "text") ? setTupe("password") : setTupe("text");
        (itype == "ri-eye-line login__eye") ? isetTupe("ri-eye-off-line login__eye") : isetTupe("ri-eye-line login__eye");
    }


    const [loginUser, setloginUser] = useState(dummyLoginUser);

    const handelLoginChenge = (e) => {
        setloginUser({
            ...loginUser, [e.target.name]: e.target.value
        });
    }
    const handelSigninChenge = (e) => {
        setsignUser({
            ...signUser, [e.target.name]: e.target.value
        });
    }

    return (
        <div className="adduser container">
            <div className="login">
                <form action="" className="login__form" autoComplete='off'>
                    <h1 className="login__title">Login</h1>

                    <div className="login__content">
                        <div className="login__box">
                            <i className="ri-mail-line login__icon" ></i>

                            <div className="login__box-input">
                                <input type="email" name='email' onChange={handelLoginChenge} required className="login__input" placeholder=" " />
                                <label for="" className="login__label">Email</label>
                            </div>
                        </div>

                        <div className="login__box">
                            <i className="ri-lock-2-line login__icon"></i>

                            <div className="login__box-input">
                                <input type={type} name='password' onChange={handelLoginChenge} required className="login__input passPad" id="login-pass" placeholder=" " />
                                <label for="" className="login__label">Password</label>
                                <i onClick={passhandel} className={itype} id="login-eye"></i>
                            </div>
                        </div>
                    </div>
                    {
                        //  <p className='error'>your email and password doesnot match</p>
                    }
                    <button type="submit" className="login__button">Login</button>
                </form>
            </div>
        </div>

    )
}






