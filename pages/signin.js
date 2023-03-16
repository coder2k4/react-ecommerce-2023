import styles from "../styles/signin.module.scss"
import Header from "../components/header";
import Footer from "../components/footer";
import {BiLeftArrowAlt} from "react-icons/bi";
import Link from "next/link";
import {useState} from "react";
import {Form, Formik} from "formik";
import LoginInput from "../components/inputs/logininput";
import * as Yup from "yup"
import CircledIconBtn from "../components/buttons/CircledIconBtn";
import {getProviders, signIn} from "next-auth/react";


const initialValues = {
    login_email: "",
    login_password: "",
    name: "",
    email: "",
    password: "",
    conf_password: "",
    success: "",
    error: "",
    login_error: "",
};


export default function Signin({providers}) {

    const [user, setUser] = useState(initialValues)

    const {
        login_email,
        login_password,
        name,
        email,
        password,
        conf_password,
        success,
        error,
        login_error,
    } = user;

    const changeHandle = (e) => {
        const {name, value} = e.target
        // Устанавливаем значение из инпута email:value
        setUser({...user, [name]: value})
    }

    // Валидация полей формы SIGN UP
    const loginValidation = Yup.object({
        login_email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
        login_password: Yup.string().required("Please enter a password"),
    })


    const registerValidation = Yup.object({
        name: Yup.string()
            .required("What's your name ?")
            .min(2, "First name must be between 2 and 16 characters.")
            .max(16, "First name must be between 2 and 16 characters.")
            .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
        email: Yup.string()
            .required(
                "You'll need this when you log in and if you ever need to reset your password."
            )
            .email("Enter a valid email address."),
        password: Yup.string()
            .required(
                "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
            )
            .min(6, "Password must be atleast 6 characters.")
            .max(36, "Password can't be more than 36 characters"),
        conf_password: Yup.string()
            .required("Confirm your password.")
            .oneOf([Yup.ref("password")], "Passwords must match."),
    });


    return (
        <>
            <Header country={"Russia"}/>
            <div className={styles.login}>

                <div className={styles.login__container}>
                    <div className={styles.login__header}>
                        <div className={styles.back__svg}>
                            <BiLeftArrowAlt/>
                        </div>
                        <span>
                          {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We'd be happy to join us ! <Link href="/">Go Store</Link>
                        </span>
                    </div>

                    <div className={styles.login__form}>
                        <h1>Sign up</h1>
                        <p>
                            Get access to one of the best Eshopping services in the world.
                        </p>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                login_email,
                                login_password,
                            }}
                            validationSchema={loginValidation}
                            // onSubmit={""}
                        >
                            {
                                (form) => (
                                    <Form>
                                        <LoginInput
                                            icon="email"
                                            name="login_email"
                                            type="email"
                                            placeholder="E-MAIL"
                                            onChange={changeHandle}
                                            // value={user.login_email}
                                        />
                                        <LoginInput
                                            icon="password"
                                            type="password"
                                            name="login_password"
                                            placeholder="PASSWORD"
                                            onChange={changeHandle}
                                            // value={user.login_password}
                                        />

                                        <CircledIconBtn type="submit" text="Sign in"/>
                                        {login_error && (
                                            <span className={styles.error}>{login_error}</span>
                                        )}
                                        <div className={styles.forgot}>
                                            <Link href="/auth/forgot">Forgot password ?</Link>
                                        </div>


                                    </Form>
                                )
                            }
                        </Formik>


                        <div className={styles.login__socials}>
                            <span className={styles.or}>Or continue with</span>
                            <div className={styles.login__socials_wrap}>
                                {Object.values(providers).map((provider) => {
                                    if (provider.name === "Credentials") {
                                        return;
                                    }
                                    return (
                                        <div key={provider.name}>
                                            <button
                                                className={styles.social__btn}
                                                onClick={() => signIn(provider.id)}
                                            >
                                                <img src={`../../icons/${provider.name}.png`} alt=""/>
                                                Sign in with {provider.name}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                    </div>
                </div>

                <div className={styles.login__container}>
                    <div className={styles.login__form}>
                        <h1>Sign up</h1>
                        <p>
                            Get access to one of the best Eshopping services in the world.
                        </p>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                name,
                                email,
                                password,
                                conf_password,
                            }}
                            validationSchema={registerValidation}
                            // onSubmit={() => {
                            //     signUpHandler();
                            // }}
                        >
                            {(form) => (
                                <Form>
                                    <LoginInput
                                        type="text"
                                        name="name"
                                        icon="user"
                                        placeholder="Full Name"
                                        onChange={changeHandle}
                                    />
                                    <LoginInput
                                        type="text"
                                        name="email"
                                        icon="email"
                                        placeholder="Email Address"
                                        onChange={changeHandle}
                                    />
                                    <LoginInput
                                        type="password"
                                        name="password"
                                        icon="password"
                                        placeholder="Password"
                                        onChange={changeHandle}
                                    />
                                    <LoginInput
                                        type="password"
                                        name="conf_password"
                                        icon="password"
                                        placeholder="Re-Type Password"
                                        onChange={changeHandle}
                                    />
                                    <CircledIconBtn type="submit" text="Sign up"/>
                                </Form>
                            )}
                        </Formik>
                        <div>
                            {success && <span className={styles.success}>{success}</span>}
                        </div>
                        <div>{error && <span className={styles.error}>{error}</span>}</div>
                    </div>
                </div>

            </div>
            <Footer country={"Russia"}/>
        </>
    )
}


export async function getServerSideProps(props) {
    const providers = await getProviders()
    return {
        props: {
            providers: providers ?? []
        }
    }
}


