import { Col, Row } from "reactstrap";

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
            <Row>
                <h3>Some of our projects</h3>
                {projects.map((project, index) => (
                    <Col key={index} xl={3} sm={3} xxl={3} md={3} lg={3} xs={3}>
                        <img src={project.imgUrl} alt={project.title} />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Projects;
