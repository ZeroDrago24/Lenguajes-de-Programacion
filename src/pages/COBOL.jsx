import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://www.esic.edu/sites/default/files/2024-02/lenguaje%20cobol.jpeg",
    
  },
  {
    src: "https://i.blogs.es/36d800/spf-cobol1/650_1200.jpg",
    
  },
  {
    src: "https://blog.facialix.com/wp-content/uploads/2024/08/cursos-gratuitos-de-COBOL.jpg",
    
  },
];

function COBOL() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>COBOL</h1>

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
          title="¿Qué es COBOL?"
          text="El lenguaje común orientado a los negocios o Common business-oriented language (COBOL) es un lenguaje de programación compilado de alto nivel, similar al inglés y  desarrollado específicamente para las necesidades de proceso de datos empresariales. "
          imgSrc="https://www.freelancermap.com/blog/wp-content/uploads/2020/05/programador-cobol-perfil-profesional-funciones-formacion-habilidades-salario.jpg"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="El 8 de abril de 1959, Mary K. Hawes, una programadora que trabajaba para Burroughs Corporation, organizó una reunión de representantes de academia, usuarios de ordenadores y fabricantes en la Universidad de Pensilvania para organizar una reunión formal sobre lenguages comunes de negocios. Algunos de los representantes incluyeron a Grace Hopper (inventora del lenguaje de proceso basado en el inglés FLOW-MATIC), Jean Sammet y Saul Gorn"
          imgSrc="https://facialix.com/wp-content/uploads/2023/04/Is-Learning-COBOL-Easy-Just-Because-it-is-Written-in-English.jpg"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales COBOL"
          text={
            <>
            <li>COBOL fue diseñado para escribir programas autodocumentados, mediante separación en divisiones para la declaración de variables de los procedimientos y una división para llevar un registro de quién solicitó el programa y quiénes lo escribieron. A pesar de sus objetivos la estructura que tenía en su inicio era insuficiente para la estructura modular que requieren los sistemas de los negocios corporativos.</li>
            <li>Sus tipos de datos estaban pensados para manejar archivos ordenados, por lo que cuenta con estructuras para registros y variantes y la declaración de claves para los archivos indexados</li>
            <li>Tipos de datos atómicos que se definen mediante la palabra clave PICTURE se pueden definir campos estructurados. Lo que permite definir números con los que se evita errores de redondeo en los cálculos que se producen al convertir los números a binario y que son inaceptables en temas comerciales, COBOL puede emplear y emplea por defecto números en base diez.</li>
            <li>Para facilitar la creación de programas en COBOL, la sintaxis del mismo fue creada de forma que fuese parecida al idioma inglés, evitando el uso de símbolos que se impusieron en lenguajes de programación posteriores.</li>
            
            </>
          }
          imgSrc="https://unirfp.unir.net/wp-content/uploads/sites/23/2020/10/cobol-cabecera.jpg"
          
        />

        <SectionCard
          title="Estructura del programa"
          text={
            <>
            <p>La estructura de un Programa en Cobol se compone de 4 Divisiones.</p>
            <li>IDENTIFICATION DIVISION: Es el identificador del programa, lleva los datos de información , nombre de autor fecha de compilación etc.</li>
            <li>ENVIRONMENT DIVISION: Indica los recursos de hardware donde se ejecuta el programa, así como la asignación de salida de información por medios de comunicación.</li>
            <li>DATA DIVISION: En esta división se establecen las variables que serán utilizadas por el sistema y la declaración de archivos.</li>
            <li>PROCEDURE DIVISION: Como su nombre lo indica se ejecuta las instrucciones codificadas.</li>
            </>
          }
          
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/eb/COBOL.png"
          
        />
      </Container>
    </div>
  );
}

export default COBOL;
