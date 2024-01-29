import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import './contact.scss';
import Paragraph from "../../components/Paragraph";
import { createRoot } from "react-dom/client";

export default function Contact() {
  function formButtonClick()
  {
    console.log(`
      Imię: ${name},
      E-mail: ${email},
      Temat: ${topic}.
      Treść wiadomości: ${message}
    `)

    const formParent = document.getElementById('form')?.parentElement
    const root = createRoot(formParent!)
    root.render(<Paragraph content="Dziękujemy za wysłanie wiadomości"/>)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  return(
    <>
      <Container children={
        <>
          <Heading level={1} content="Skontaktuj się z nami"/>
          <form id='form'>
            <input type='text' name='name' placeholder="Imię" value={name} onChange={e => setName(e.target.value)}/>
            <input type='email' name='email' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type='text' name='topic' placeholder="Temat" value={topic} onChange={e => setTopic(e.target.value)}/>
            <textarea name="message" placeholder="Treść wiadomości" rows={15} cols={50} value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <Button text="Wyślij wiadomość" onClick={formButtonClick}/>
          </form>
        </>
      }/>
    </>
  );
}