import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Mail no valido")
    .required("Debes ingresar un mail"),
  password: yup
    .string()
    .min(6, "La contraseña es demasiado corta!")
    .required("Debes ingresar una contraseña"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir!"),
    termsAndConditions: yup
    .bool()
    .oneOf([true], 'Necesitas aceptar los términos y condiciones antes de poder registrarte!'),
});

function Register() {
  return (
    <div className=" bg-primary rounded-xl  md:m-auto md:w-1/3 xl:m-auto xl: w-1/4   " >
      <div className=" mb-4 py-16 text-center flex-col justify-center items-center pr-10  ">
        <header className="">
          <h2 className="text-5xl font-bold text-[#ffffff] text-left ml-14 mb-7 font-khula">Regístrate</h2>
          <div className="inline-grid grid-cols-2 gap-3 mr-20
           ">
          <h3 onClick="text-decoration-line: underline;"  className="text-[#ffffff]  text-xl  ml-14 mb-7 mr-1 font-khula underline underline-offset-8 decoration-btnColor decoration-4">Registro</h3>
          <h3 className="text-[#ffffff]  text-xl ml-10  mb-5 font-khula">Iniciar sesión</h3>
          </div>
        </header>
        
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            termsAndConditions: false,
          }}
          validationSchema={userSchema}
        >
          <Form>
            <div>
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
                className=" px-3 py-2 pl-24 focus: outline-none rounded-xl placeholder:-translate-x-6"
              />
              <ErrorMessage name="password" component="p"  className="font-bold  text-[#ffffff]"/>
              <label  className=" font-bold block text-[#ffffff] mt-5 mr-24 m " htmlFor="password">Confirmá tu contraseña</label>
              <Field
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                placeholder="Confirma tu contraseña"
                className=" px-3 py-2 focus: outline-none rounded-xl pl-24 text-left placeholder:-translate-x-6  "
              />
              <ErrorMessage name="passwordConfirmation" component="p"  className="font-bold  text-[#ffffff]" />
              <div>
              <Field 
              name="termsAndConditions"
              default="false"
               type="checkbox" className="mt-5 mb-5" />  
               <span  className=" font-bold  ml-4 text-[#ffffff] mt-5" >Acepto los términos y condiciones</span>
               <ErrorMessage name="termsAndConditions" component="p"  className="font-bold  text-[#ffffff]"/>
               </div>
            </div>
            <button className="bg-[#ffffff] w-48 h-12 mr-5 rounded-full text-xl mb-4  font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow  ">Cancelar</button>
            <button type="submit"  className="bg-btnColor w-48 h-12 rounded-full text-xl mb-4 text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow " >Registrarse</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
