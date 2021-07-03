import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Cookie from 'js-cookie';
import './EditProfileScreen.scss';

export default function EditProfileScreen() {
    const history = useHistory()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [notification, setNotification] = useState(false);

    const [theme, setTheme] = useState("");

    const handleData = () => {
        Cookie.set("userData", {
            "name": name,
            "email": email,
            "birthdate": birthdate,
            "phone": phone,
            "gender": gender,
            "notification": notification
        })

        history.push('/');
    }

    const handleTheme = e => {
        if (e === "custom-theme") {
            Cookie.set("custom");
        } else {
            Cookie.remove("custom");
        }

        window.location.reload();
    }

    useEffect(() => {
        const data = Cookie.getJSON('userData');
        if (data) {
            setName(data.name);
            setEmail(data.email);
            setBirthdate(data.birthdate);
            setPhone(data.phone);
            setGender(data.gender);
            setNotification(data.notification);
        }

        if (Cookie.get('custom')) {
            setTheme("custom");
        } else {
            setTheme("");
        }

        return () => {

        }
    }, [])

    return (
        <div className={`signUp-container ${theme}`}>
            {Cookie.getJSON('userData') ?
                <section className="user-info">
                    <ul>
                        <li>
                            <h2>Informações do usuário</h2>
                        </li>
                        <li>
                            <h5>Nome</h5>
                            <h3>{Cookie.getJSON('userData').name}</h3>
                        </li>
                        <li>
                            <h5>Email</h5>
                            <h3>{Cookie.getJSON('userData').email}</h3>
                        </li>
                        <li>
                            <h5>Data de nascimento</h5>
                            <h3>{Cookie.getJSON('userData').birthdate}</h3>
                        </li>
                        <li>
                            <h5>Fone</h5>
                            <h3>{Cookie.getJSON('userData').phone}</h3>
                        </li>
                        <li>
                            <h5>Gênero</h5>
                            <h3>{Cookie.getJSON('userData').gender === 'male' ? 'Masculino' : Cookie.getJSON('userData').gender === 'female' ? 'Feminino' : 'Outro'}</h3>
                        </li>

                    </ul>
                </section> : <></>
            }
            <form onSubmit={handleData}>
                <ul className="signUp-form">
                    <li>
                        <h2>Editar perfil</h2>
                    </li>

                    <li className="inline-label" id="theme-selector">
                        <p>Tema:</p>
                        <input type="radio" id="normal-theme" name="theme" value="normal-theme"
                               onChange={(e) => handleTheme(e.target.value)} checked={theme !== 'custom'}/>
                        <label htmlFor="normal-theme">Normal</label><br/>
                        <input type="radio" id="custom-theme" name="theme" value="custom-theme"
                               onChange={(e) => handleTheme(e.target.value)} checked={theme === 'custom'}/>
                        <label htmlFor="custom-theme">Custom</label><br/>
                    </li>
                    <li>
                        <label htmlFor="name">
                            Nome
                        </label>
                        <input type="text" name="name" id="name" placeholder={name}
                               onChange={(e) => setName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" placeholder={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="birthdate">
                            Data de nascimento
                        </label>
                        <input type="date" name="birthdate" id="birthdate"
                               onChange={(e) => setBirthdate(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="phone">
                            Telefone
                        </label>
                        <input type="tel" name="phone" id="phone" placeholder={phone}
                               onChange={(e) => setPhone(e.target.value)}/>
                    </li>
                    <li className="inline-label">
                        <p>Gênero:</p>
                        <input type="radio" id="male" name="gender" value="male"
                               onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor="male">Masculino</label><br/>
                        <input type="radio" id="female" name="gender" value="female"
                               onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor="female">Feminino</label><br/>
                        <input type="radio" id="other" name="gender" value="other"
                               onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor="other">Outro</label>
                    </li>
                    <li className="inline-label">
                        <input type="checkbox" id="notify" name="notify" value="notify"
                               onChange={(e) => setNotification(e.target.value)}/>
                        <label htmlFor="notify">Desejo receber notificações de novas promoções</label>
                    </li>
                    <li>
                        <button type="submit">Salvar</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}