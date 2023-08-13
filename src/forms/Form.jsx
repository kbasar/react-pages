import "./Form.css";
import useForm from "./Hooks/useForm";

function Form() {

    //Custom hook call
    const { handleChange, values, errors } = useForm();

    return (
        <div className="formpage">
            <form>
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
                <input type="password" name="password" placeholder="password" onChange={handleChange} />
                <input type="text" name="username" placeholder="username" onChange={handleChange} />
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
    );

}

//Final submit function
const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
   }

   //Custom hook call
const { handleChange, values, errors, handleSubmit } = useForm(formLogin);