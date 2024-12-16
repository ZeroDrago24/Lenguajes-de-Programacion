import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import Footer from "../components/Footer";


import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
    altText: "Código Python",
    caption: "Python: Sencillo y poderoso",
  },
  {
    src: "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg",
    altText: "Desarrollo web",
    caption: "JavaScript: El lenguaje de la web",
  },
  {
    src: "https://niixer.com/wp-content/uploads/2023/02/image-19.png",
    altText: "C++",
    caption: "C++: Rendimiento y control",
  },
];

function Home() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Lenguajes de Programación</h1>

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
          title="¿Qué son los lenguajes de programación?"
          text="Un lenguaje de programación es una herramienta diseñada para expresar algoritmos y estructuras de datos de manera que puedan ser comprendidos y ejecutados por una computadora. A diferencia del lenguaje natural, que puede ser ambiguo, los lenguajes de programación son precisos y estructurados, garantizando claridad en las instrucciones."
          imgSrc="https://b2265571.smushcdn.com/2265571/wp-content/uploads/2019/09/lenguajes-de-programacion-1.jpg?lossy=2&strip=1&webp=1"
          altText="Imagen Qué son los lenguajes"
        />

        <SectionCard
          title="¿Para qué sirven los lenguajes de programación?"
          text="Los lenguajes de programación tienen una amplia variedad de aplicaciones, que incluyen:"
          imgSrc="https://areaf5.es/wp-content/uploads/2023/06/Lenguajes-scaled.jpg"
          altText="Imagen Para qué sirven"
          details={[{
            title: "Aplicaciones",
            description: "Automatización de tareas, desarrollo de software, desarrollo web, ciencia de datos y análisis, control de hardware, inteligencia artificial y seguridad informática."
          }]}
        />

        <SectionCard
          title="Tipos de lenguajes de programación"
          text="Existen diferentes clases de lenguajes de programación, como los funcionales o procedimentales, los imperativos, los lógicos, los híbridos, los orientados a objetos."
          imgSrc="https://edteam-media.s3.amazonaws.com/blogs/original/4278f0b3-b02e-4349-8d3c-6b924e3c2865.jpg"
          altText="Imagen Tipos de lenguajes"
          details={[{
            description: "Los primeros crean programas mediante funciones y recibe como entrada el resultado de otras funciones. Los segundos crean programas mediante una secuencia de comandos agrupados en bloques; las órdenes son condicionales, pues le permiten al programa volver a un bloque de comandos si se cumple cierta condición.Fueron los imperativos los primeros lenguajes de programación que se difundieron, todavía hoy muchos lenguajes usan este principio. Otra clasificación de los lenguajes de programación distingue entre lenguajes interpretados y lenguajes compilados."
        
          }]}
        />

        <SectionCard
          title="Ejemplos de lenguajes de programación y sus aplicaciones"
          text="Algunos de los lenguajes de programación más conocidos son:"
          imgSrc="https://ecdisis.com/wp-content/uploads/2021/01/02-Lenguaje-de-programacio%CC%81n-1024x591.jpeg"
          altText="Imagen Ejemplos de lenguajes"
          details={[{
            title: "BASIC",
            description: "Sucesor más conocido es Visual Basic .NET, introducido en 1964."
          }, {
            title: "COBOL",
            description: "Diseñado en 1959, orientado a la informática de gestión empresarial."
          }, {
            title: "FORTRAN",
            description: "Lenguaje de propósito general e imperativo para aplicaciones científicas y de ingeniería."
          }, {
            title: "Java",
            description: "Diseñado para ser universal y funcional en múltiples plataformas."
          }]}
        />

        <SectionCard
          title="Usos de los lenguajes de programación en diferentes sectores"
          text="Los lenguajes de programación tienen aplicaciones en sectores tan diversos como la educación, el entretenimiento, los negocios, la ciencia, la salud y la seguridad informática."
          imgSrc="https://www.aicad.es/asset/img/3/lenguaje-de-programacion-en-informatica.svg"
          altText="Imagen Usos en sectores"
        />
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
