import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub} from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import{Link}from 'react-router-dom';
import './login.css'
import Fooder from '../Fooder/Fooder';



const Login = () => {
    const {login, setLoading, providerLogin, gitProvider} = useContext(AuthContext);
    const [error, setError] = useState('');


    const googleProvider = new GoogleAuthProvider()
    const gitPr =new GithubAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleGitSign = () => {
        gitProvider(gitPr)
        .then(result => {
            const user = result.user;
             toast.success("Wow! Github logged Successfully.");
            console.log(user)
        })
        .catch(error => console.error(error))

     }

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

      

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <>
        <div className="full-page">
        <div className="container con">
         <Form  className='col-xl-3 col-md-3 from' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text'>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text'>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button><br />
            <Link to="/register">Create a New Account</Link>

            <ButtonGroup vertical className='d-flex mt-3'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-dark"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark" onClick={handleGitSign}> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
       </div>
        </div>
        <Fooder></Fooder>
        </>
      
    );
};

export default Login;