import { useForm } from '@formspree/react';

function Form() {
  const [state, handleSubmit, reset] = useForm('mgegpyay');
  if (state.succeeded) {
    return <div>Message sent!</div>;
  }
  return (
    <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
      <input className="p-2 bg-gray-100 rounded-sm " type="text" name="name" id="name" placeholder="Your name" required="true"/>
      <input className="p-2 bg-gray-100 rounded-sm" id="email" type="email" name="email" placeholder="Your email" required="true" />
      <textarea className="bg-gray-100 rounded-sm" rows="3" name="message" id="message" placeholder="Write me something!" required="true"></textarea>
      <button className='p-2 rounded text-white bg-slate-600 hover:bg-slate-500 duration-200 ease-in-out' type="submit" disabled={state.submitting}>Send message</button>
    </form>
  )
}

export default Form;