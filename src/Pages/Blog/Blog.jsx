import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import Title from "../../Components/shared/Title";
import { itemsBlog } from "../../data/Home";
import Text from "../../Components/shared/Text";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Components/shared/SubTitle";
import ScrollToTop from "../../Components/shared/ScrollTop/ScrollTop";
import Footer from "../../Components/Footer/Footer";
import NavbarGoBack from "../../../NavbarGoBack";
import Carousel from "../../Components/shared/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import ProgressBar from "../../Components/shared/ProgressBar/ProgressBar";
import Loading from "../../Components/shared/Loading/Loading";
import SEO from "../../Components/shared/SEO/Seo";

const Blog = () => {
  const { id } = useParams();
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const sectionsRef = useRef([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const aux = itemsBlog.find((e) => e.id === id);
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
  }, [id]);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
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
          url={`https://example.com/blog/${id}`} // Placeholder URL
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
    <ScrollToTop>
      <NavbarGoBack />
      <ProgressBar />
      <SEO
        title={"body.title"}
        description={body.subtitle}
        image={body?.img}
        url={`https://lv6hkvjw-5173.brs.devtunnels.ms/blog/${id}`}
        type="article"
        siteName="Company name."
      />
      <section className="relative">
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

        <img src={body?.img} alt="" className="h-[500px] object-cover w-full" />
        <Container>
          <section className="w-full flex justify-between relative min-h-fit">
            <section className="w-[20%] hidden sm:hidden md:hidden lg:block">
              <nav className="sticky top-20">
                <ul>
                  {body?.content.sections.map((section, index) => (
                    <li key={index}>
                      {section?.subtitle && (
                        <button
                          onClick={() => scrollToSection(index)}
                          className="font-bold text-start py-2"
                        >
                          {section?.subtitle}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
            <section className="w-full sm:w-full md:w-full lg:w-[75%] relative px-2">
              {body?.content.sections.map((section, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className="py-5"
                >
                  {section?.subtitle && <SubTitle text={section?.subtitle} extra="font-bold" />}
                  {Array.isArray(section?.content) ? (
                    <section className="py-10 flex flex-col gap-5 px-5">
                      {section?.content.map(({ title, body }, index) => (
                        <section key={index} className="flex flex-col gap-5">
                          {title && <SubTitle text={title} extra="text-start" />}
                          {body && <Text content={body} extra="text-start" />}
                        </section>
                      ))}
                    </section>
                  ) : (
                    <section className="py-10">
                      <Text content={section?.content} extra="text-start" />
                    </section>
                  )}
                </section>
              ))}
            </section>
          </section>
          <section className="pt-20 sm:pt-40">
            <Carousel show={3.5}>
              {itemsBlog
                .filter(({ id: blogId }) => blogId !== id) // Filter out the current blog post
                .map(({ title, img, id, content }) => (
                  <SwiperSlide key={img}>
                    <Link to={`/blog/${id}`}>
                      <section className="group [perspective:1000px]">
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover rounded-lg"
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
          </section>
        </Container>
      </section>
      <Footer />
    </ScrollToTop>
  );
};

export default Blog;
