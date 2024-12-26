import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../../Components/shared/Title";
import Text from "../../Components/shared/Text";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Components/shared/SubTitle";
import Carousel from "../../Components/shared/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Loading from "../../Components/shared/Loading/Loading";
import SEO from "../../Components/shared/SEO/Seo";
import NavbarGoBack from "../../Components/shared/NavbarGoBack";
import { useLang } from "../../context/useLang";
import Footer from "../../Components/Footer/Footer";

const Blog = () => {
  const { data } = useLang();
  const { id } = useParams();
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(true);
  const sectionsRef = useRef([]);
  const navItemsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aux = data?.home?.sections?.section_7?.itemsBlog.find((e) => e.id === id);
        if (aux) {
          setBody(aux);
        } else {
          console.error("Blog post not found");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, data]);

  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SEO
          title="Learning React Helmet!"
          description="Beginner friendly page for learning React Helmet."
          name="Company name."
          type="article"
        />
        <Loading />
      </div>
    );
  }

  if (!body) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SEO
          title="Blog Not Found"
          description="The blog post you're looking for does not exist."
          image="" // Placeholder if needed
          url={`https://neurons.com.ar/blog/${id}`} // Placeholder URL
          type="article"
          siteName="Company name."
        />
        <div className="text-center">
          <h1>Blog Post Not Found</h1>
          <p>Sorry, the blog post youre looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="relative"
    >
      <NavbarGoBack />
      <SEO
        title={body.title}
        description={body.subtitle}
        image={body?.img}
        url={`https://neurons.com.ar/blog/${id}`}
        type="article"
        siteName="Company name."
      />
      <Container>
        <section className="flex flex-col gap-2">
          <Title text={body?.title} extra="text-start font-Baskerville" />
          <SubTitle text={body?.subtitle} extra="text-start" />

          <section className="flex justify-start items-center m-0 gap-5">
            <p className="bg-blackCeniza bg-opacity-50 text-white rounded-lg p-2 m-0">
              {body?.hora} <span>{body?.fecha}</span>
            </p>
            <p className={`${body?.color} bg-opacity-50 text-white rounded-lg p-2 m-0`}>
              {body?.category}
            </p>
          </section>
        </section>
      </Container>

      <img
        src={body?.img}
        alt=""
        className="h-[500px] object-cover w-full"
        width={100}
        height={100}
      />
      <Container>
        <section className="w-full grid grid-cols-3 relative min-h-fit pb-20">
          <section className=" hidden sm:hidden md:hidden lg:block">
            <nav className="sticky top-10 p-10 bg-white/40 rounded-lg m-5">
              <ul>
                {body?.content.sections.map((section, index) => (
                  <li
                    key={index}
                    ref={(el) => (navItemsRef.current[index] = el)}
                    onClick={() => scrollToSection(index)}
                    className={`font-Poppins my-2 cursor-pointer hover:text-blackCeniza `}
                  >
                    {section?.subtitle && section?.subtitle}
                  </li>
                ))}
              </ul>
            </nav>
          </section>
          <section className="col-span-3 sm:col-span-2 sm:w-full md:w-full lg:w-full relative px-0">
            {body?.content.sections.map((section, index) => (
              <section
                key={index}
                id={`section-${index}`}
                ref={(el) => (sectionsRef.current[index] = el)}
                className=""
              >
                {section?.subtitle && <SubTitle text={section?.subtitle} extra="font-bold" />}
                {Array.isArray(section?.content) ? (
                  <article className="py-10 flex flex-col gap-5 px-0">
                    {section?.content.map(({ title, body }, index) => (
                      <section key={index} className="flex flex-col gap-5">
                        {title && (
                          <Text content={title} extra="text-start font-semibold opacity-80" />
                        )}
                        {body && <Text content={body} extra="text-start" />}
                      </section>
                    ))}
                  </article>
                ) : (
                  <article className="py-10">
                    <Text content={section?.content} extra="text-start" />
                  </article>
                )}
              </section>
            ))}
          </section>
        </section>

        <SubTitle text={"Sigue leyendo"} extra="text-start" />

        <Carousel show={3.5}>
          {data?.home?.sections?.section_7?.itemsBlog
            .filter(({ id: blogId }) => blogId !== id)
            .map(({ title, img, id, content }) => (
              <SwiperSlide key={img}>
                <Link to={`/blog/${id}`}>
                  <section className="group [perspective:1000px] pt-20">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover rounded-lg"
                      width={100}
                      height={100}
                    />
                    <section className="flex flex-col gap-2 pt-5">
                      <SubTitle text={title} extra="text-start" />
                      <Text
                        content={(content.sections[0]?.content || "").substring(0, 150) + "..."}
                        extra="text-start"
                      />
                    </section>
                  </section>
                </Link>
              </SwiperSlide>
            ))}
        </Carousel>
      </Container>
      <Footer {...data?.footer} />
    </motion.section>
  );
};

export default Blog;
