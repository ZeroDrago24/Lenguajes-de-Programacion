import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://i.blogs.es/1d8a5b/python1/1366_2000.jpg",
    
  },
  {
    src: "https://db0dce98.rocketcdn.me/es/files/2024/06/Python-Variables-1024x585.jpg",
    
  },
  {
    src: "https://cdn-images-1.medium.com/max/1004/1*jsgLaIkhgF7SzQS1FWIPug.jpeg",
    
  },
];

function Python() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Python</h1>

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
          title="¿Qué es Python"
          text="Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes. El software Python se puede descargar gratis, se integra bien a todos los tipos de sistemas y aumenta la velocidad del desarrollo."
          imgSrc="https://elpythonista.com/wp-content/uploads/2020/10/Que_Es_Python-2.jpg"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="Guido Van Rossum, un programador de computación de los Países Bajos, creó Python. Python comenzó en 1989 en el Centrum Wiskunde & Informatica (CWI), en principio como un proyecto de afición para mantenerse ocupado durante las vacaciones de Navidad. El nombre del lenguaje se inspiró en el programa de televisión de la BBC “Monty Python’s Flying Circus” debido a que Guido Van Rossum era un gran aficionado del programa."
          imgSrc="https://i.ytimg.com/vi/uFWcxMoPbhQ/maxresdefault.jpg"
          altText="Imagen"
      />

        <SectionCard
          title="Características Principales Python"
          text={
            <>
            <li>Python es un lenguaje interpretado, lo que significa que ejecuta directamente el código línea por línea. Si existen errores en el código del programa, su ejecución se detiene. Así, los programadores pueden encontrar errores en el código con rapidez</li>
            <li>Python utiliza palabras similares a las del inglés. A diferencia de otros lenguajes de programación, Python no utiliza llaves. En su lugar, utiliza sangría. </li>
            <li>Los programadores no tienen que anunciar tipos de variables cuando escriben código porque Python los determina en el tiempo de ejecución. Debido a esto, es posible escribir programas de Python con mayor rapidez.</li>
            <li>Python es más cercano a los idiomas humanos que otros lenguajes de programación. Por lo tanto, los programadores no deben preocuparse sobre sus funcionalidades subyacentes, como la arquitectura y la administración de la memoria.</li>
            <li>Python considera todo como un objeto, pero también admite otros tipos de programación, como la programación estructurada y la funcional.</li>
            </>
          }
          imgSrc="https://www.ku.edu.bh/wp-content/uploads/2023/06/Python-e1687965207655.gif"
          
        />

        <SectionCard
          title="Estructura del programa"
          text={
            <>
            <p> La estructura básica de un programa en Python está formada por:</p>
            <li>Los programas en Python se construyen a partir de bloques de código, que son secciones de texto que se ejecutan como una unidad. Los bloques pueden ser: Módulos, Cuerpos de función, Definiciones de clase, Cada comando escrito de forma interactiva. </li>
            <li>Las instrucciones son líneas de código que le indican al ordenador que realice una tarea específica. Se recomienda que cada línea contenga una única instrucción, aunque puede haber varias instrucciones en una línea, separadas por un punto y coma (;).</li>
            <li>Las estructuras de control permiten dirigir el flujo de ejecución de un programa. Son esenciales para tomar decisiones en el código, repetir operaciones y controlar el proceso de ejecución en función de distintas condiciones. </li>
            <li>Python es conocido por su sintaxis clara y legible, lo que facilita la escritura y el mantenimiento del código.</li>
            
            </>
          }
          
          imgSrc="https://miro.medium.com/v2/resize:fit:1400/0*oV6NUnvgoOT-0tKF"
          
        />
      </Container>
    </div>
  );
}

export default Python;
