import PageTitle from "../../components/PageTitle/PageTitle";

export interface ServicesProps {
  servicesText: string;
}

const Services = ({ servicesText }: ServicesProps) => {
  return (
    <>
      <PageTitle pageTitleText="Services" />
      {servicesText}
    </>
  );
};

export default Services;
