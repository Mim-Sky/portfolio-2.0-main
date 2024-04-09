import { useForm } from '@formspree/react';

function Form() {
  const [state, handleSubmit, reset] = useForm('mgegpyay');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <button type="submit" disabled={state.submitting}>Sign up</button>
    </form>
  )
}

export default Form;