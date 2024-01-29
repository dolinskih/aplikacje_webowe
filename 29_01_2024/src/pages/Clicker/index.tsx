import { useState } from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";

export default function Clicker() {
  const [clicks, setClicks] = useState(0)

  function increaseClicks()
  {
    setClicks(clicks + 1)
  }

  return(
    <>
      <Container children={
        <>
          <Heading level={1} content="Poklikaj mnie"/>
          <Paragraph content={`Kliknięto ${clicks} raz(y)`}/>
          <Button text="Kliknij mnie" onClick={increaseClicks}/>
        </>
      }/>
    </>
  );
}