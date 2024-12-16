import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Codigo_php.jpg/320px-Codigo_php.jpg",
    
  },
  {
    src: "https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-es-php-en-programacion-descubre-5-ventajas-de-usarlo.jpg",
    
  },
];

function PHP() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>PHP</h1>

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
          title="¿Qué es PHP"
          text="PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML."
          imgSrc="https://i.pinimg.com/736x/b0/36/bb/b036bb50c0b1859ae817670881758813.jpg"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="PHP tal y como se conoce hoy en día es en realidad el sucesor de un producto llamado PHP/FI. Creado en 1994 por Rasmus Lerdorf, la primera encarnación de PHP era un conjunto simple de ficheros binarios Common Gateway Interface (CGI) escritos en el lenguaje de programación C. Originalmente utilizado para rastrear visitas de su currículum online, llamó al conjunto de scripts Personal Home Page Tools, más frecuentemente referenciado como PHP Tools. Con el paso del tiempo se quiso más funcionalidad, y Rasmus reescribió PHP Tools, produciendo una implementación más grande y rica. Este nuevo modelo fue capaz de interaccionar con bases de datos, y mucho más, proporcionando un entorno de trabajo sobre cuyos usuarios podían desarrollar aplicaciones web dinámicas sencillas tales como libros de visitas. En junio de 1995, Rasmus » publicó el código fuente de PHP Tools, lo que permitió a los desarrolladores usarlo como considerasen apropiado. Esto también permitió -y animó- a los usuarios a proporcionar soluciones a los errores del código, y generalmente a mejorarlo."
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqd8mgbp9sIUmeBM2QkUmI0TVvXNVUMgjnPg&s"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales PHP"
          text={
            <>
            <li>Es de código abierto y gratuito</li>
            <li>Es multiplataforma y se puede ejecutar en la mayoría de los sistemas operativos y servidores </li>
            <li>Es fácil de aprender y tiene una sintaxis clara y concisa</li>
            <li>Es versátil e interconectado, ya que se puede integrar con múltiples tecnologías</li>
            <li>Es orientado a objetos, lo que permite un procesamiento de datos más rápido </li>
            <li>Permite la separación de códigos, es decir, manipular datos mientras que otros se encuentran estáticos </li>
            <li>Se puede incrustar directamente en un código HTML </li>
            <li>El código se ejecuta en el servidor web y no en el equipo del usuario</li>
            <li>Es compatible con la mayoría de las bases de datos, como MySQL, Oracle y PostgreSQL</li>
            <li>Tiene una gran comunidad de desarrolladores que contribuye a su desarrollo constante</li>
            
            </>
          }
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNjc5AgOGCX9LEin9SFks1ZEXhGzBnh7buw&s"
          
        />

        <SectionCard
          title="Estructura del programa"
          text={
            <>
            <p>La estructura de un script PHP se basa en sentencias, que pueden ser: Asignaciones, Llamadas de función, Ciclos, Sentencias condicionales, Sentencias vacías.</p>
            <li>Las sentencias suelen terminar con un punto y coma. También se pueden agrupar en conjuntos de sentencias, que se encapsulan entre corchetes. </li>
            <li>Estructuras condicionales, como if, if else y elseif. Se utilizan para tomar decisiones basadas en condiciones del código</li>
            <li>Estructuras repetitivas, como while y do-while.</li>
            </>
          }
          
          imgSrc="https://nestrategia.com/wp-content/uploads/2018/02/velocidad-web-dise%C3%B1o-web-en-madrid.png"
          
        />
      </Container>
    </div>
  );
}

export default PHP;