import Container from "../../Components/Container/Container";
import Section from "../../Components/shared/Section/Section";
import SubTitle from "../../Components/shared/SubTitle";
import Title from "../../Components/shared/Title";
import "./style.css";

const Team = () => {
  return (
    <Section>
      <Container>
        <div className="h-full">
          <Title text={"Our team"} />
          <br />
          <SubTitle text={"lorenmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"} />
        </div>
      </Container>
    </Section>
  );
};

export default Team;
