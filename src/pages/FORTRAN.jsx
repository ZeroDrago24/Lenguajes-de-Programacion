import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://administraciondesistemas.com/wp-content/uploads/2023/10/fortran-primer-lenguaje-programacion-1024x596.jpg",
    
  },
  {
    src: "https://blog.facialix.com/wp-content/uploads/2023/12/curso-gratis-de-fortran.jpg",
    
  },
  {
    src: "https://wwwhatsnew.com/wp-content/uploads/2021/05/captura114.jpg",
    
  },
];

function FORTRAN() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>FORTRAN</h1>

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
          title="¿Qué es FORTRAN?"
          text="Fortran es un lenguaje de programación informática muy utilizado por los científicos. Su popularidad ha disminuido con los años, pero los siguen utilizando mucho los programadores científicos. También lo utilizan las empresas para aplicaciones como la predicción meteorológica, el trading financiero y las simulaciones de ingeniería."
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fortran_logo.svg/800px-Fortran_logo.svg.png"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="Creado por Konrad Zuse, Plankalkul fue el primer lenguaje de programación de alto nivel. Sin embargo, las ideas y proyectos del inventor únicamente estaban escritos en papel. El primer lenguaje de programación real fue Fortran, creado por John Backus."
          imgSrc="https://articulos.golsystems.mx/wp-content/uploads/2019/10/portada-F.jpg"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales FORTRAN"
          text={
            <>
            <li>Alto rendimiento: Fortran ha sido diseñado desde cero para realizar cálculos de ciencia e ingeniería computacionalmente exigentes. Los compiladores y bibliotecas disponibles están muy maduros y validados permitiendo escribir código que se ejecuta muy rápido.</li>
            <li>TTipado estático y fuerte: Fortran utiliza un tipado estático y fuerte, lo que permite al compilador detectar inmediatamente numerosos errores de programación. Esto también le permite generar código binario eficiente.</li>
            <li>Fácil de aprender y usar: Fortran es un lenguaje relativamente pequeño y sorprendentemente fácil de aprender y usar. La mayoría de expresiones matemáticas y aritméticas aplicadas sobre matrices grandes se expresan tan fácilmente como si se escribieran las ecuaciones en papel.</li>
            <li>Versátil:Fortran le permite escribir código en el estilo que mejor se adapte a su problema: imperativo, procedimental, matricial, orientado a objetos o funciona</li>
            <li>Paralelo nativo: Fortran es un lenguaje de programación nativamente paralelo con una sintaxis intuitiva de tipo matriz para comunicar datos entre procesadores. Puede ejecutar casi el mismo código en un solo procesador, en un sistema multinúcleo con memoria compartida, en un sistema HPC con memoria distribuida o en un sistema en la nube. Los conceptos de Coarrays, equipos, eventos, y subrutinas colectivas le permiten utilizar distintos modelos de programación paralela para elegir el que mejor se adapten a su problema.</li>
            </>
          }
          imgSrc="https://db0dce98.rocketcdn.me/es/files/2023/06/fortran-1.webp"
          
        />

        <SectionCard
          title="¿Para qué se utiliza Fortran?"
          text={
            <>
            <p>Fortran se utiliza principalmente en dominios que adoptaron la computación tempranamente: ciencia e ingeniería. Estos incluyen predicción numérica del clima y los océanos, dinámica de fluidos computacional, matemáticas aplicadas, estadísticas y finanzas. Fortran es el lenguaje dominante de la computación de alto rendimiento y se utiliza para evaluar las supercomputadoras más rápidas del mundo .</p> 
            </>
          }
          
          imgSrc="https://www.azulweb.net/wp-content/uploads/2021/05/fortranport.jpg"
          
        />
      </Container>
    </div>
  );
}

export default FORTRAN;

