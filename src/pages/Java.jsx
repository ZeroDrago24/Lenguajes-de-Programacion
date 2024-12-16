import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://i.ytimg.com/vi/uu7vYN9Xkjc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCd98PK-efanq2r0PTLA70OWYXcRg",
    
  },
  {
    src: "https://programacionfacil.org/blog/wp-content/uploads/2022/11/xclases-metodos-bloques-java.png.pagespeed.ic.NJyvyWili4.png",
    
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVIy4mrbFp4aGmq--pOnHpMhCvgxFlxfc0w&s",
    
  },
];

function Java() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Java</h1>

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
          title="¿Qué es Java"
          text="Java es un lenguaje de programación multiplataforma orientado a objetos que se ejecuta en miles de millones de dispositivos de todo el mundo. Sustenta aplicaciones, sistemas operativos de smartphones, software empresarial y muchos programas conocidos. A pesar de haberse inventado hace más de 20 años, Java es actualmente el lenguaje de programación más popular para los desarrolladores de aplicaciones."
          imgSrc="https://draftdesignweb.com/wp-content/uploads/2023/10/java-developer-draftdesignweb.com-ivan-vazquez-vidador.jpeg"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="El nacimiento de Java se remonta al año 1991, cuando James Gosling y su equipo comenzaron a trabajar en la creación de un lenguaje para la empresa Sun Microsystems. Al poco tiempo de iniciar este proyecto, el equipo cambió su enfoque para alcanzar una meta más ambiciosa: diseñar un lenguaje para la recientemente creada World Wide Web. Finalmente, en 1995, Java fue lanzado al público para ser utilizado tanto para aplicaciones online como para la programación."
          imgSrc="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/what-is-java-programming-language_media-06-2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=403&hei=403&qlt=100&fit=constrain"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales Java"
          text={
            <>
            <li>Una de las principales ventajas de Java es que, debido a su sintaxis y reglas, es uno de los lenguajes más simples de utilizar</li>
            <li>Java es un lenguaje de programación que no es exclusivo de una única plataforma. Esto significa que los desarrolladores pueden escribir el código una vez y correrlo en una gran diversidad de sistemas operativos, equipos y dispositivos. </li>
            <li>En Java, todo es considerado como un objeto y este es uno de los principios de su enfoque basado en el polimorfismo. Esto implica que cada elemento dentro del código tiene un comportamiento y estado, lo cual añade estructura al lenguaje y permite aplicar diferentes implementaciones a los objetos. Las clases son las plantillas que Java utiliza para denominar a los objetos, mientras que las instancias permiten hacer referencia a ellos durante la ejecución del programa. Por su parte, la herencia permite usar el mismo código de una clase en otras clases que heredan de ella sus métodos (funciones) y sus atributos.</li>
            <li>Java ofrece un alto nivel de seguridad gracias a su ejecución en dos pasos. Debido a que el código tiene que pasar por ambos procesos, es mucho más difícil hackear o modificarlo de una forma maliciosa.</li>
            <li>Java está diseñado para adaptarse a los cambios, sin sacrificar velocidad y optimizando la memoria. Esto hace que el mismo código sea capaz de identificar errores y solucionarlos durante la compilación. Además, debido a que Java integra constructores propios, controla la forma en que un identificador se relaciona con una clase u objeto, asegurando que el programa corra de forma correcta.</li>
            </>
          }
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2_OFo0jIQiU0p3RgktmIkaX4RQTGEhUlag&s"
          
        />

        <SectionCard
          title="Estructura del programa"
          text={
            <>
            <p> La estructura de un programa en Java se compone de las siguientes secciones: Importaciones, Clase principal pública con método main, Bloques de código, Estructuras de control</p>
            <li>La clase principal es la que se debe nombrar de la misma manera que el archivo .java que la contiene. El método main es el punto de entrada del programa y se declara dentro de la clase. </li>
            <li>Los programas en Java se almacenan en archivos con extensión .java. Los archivos .java están guardados en paquetes que pueden contener otros archivos .java. </li>
            </>
          }
          
          imgSrc="https://fredygeek.com/wp-content/uploads/2022/03/Estructura-de-una-aplicacion-en-Java.jpg"
          
        />
      </Container>
    </div>
  );
}

export default Java;
