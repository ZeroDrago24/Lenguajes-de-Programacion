import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SectionCard from "./SectionCard";  
const items = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Qbasic2.jpg",
    
  },
  {
    src: "https://recluit.com/WP-Blog/wp-content/uploads/2020/04/basic-lenguaje-historia-recluit.jpg",
    
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi516WDOgtEoZ3YbeToJvI_Fj3TGjCGsjfaZVd_vTkCTLv59nzXCSRcTI5VoYg8GWMMFK1w4PdvhiNalnRTI0YpXos5Oc4uCZ-Z3koJQPyBLe7RCctuIeJKPV3OKseciSkubqX-5CF4SGk/s1600/bsc01.jpg",
    
  },
];

function Basic() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Basic</h1>

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
          title="¿Qué es Basic?"
          text="BASIC, siglas de Beginner's All-purpose Symbolic Instruction Code (Código simbólico de instrucciones de propósito general para principiantes en español), es una familia de lenguajes de programación de alto nivel. El BASIC original, el Dartmouth BASIC, fue diseñado en 1964 por John George Kemeny y Thomas Eugene Kurtz en el Dartmouth College en Nuevo Hampshire, Estados Unidos, como un medio para facilitar la programación en ordenadores a estudiantes (y profesores) que no fueran de ciencias. De aquella, casi todo el uso de los ordenadores requería codificar software hecho a medida, con lo cual quedaba restringida a personas con formación como científicos y matemáticos. BASIC originalmente fue desarrollado como una herramienta de enseñanza. El lenguaje y sus variantes llegaron a estar ampliamente disponibles en los microcomputadores a finales de los años 1970 y en los años 1980. BASIC sigue siendo popular a día de hoy en un puñado de dialectos altamente modificados, y en nuevos lenguajes, influenciados por BASIC tales como Microsoft Visual Basic o Gambas en GNU/Linux. En el año 2006, el 59% de los desarrolladores para la plataforma .NET usaban Visual Basic .NET como su único lenguaje."
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/c/c9/AtariBasic.png"
          altText="Imagen Qué son los lenguajes"
        />

      <SectionCard
          title="Historia"
          text="A principios de la década de 1960, las computadoras eran sumamente caras y se utilizaban únicamente para propósitos especiales, ejecutando una única tarea a la vez. Sin embargo, durante el transcurso de esa década, los precios bajaron al punto que incluso algunas pequeñas empresas ya podían costearlas. La velocidad de proceso de las máquinas se incrementó al grado que a menudo quedaban demasiado tiempo ociosas, porque no había suficientes tareas para ellas. Todo ello fue debido a la rápida evolución del hardware. Los lenguajes de programación de aquellos tiempos estaban diseñados para propósitos específicos, como las máquinas en las que eran ejecutados; por ejemplo para desarrollar aplicaciones cálculo o procesamiento de fórmulas se diseñó el lenguaje FORTRAN, en tanto que para la programación en administración o gestión de información se desarrolló específicamente el COBOL.A fin de incrementar el rendimiento y amortizar mejor los costos (por reducción del tiempo ocioso de la procesador), y siendo que ya la velocidad de las máquinas comenzó a permitirlo, se propuso la idea de ejecutar más de una tarea simultáneamente, fue así que surgió el concepto de sistema de tiempo compartido, que comenzó a ganar mucha popularidad. En sistemas de ese tipo, el tiempo de procesamiento del procesador central se dividía, y a cada usuario se le otorgaba secuencial y cíclicamente una pequeña porción o cuota de tiempo de proceso. Las máquinas eran lo suficientemente rápidas como para provocar en los usuarios la ilusión de que disponían de la funcionalidad de la máquina todo el tiempo para ellos (seudo-simultaneidad de procesos). Esa distribución del tiempo de cómputo entre los usuarios redujo considerablemente el costo de la computación, ya que una sola máquina podía ser compartida por numerosos usuarios."
          imgSrc="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/07/hipertextual-basic-primer-lenguaje-todos-publicos-2019132314.jpg?fit=1500%2C1000&quality=50&strip=all&ssl=1"
          altText="Imagen Para qué sirven"
      />

        <SectionCard
          title="Características Principales Del Lenguaje De Programación Basic"
          text={
            <>
            <p>el lenguaje de programación Basic no está estrechamente relacionado a un tipo particular de ordenador, procesador o sistema operativo. Esto puede ser un problema, ya que Basic varía ligeramente dependiendo de su aplicación (como diferentes dialectos de una lengua). Por consiguiente, en este libro no vamos a darle una descripción detallada de todas las características de Basic, sino presentar una aplicación muy concreta de Basic, lenguaje de programación utilizado en el compilador mikroBasic PRO for PIC. El Basic es un lenguaje de programación simple y fácil de entender. Para utilizarlo correctamente, basta con conocer sólo unos pocos elementos básicos en los que consiste cada programa.</p>
            <p>Estos son:</p>
            <li>Identificadores</li>
            <li>Comentarios</li>
            <li>Operadores</li>
            <li>Expresiones</li>
            <li>Instrucciones</li>
            <li>Constantes</li>
            <li>Variables</li>
            <li>Símbolos</li>
            <li>Directivas</li>
            <li>Etiquetas</li>
            <li>Procedimientos y funciones</li>
            <li>Módulos</li>
            </>
          }
          imgSrc="https://cdn.mikroe.com/ebooks/img/38/2016/02/al-mundo-de-los-microcontroladores-basic-chapter-02-fig2-8.gif"
          
        />

        <SectionCard
          title="Estructura del programa"
          text="Similar a los otros lenguajes de programación, Basic dispone de un conjunto de reglas estrictamente definidas que se deben observar al escribir un programa. Para escribir un programa en Basic, es necesario instalar un software que proporciona el entorno de trabajo apropiado y entiende estas reglas en la PC... Al escribir una carta, se necesita un programa para procesar palabras. En este caso, se necesita el compilador mikroBasic PRO for PIC. A diferencia de la mayoría de programas a los que está acostumbrado a manejar, el proceso de escribir programas en el compilador no empieza por seleccionar la opción File>New, sino Project>New. Una vez que se ha escrito el programa, el mismo se debe compilar en código HEX para crear un nuevo documento con extensión .hex. Al mismo tiempo el compilador generará automáticamente varios documentos aparte de ése."
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/fc/Applesoft_BASIC.png"
          
        />
      </Container>
    </div>
  );
}

export default Basic;
