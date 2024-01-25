import { useForm } from "react-hook-form"
import './index.css'

const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleSubmitForm = (data) => {
    console.log(data);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          autoComplete="off"
          type="text"
          id="name"
          placeholder="Full name *"
          className={`field ${errors.name ? "required-field" : "filled-field"}`}
          {...register('name', { required: "Required field" })}
        />
        <div className="errorMessage">
          <p>{errors.name?.message}</p>
        </div>

        <input
          autoComplete="off"
          type="email"
          id="email"
          placeholder="Email *"
          className={`field ${errors.email ? "required-field" : "filled-field"}`}
          {...register('email', { required: "Required field", minLength: 1 })}
        />
        <div className="errorMessage">
          <p>{errors.email?.message}</p>
        </div>

        <input
          autoComplete="off"
          type="tel"
          id="phoneNumber"
          placeholder="Phone number (DDD) *"
          maxLength='11'
          className={`field ${errors.phoneNumber ? "required-field" : "filled-field"}`}
          {...register('phoneNumber', {
            required: "Required field",
            minLength: {
              value: 11,
              message: 'Complete format (99) 9 9999-9999'
            }
          })}
        />
        <div className="errorMessage">
          <p>{errors.phoneNumber?.message}</p>
        </div>

        <textarea
          id="message"
          placeholder="Message *"
          className={`text-area ${errors.message ? "required-field" : "filled-field"}`}
          {...register('message', { required: "Required field" })}
        />
        <div className="errorMessage">
          <p>{errors.message?.message}</p>
        </div>

        <input className="submitButton" type="submit" name="submit" id="submit" value='Submit' />
      </form>
    </>

  )
}

export default Form
