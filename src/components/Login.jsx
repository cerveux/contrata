import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import {FcGoogle} from "react-icons/fc"
import Modal from "./Modal"
import GoogleLogin from "./GoogleLogin";
import axios from "axios";

const loginSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Contraseña muy corta!")
    .max(50, "Demasiado larga!")
    .required("Ingresa tu contraseña"),
  email: yup.string().email("Mail no válido").required("Ingresa tu email"),
  gmail: yup.string().email("Gmail no válido").matches(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,"Debes ingresar un gmail válido")
});
function Login({isOpen, closeModal }) {

  const googleLoginHandler = async (credentials)=>{
    // No gestionar esto asi. Hacerlo con redux toolkit o al menos un custom hook de servicios
    // O un archivo donde reunan todas las llamadas a la api en constantes para usarlas todos.
    try{
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google`, credentials);
    console.log(data);
    // En data recibiran el token y el user para agregarlo a redux y a la local storage.
    } catch(error) {
      console.log("error", error.message);
      // No se que quieren hacer en caso de error, en front.
    }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className=" bg-[#28315C] rounded-xl  flex ">
    

    <div className=" mb-4 py-16 text-center flex-col justify-center items-center m-auto ">
    <header className="">
          <h2 className="text-5xl font-bold text-[#ffffff] text-left ml-14 mb-7 font-khula ">Iniciar Sesión</h2>
          <div className="inline-grid grid-cols-3 gap-9 mr-20
           ">
          <h3 className="text-[#ffffff]  text-2xl  ml-14 mb-7 mr-1 font-khula ">Registro</h3>
          <h3 className="text-[#ffffff]  text-2xl   mb-7 font-khula underline underline-offset-8 decoration-btnColor decoration-4"> Inicia sesión</h3>
          </div>
          
    </header>
    <div className="flex justify-center">
    <GoogleLogin clientId = {import.meta.env.VITE_GOOGLE_CLIENT_ID} cbresponse={googleLoginHandler} />
    </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        
      >
        <Form>
        <div>
               {/* <FcGoogle className=" w-8 h-8  absolute mt-2  text-left 2xl:ml-96 md:ml-52 " />
              <Field
                name="gmail"
                id="gmail"
                type="text"
                placeholder="Ingresa con google"
                className=" px-3 py-3 focus: outline-none rounded-xl pl-20 text-left"
              /> */}
              <ErrorMessage name="gmail" component="p" className="font-bold  text-[#ffffff]" />
                <span className="   block text-[#ffffff] mt-5 ">  O ingresá con tu correo electrónico </span>
            
              <label className="  font-bold block text-[#ffffff] mt-5 mr-56" htmlFor="email font-khula">Email</label>
              <Field
                name="email"
                id="email"
                type="text"
                placeholder="Ingresa tu mail"
                className=" px-3 py-2 focus: outline-none rounded-xl pl-24 text-left"
              />
              <ErrorMessage name="email" component="p" className="font-bold  text-[#ffffff]" />
              <label  className="  font-bold block text-[#ffffff] mt-5 mr-48  " htmlFor="password font-khula">Contraseña</label>
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Ingresa una contraseña"
                className=" px-3 py-2 pl-24 focus: outline-none rounded-xl placeholder:-translate-x-6 "
              />
              <ErrorMessage name="password" component="p"  className="font-bold  text-[#ffffff]"/>
              <br/>
              <span className=" block text-[#ffffff]  ml-28 mb-5">¿Olvidaste tu contraseña?</span>
              </div>
              <button className="bg-[#ffffff] w-48 h-12 mr-5 rounded-full text-xl mb-4  font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow  ">Cancelar</button>
            <button type="submit" onClick={closeModal} className="bg-btnColor w-48 h-12 rounded-full text-xl mb-4 text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow " >Ingresar</button>
        </Form>
      </Formik>
    </div>
    </div>


    </Modal>
  


    
  );
}

export default Login;
