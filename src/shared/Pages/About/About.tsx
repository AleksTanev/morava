import PageTitle from "../../components/PageTitle/PageTitle";

export interface AboutProps {
  aboutText: string;
}

const About = ({ aboutText }: AboutProps) => {
  return (
    <>
      <PageTitle pageTitleText="About" />
      {aboutText}
    </>
  );
};

export default About;
