import { Col } from "reactstrap";
import styles from "./Projects.module.scss";

interface ProjectsProps {
    projects: Project[];
}

export interface Project {
    title: string;
    description: string;
    imgUrl: string;
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <>
            {projects.map((project, index) => (
                <Col className={styles["project-container"]} key={index} xl={3} sm={12} xxl={3} md={6} lg={3} xs={12}>
                    <img className={styles["project-img-container"]} src={project.imgUrl} alt={project.title} />
                    <h4 className={styles["project-subheader"]}>{project.title}</h4>
                    <p>{project.description}</p>
                </Col>
            ))}
        </>
    );
};

export default Projects;
