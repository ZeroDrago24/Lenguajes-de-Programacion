import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";

const items = [
  {
    src: "https://cdn.slidesharecdn.com/ss_thumbnails/1-1-historiadellenguajedeprogramacion-130312233550-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds",
  
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCGuMS6ZHt9G_80XRtmbXo2PoUAg-QhOTLAB_D6AvfeUdMkaxzyAZ0XLM6BCNGHu-yy90sMepjuolo_P4bI06-jzPIDz9OSkhhPuK_v3ichFHhmlRxxNSJzAosRt7qEeAzdh5kB3PnNC4/s1600/LINEA+DEL+TIEMPO+EVOLUCION+DE+LENGUAJES+DE+PROGRAM.PNG",
  },
  {
    src: "https://go.yuri.at/juegos/clase1/clase1_pasos1.gif",
    
  },
];

function Historia() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Historia de los Lenguajes de Programación</h1>

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
          title="Historia de los lenguajes de programación"
          text="La historia de los lenguajes de programación se remonta al siglo XIX, cuando Ada Lovelace, entre 1842 y 1849, tradujo el memorándum del matemático italiano Luigi Menabrea sobre la máquina propuesta por Charles Babbage, el Motor Analítico. Lovelace agregó notas detalladas que describían un método para calcular los números de Bernoulli con la máquina, considerado por los historiadores como el primer programa de computadora. Con el desarrollo de computadoras modernas en la década de 1940, surgieron los primeros lenguajes funcionales, como Plankalkül de Konrad Zuse. Estos lenguajes sentaron las bases para futuros desarrollos."
          imgSrc="https://desarrollodesoftware.dev/wp-content/uploads/2022/03/Historia-de-los-lenguajes-de-programacion2.webp"
          alt="Evolución de los lenguajes"
          className="img-fluid"
        >
          
              
            
        </SectionCard>
 
        <SectionCard
          title="Evolución de los lenguajes de programación"
          text={
            <>
              <p>
                Los lenguajes de programación evolucionaron significativamente durante la década de 1950 con la
                aparición de lenguajes como FORTRAN, diseñado para aplicaciones científicas, y COBOL, creado
                para sistemas comerciales. En las décadas siguientes, se introdujeron lenguajes como C, que
                sentó las bases para muchos lenguajes modernos, y Prolog, que fomentó la programación lógica.
              </p>
              <p>
                En la década de 1980, se consolidaron paradigmas como la orientación a objetos con lenguajes
                como C++ y Smalltalk, además de SQL, que revolucionó la gestión de bases de datos.
              </p>
            </>
          }
          imgSrc="https://i0.wp.com/www.revistaonoff.es/app/uploads/2022/08/historia-programacion-web.jpg?w=1000&ssl=1"
        >
              
        </SectionCard>

        
        <SectionCard
          title="Impacto contemporáneo"
          text={
            <p>
              En la actualidad, los lenguajes de programación han alcanzado un nivel de sofisticación que
              permite el desarrollo de sistemas complejos, desde aplicaciones móviles hasta inteligencia
              artificial. Lenguajes como Python, JavaScript y Java son ampliamente utilizados debido a su
              flexibilidad y facilidad de aprendizaje.
            </p>
            
          }
          imgSrc="https://www.aprendum.com/blog/wp-content/uploads/2017/11/lenguajesdeprogramacion_principal.jpg"
        >
        </SectionCard>
      </Container>
    </div>
  );
}

export default Historia;
