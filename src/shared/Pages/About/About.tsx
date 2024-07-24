export interface AboutProps {
    aboutText: string;
}

const About = ({ aboutText }: AboutProps) => {
    return <>{aboutText}</>;
};

export default About;
