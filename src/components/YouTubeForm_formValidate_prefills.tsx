import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { render } from "@testing-library/react";

let renderCount = 0;

type FormValues = {
  username: String;
  email: String;
  channel: string;
};


export const YouTubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues:{
      username:"Khairul",
      email:"kb@hh.com",
      channel:"muct",
    }
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  renderCount++;
  //const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };
  return (
    <div>
      <h1> Youtube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className ="form-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p className="error"> {errors.username?.message}</p>
        </div>
        
        <div className ="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
            validate:{
              notAdmin:  (fieldValue)=>{
                return (fieldValue !== "admin@example.com" || "Enter a different email addess");
              },
              notBlackListed: (fieldValue) =>{
                return (!fieldValue.endsWith("baddomain.com") || "This domain is not supported");
              }

            }
          })}
        />
        <p className="error"> {errors.email?.message}</p>
        </div>

        <div className ="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required:{ 
              value: true,
              message: "Channel is required"
            } 
          })}
        />
        <p className="error"> {errors.channel?.message}</p> 
        </div>
        <button> Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
