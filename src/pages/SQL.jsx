import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  


const items = [
  {
    src: "https://www.certus.edu.pe/blog/wp-content/uploads/2021/06/que-es-sql-todo-debes-saber-lenguaje-1200x720.jpg",
    
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM91T1S4z84bTfnQg-ExIMn9MW_bs43wkg5g&s",
    
  },
  {
    src: "https://dbconvert.com/blog/content/images/2024/05/sql-chatgpt44.jpg",
    
  },
];

function SQL() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>SQL</h1>

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
          title="¿Qué es SQL"
          text="El lenguaje de consulta estructurada (SQL) es un lenguaje de programación para almacenar y procesar información en una base de datos relacional. Una base de datos relacional almacena información en forma de tabla, con filas y columnas que representan diferentes atributos de datos y las diversas relaciones entre los valores de datos. Puede usar las instrucciones SQL para almacenar, actualizar, eliminar, buscar y recuperar información de la base de datos. También puede usar SQL para mantener y optimizar el rendimiento de la base de datos."
          imgSrc="https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="La historia del lenguaje de consulta estructurada (SQL) se remonta a la década de 1970, cuando IBM creó el software de base de datos System R. Para gestionar los datos de System R, se desarrolló el lenguaje SQL, que inicialmente se llamó SEQUEL, siglas de Structured English Query Language"
          imgSrc="https://gskygo.com/media/SQL.jpg"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales SQL"
          text={
            <>
            <li>Su sintaxis es fácil de interpretar y se parece al lenguaje natural, lo que facilita la interacción con la base de datos</li>
            <li>Se puede adaptar a cualquier necesidad, lo que permite visualizar datos y encontrar soluciones fácilmente</li>
            <li>Protege de fallos y asegura que toda la información sea correcta y esté completa</li>
            <li>Permite desplegar implementaciones del lenguaje SQL en diferentes sistemas, usando prácticamente el mismo código para todos ellos. </li>
            <li>Ofrece funciones de seguridad, como autenticación, control de acceso, registros de auditoría y cifrado.</li>
            <li>Maneja conjuntos de registros y no registros individuales, lo que ofrece una elevada productividad en la codificación</li>
            <li>Permite a los usuarios llevar a cabo las tareas de consulta o manipulación de los datos.</li>
            <li>Su uso prolongado ha permitido que exista una gran comunidad alrededor de este lenguaje, lo que ayuda a su aprendizaje y su implementación</li>
            </>
          }
          imgSrc="https://bairesdev.mo.cloudinary.net/blog/2023/10/What-is-SQL-Server.jpg?tx=w_1920,q_auto"
          
        />

        <SectionCard
          title="Estructura del programa"
          text={
            <>
            <p>La estructura de SQL (Lenguaje de Consulta Estructurado) está compuesta por comandos, cláusulas, operadores y funciones de agregado. Estos elementos se combinan para crear, actualizar y manipular bases de datos</p>
            <li>SELECT: Corresponde a la operación de proyección del álgebra relaciona</li>
            <li>FROM: Parte de la estructura básica de una consulta SQL </li>
            <li>WHERE: Opcional, parte de la estructura básica de una consulta SQL </li>
            <li>Los procedimientos almacenados, que son una colección de instrucciones SQL almacenadas en la base de datos</li>
            </>
          }
          
          imgSrc="https://i.ytimg.com/vi/moCgS2kfxnU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCO4t8SZ8oKKezkud9_-3zDnsQ23w"
          
        />
      </Container>
    </div>
  );
}

export default SQL;