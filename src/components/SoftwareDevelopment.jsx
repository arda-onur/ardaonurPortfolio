import {GoBack} from "./GoBack";
import "../css/SoftwareDevelopment.css"
import "../css/GoBack.css"

export function SoftwareDevelopment({onBack}) {
    return (
        <>




        <div className="developmentDiv">
              <p>
                  <h3>Software Development</h3>
                  I craft robust, scalable applications by combining clean architecture principles with hands-on experience in both back-end and front-end technologies.


                  <p> <h5>Back-end Development:</h5> Java & Spring Boot (REST APIs, Spring Security & JWT authentication</p>

                 <p>   <h5>Front-end Development:</h5>  React, HTML, CSS, Javascript  </p>


                  <p>   <h5>Data & Persistence Development</h5> PostgreSQL,MySQL, Hibernate, </p>

                  <p>   <h5>DevOps & CI/CD:</h5> Docker, Kubernetes, Git, GitHub</p>

                  <p>   <h5>Architecture & Best Practices::</h5> Microservices,Clean Code, SOLID principles</p>
              </p>

        </div>
            <GoBack onClick={onBack}/>
</>
    )
}