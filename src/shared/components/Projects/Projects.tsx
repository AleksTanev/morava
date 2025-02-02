import { Col } from "reactstrap";

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
                <Col key={index} xl={3} sm={3} xxl={3} md={3} lg={3} xs={3}>
                    <img src={project.imgUrl} alt={project.title} />
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </Col>
            ))}
        </>
    );
};

export default Projects;
