import {useState} from 'react';
import {GoogleLogo} from 'phosphor-react';

import {GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import {auth} from "../../services/firebase";

import './styles.scss';

export function SignIn(){
    
    const [user, setUser] = useState<User>({} as User);

            function handleGoogleSignIn(){
                const provider = new GoogleAuthProvider();

                signInWithPopup(auth, provider)
                .then((result) => {
                    setUser(result.user);
                })

                .catch((error) => {
                    console.log(error)
                });
            }

    return (

        <div className="container">
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="foto do usuario" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
                    <h1>acesse sua conta</h1>
        <span>
            Ultilizando a autenticação social, por exemplo, autenticação com a Google você <br/>
            facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
        </span>

        <button type="button" className="btn"
        onClick={handleGoogleSignIn}>
            <GoogleLogo />
            entrar com google</button>
        </div>
        );
}