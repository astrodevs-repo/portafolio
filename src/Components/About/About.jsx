import Text from "../shared/Text";
import Container from "../Container/Container";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

function About({ index, title, content, items }) {
  return (
    <section id={index} className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
      <Container extra={"col-span-1 sm:col-span-2"}>
        <Title
          text={title}
          textColor={"text-blackCeniza"}
          extra={"font-Baskerville text-center pb-10 sm:pb-20 "}
        />
        <Text content={content} textColor={"text-blackCeniza"} extra={""} />
      </Container>

      {items?.map((slide, slideIndex) => (
        <article
          key={slideIndex}
          className="flex flex-col gap-5 sm:min-h-96 min-h-[70vh]  justify-center items-center "
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="bg-black/50 h-full w-full px-10 sm:px-20 flex flex-col justify-center items-center">
            <SubTitle text={slide.title} extra={"text-white text-center font-medium"} />
            <Text
              content={slide.text}
              textColor={"text-white"}
              w={"w-full"}
              extra={"text-center"}
            />
          </section>
        </article>
      ))}
    </section>
  );
}
export default About;
