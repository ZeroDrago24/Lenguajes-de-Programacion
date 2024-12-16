import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";

const items = [
  {
    src: "https://edgarnicolas81.wordpress.com/wp-content/uploads/2014/09/lenguajes-de-programacic3b3n.jpg?w=640",
  
  },
  {
    src: "https://www.monografias.com/docs113/conceptos-basicos-programacion-ppt/Diapositiva4.png",
  },
  {
    src: "https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/334275637_146084031691181_3735011985167172197_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=52dG1i815hEQ7kNvgH4NjIH&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=ASZWDf7JKqlEvricsCOQllz&oh=00_AYB3DkPXjkAY_9I1sMUByaRRQY9YBEwIaForuWdIgWMuSw&oe=6760AA69",
    
  },
];

function Tipos() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Tipos y Carateristicas</h1>

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
                  title="Tipos de lenguajes de programación"
                  text="Los lenguajes de programación se clasifican según su nivel de abstracción, paradigma o propósito específico."
                  imgSrc="https://conogasi.org/wp-content/uploads/2018/01/alto-nivel-bajo-nivel-programaci%C3%B3n-c%C3%B3digo-maquina.png"
                  altText="Imagen Tipos de lenguajes"
                  details={[{
                    title: "Lenguajes de bajo nivel",
                    description: "Diseñados para un hardware específico, no migran a otros sistemas pero maximizan el rendimiento en su plataforma original."
                  }, {
                    title: "Lenguajes de alto nivel",
                    description: "Más universales, independientes del hardware y disponibles para diversos sistemas. Pueden ser de propósito general o específico."
                  }, {
                    title: "Lenguajes de nivel medio",
                    description: "Proporcionan una mezcla entre operaciones de alto nivel y gestión local del hardware, aunque no siempre es aceptado como categoría formal."
                  }, {
                    title: "Lenguajes imperativos",
                    description: "Estructurados secuencialmente, programan mediante órdenes condicionales y bloques de comandos ejecutados de forma lineal."
                  }, {
                    title: "Lenguajes funcionales",
                    description: "Programan mediante funciones invocadas según la entrada recibida, donde cada función puede ser el resultado de otra."
                  }]}
                />

        
        <SectionCard
          title="Caracteristicas"
          text="las principales características que un lenguaje de programación son: "
          details={[{
            title: "Simplicidad",
            description: "el lenguaje debe ofrecer conceptos claros y simples que sean fáciles de entender, facilitando así, el aprendizaje y la aplicación. Sin embargo, la simplicidad puede ser un equilibrio difícil de alcanzar sin comprometer la capacidad general del lenguaje. "
          }, {
            title: "Capacidad",
            description: "además de ser fácil de usar, el lenguaje debe estar bien equipado con un conjunto sólido de características para realizar una amplia variedad de tareas. Si un lenguaje de programación ha sido diseñado para ser utilizado en un área específica, éste debe ofrecer los medios necesarios (operadores, estructuras y sintaxis) para lograr resultados óptimos.   "
          }, {
            title: "Abstracción",
            description: "es la capacidad del lenguaje para definir y utilizar estructuras u operaciones complejas ignorando ciertos detalles de bajo nivel. "
          },{  
          title: "Eficiencia",
            description: " los lenguajes de programación que pueden ser traducidos y ejecutados de manera eficiente, ayudan a evitar el consumo excesivo de memoria y tiempo. "
          },
          {
            title: "Compacidad:",
            description: "un lenguaje de programación con esta característica puede expresar las operaciones de forma concisa sin tener que escribir demasiados detalles. "
          },{
            title: "Principio de localidad",
            description: " también se conoce como localidad de referencia. Este fenómeno indica la preferencia de un programa informático al haber accedido continuamente a las mismas áreas de memoria en un corto periodo de tiempo.  Permite el uso de bucles y subrutinas. Un lenguaje de programación puede aprovechar el principio de localidad para optimizar el rendimiento general de una aplicación.  "
          },{
            title: "Estructuración",
            description: "el lenguaje permite a los programadores escribir su código de acuerdo con los conceptos de programación estructurada para evitar que se cometan errores. "
          }]}
          imgSrc="https://i.pinimg.com/736x/6f/77/1b/6f771bace550baaafb2d070d15a31e3d.jpg"
        >
        </SectionCard>
      </Container>
    </div>
  );
}

export default Tipos;