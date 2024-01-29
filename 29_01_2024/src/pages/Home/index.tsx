import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

export default function Home() {
  return (
    <>
      <Container children={
        <>
          <Heading level={1} content="Zadanie podsumowujące - podstawy React.js"/>
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl nisl, mollis ut dignissim non, finibus semper justo. Vivamus sed neque in eros convallis vehicula at eget arcu. Etiam consequat nunc ac magna posuere tempus a a felis. Nulla vehicula tortor at ex eleifend mollis. In gravida nisi auctor, sollicitudin lacus sit amet, feugiat libero. Proin nunc eros, feugiat nec nibh vitae, porttitor dignissim velit. Morbi eget enim fermentum, commodo ex vel, mollis velit. Phasellus rhoncus porttitor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum urna, a venenatis justo. Curabitur faucibus rutrum porttitor. Nullam vitae luctus mauris. Maecenas vestibulum, lacus et laoreet mattis, massa ipsum laoreet metus, eu commodo enim tortor vitae turpis. Suspendisse potenti. Praesent facilisis eget ex id rutrum. Nunc a neque sit amet justo semper consequat id sed sem. Pellentesque bibendum vestibulum lobortis. Proin ac ipsum ut augue cursus consequat vel a risus."/>
          <Heading level={2} content="Second paragraph"/>
          <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate maximus maximus. Nunc fermentum commodo odio, ac faucibus est rutrum et. Sed congue rhoncus ante. Sed fermentum nunc nec nulla commodo blandit. Praesent sagittis mauris tempus ex condimentum interdum. Praesent fringilla mi vitae nisi mattis, sit amet accumsan nisl bibendum. Pellentesque placerat elementum neque, id viverra leo volutpat quis. Vivamus suscipit condimentum lorem id blandit. Proin faucibus ipsum nisi, sit amet iaculis risus facilisis in. Cras vulputate tortor vitae felis tempus, ut eleifend felis luctus. Aliquam leo magna, consectetur non leo in, condimentum fermentum est. Mauris convallis urna sed accumsan maximus. Morbi venenatis viverra est, sit amet scelerisque sem tempor vitae. Ut scelerisque aliquam justo, quis eleifend lacus maximus et. Donec mollis dolor ut enim pharetra, vel auctor augue aliquet. Proin venenatis nisl velit, vitae ultrices felis scelerisque ac. Praesent ut fermentum lorem, et tristique metus. Phasellus sed aliquet risus. Etiam nec laoreet arcu. Nam vel nunc at libero ullamcorper pulvinar vitae scelerisque purus. Quisque egestas lectus nisl, non accumsan purus bibendum a. Etiam ac tortor in odio tincidunt lacinia ut hendrerit velit. Phasellus tincidunt molestie tristique. Proin eu iaculis libero. Fusce sed magna vehicula, fringilla velit vel, auctor sapien. Curabitur non sagittis sem. Morbi consectetur vel tellus quis semper. Aenean ante tellus, varius ac porttitor a, rhoncus interdum nibh. Aliquam mollis enim sapien, eu finibus est finibus sed. Proin viverra fermentum risus, viverra pharetra neque. Duis laoreet ac odio faucibus mollis. Donec et venenatis nibh, sit amet sollicitudin odio. Fusce."/>
        </>
      }/>
    </>
  )
}