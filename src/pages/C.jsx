import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://disenowebakus.net/imagenes/articulos/lenguaje-de-programacion-c.jpg",
    
  },
  {
    src: "https://saberpunto.com/wp-content/uploads/estructura-basica-en-c-fundamentos-de-programacion.jpg",
    
  },
  {
    src: "https://i.ytimg.com/vi/P4EpkuLg9Hc/maxresdefault.jpg",
    
  },
];

function C() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>C</h1>

            <Carousel className="mt-4">
              {items.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={item.src}
                    alt={item.altText}
                    className="d-block w-100"
                  />
                  <Carousel.Caption>
                    <h3>{item.caption}</h3>
                    <p>{item.altText}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        

        <SectionCard
          title="¿Qué es C"
          text="El lenguaje C es un lenguaje de nivel medio bajo, así que no requiere de muchos recursos pero ofrece una buena respuesta y una ejecución rápida de programas. Además, el lenguaje C se caracteriza por la capacidad de manipular direcciones arbitrarias, por eso es preferible escribir el código de un microcontrolador en C."
          imgSrc="https://www.softzone.es/app/uploads-softzone.es/2022/04/Programacion-C-Cplusplus-csharp-1200x675.jpg"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="El lenguaje C fue desarrollado por Dennis Ritchie de Bell Labs entre 1972 y 1973 para construir utilidades que se ejecutaban en el sistema operativo UNIX. Las primeras versiones de UNIX se escribieron en el lenguaje ensamblador o assembler language. Ese lenguaje de programación de bajo nivel se usaba cuando aún no había lenguajes de alto nivel y los recursos eran limitados. Con el lenguaje C el código del núcleo de UNIX se movió del ensamblador al lenguaje de nivel superior reduciendo líneas de código."
          imgSrc="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2011/10/nerdpol-ken-den.jpg?fit=1279%2C1024&quality=50&strip=all&ssl=1"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales C"
          text={
            <>
            <li>La característica clave del lenguaje de programación C es su minimalismo: fue pensado como herramienta sencilla para escribir programas que se compilan con un compilador, es decir, el código original se convierte en un archivo que la máquina puede leer directamente, sin aplicaciones adicionales.</li>
            <li>El lenguaje C es un lenguaje de nivel medio bajo, así que no requiere de muchos recursos pero ofrece una buena respuesta y una ejecución rápida de programas. </li>
            <li>El lenguaje C se caracteriza por la capacidad de manipular direcciones arbitrarias.</li>
            
            </>
          }
          imgSrc="https://www.caracteristicasdel.com/wp-content/uploads/2022/09/Programacion-Lenguaje-C-1.jpg"
          
        />

        <SectionCard
          title="Estructura del programa"
          text={
            <>
            <p> La sintaxis del lenguaje de programacion C es la siguiente:</p>
            <li>La unidad más pequeña de programación en C se conoce como token C. Los tokens son palabras clave, identificadores, constantes, variables o cualquier otro símbolo que tenga algún significado en el lenguaje C.</li>
            <li>Un programa escrito en C es un juego de tokens. La sintaxis de C determina cómo combinar estos tokens para escribir el código.</li>
            <li>Cada bloque de código se encierra en corchetes. La base de cada bloque es la función principal main(). Un programa puede contener varias funciones, cada una con su juego de parámetros. Recuerda que para C, main y MAIN son dos cosas diferentes.</li>
            <li>Al final de cada operador se pone un punto y coma. Si se te olvidó ponerlo, el compilador te mostrará el mensaje de error “Semicolon is expected”.</li>
            <li>Los espacios se usan para separar partes de operador.</li>
            <li>Usa comentarios para hacer tu código más legible. Los comentarios consisten en texto sin formato que no se compila</li>
            </>
          }
          
          imgSrc="https://disenowebakus.net/imagenes/articulos/estructura-programa-c.jpg"
          
        />
      </Container>
    </div>
  );
}

export default C;
