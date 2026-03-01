import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillPatchCheckFill } from "react-icons/bs";
<<<<<<< HEAD
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import deved from "../public/ozi.png";
import ME from "../public/gunung.jpg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import exp from "../public/work.jpg";

SwiperCore.use([Navigation]);

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const portfolioData = [
    {
      image: "/porto3.png",
      title: "Culinarix",
      desc: "Culinarix  merupakan aplikasi rekomendasi kuliner di kota bandung untuk membantu wisatawan ataupun masyarat lokal disana menemukan rekomendasi kuliner yang sesuai dengan preferensi mereka.",
      view: "https://github.com/keeptrain/Culinarix?tab=readme-ov-file",
      demo: "https://www.youtube.com/watch?feature=shared&v=_1JeLwmAOOE",
      techStack: ["Python", "Flask", "Docker", "Firestore", "GCP "]
    },
    {
      image: "/uikit.png",
      title: "UIKIT Website",
      desc: "Website ini merupakan Website Jual Beli UI KIT Figma dengan sistem subscription dengan midtrans.Website ini dibangun menggunakan VueJs 3 dan backend nya menggunakan laravel .                              ",
      view: "https://github.com/alghoziii/FE-UI-KIT",
      techStack: ["VueJs", "JavaScript", "MySQL", "Tailwind", "Laravel"]
    },
    {
      image: "/porto1.png",
      title: "KASIRQ",
      desc: "Mengembangkan sistem kasir berbasis Website (Software as a Service) untuk memudahkan manajemen penjualan toko obat tanaman dan pupuk. Website ini dilengkapi sistem subscription sesuai paket yang dipilih .",
      view: "https://dashboard-kasir.vercel.app/",
      demo: "https://dashboard-kasir.vercel.app/",
      techStack: ["PHP", "MYSQL", "React Js", "Tailwind", "PostgreSQL"]

    },

    {
      image: "/travela.png",
      title: "Travela",
      desc: "Travela Merupakan website booking paket travel secara online yang dibangun menggunakan PHP Laravel 11. Website ini dilengkapi fitur autentikasi pengguna, role-based access control (menggunakan Spatie), content management system untuk admin, checkout dan approval sistem, serta katalog paket tour. ",
      view: "https://github.com/alghoziii/Travela",
      techStack: ["Laravel", " Mysql", "Tailwind", "PHP",]

    },
    {
      image: "/booking.png",
      title: "Mini Soccer Booking",
      desc: "Website pemesanan lapangan mini soccer online yang dibangun dengan arsitektur microservices menggunakan Golang, dilengkapi fitur autentikasi pengguna, cek ketersediaan jadwal lapangan secara real-time,pembayaran online(Midtrans)",
      view: "https://github.com/alghoziii/mini-soccer-booking",
      techStack: ["Golang", " PostgreSql", "Jenkins", "Docker", "GCP", "NEXTJS"]

    },
  ];

  const experiences = [
    {
      period: "Agt 2024 - Jan 2025",
      title: "FULL STACK DEVELOPER",
      company: "Horus Technology(internship)",
      location: "Gamping,Yogyakarta",
      url: "https://www.horus.co.id/",
    },
    {
      period: "Agt 2024 - Jan 2024",
      title: "Cloud Computing",
      company: "Bangkit (Studi Independent)",
      location: "Bandung, Indonesia (Remote)",
      url: "https://grow.google/intl/id_id/bangkit/",
    },
  ];
=======
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import deved from "../public/ozi.png";
import ME from "../public/me.jpg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const swiperRef = useRef(null);

  const portfolioData = [
    {
      image: "/porto1.png",
      title: "KASIRQ",
      desc: "Mengembangkan sistem kasir berbasis Website PHP (Software as a Service) untuk memudahkan manajemen penjualan toko obat tanaman dan pupuk",
      view: "https://dashboard-kasir.vercel.app/",
    },
    {
      image: "/porto2.png",
      title: "Authbot",
      desc: "Authbot Proyek ini menerapkan algoritma generate teks ke foto berbasis website PHP untuk menciptakan konten visual yang unik.",
      view: "https://authbotzytes.000webhostapp.com/",
    },
    {
      image: "/porto3.png",
      title: "Culinarix",
      desc: "Capstone Project in Bangkit 2023 Pembuatan Backend API aplikasi dan Mengkonfigurasikan Ke Google Cloud Platform ",
      view: "https://github.com/keeptrain/Culinarix?tab=readme-ov-file",
      demo: "https://www.youtube.com/watch?feature=shared&v=_1JeLwmAOOE",
    },
    {
      image: "/porto4.png",
      title: "Otogarage",
      desc: "Website landing page untuk Jasa service kendaraan.",
    },
  ];

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        if (swiper) {
          swiper.slideNext();
        }
      }, 6000);
    };

    startInterval();

    const reverseIntervalId = setInterval(() => {
      if (swiper) {
        swiper.slidePrev();
      }
    }, 9000);

    return () => {
      clearInterval(intervalId);
      clearInterval(reverseIntervalId);
    };
  }, []);
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e

  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
      mirror: false,
    });

    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-4 dark:bg-gray-900 md:px-8 lg:px-16">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
<<<<<<< HEAD
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href="https://drive.google.com/file/d/1T4Y2qRci9l4_oDT8FgZ12C4dlzpoRgwE/view?usp=sharing">
=======
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href="https://drive.google.com/file/d/1alVTlNg8F-0jYpyuPtKkh1FRKz5G_QMf/view?usp=drive_link">
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-90 md:w-99 bottom-11" data-aos="fade-down">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          <div className="text-center p-5 py-1" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
<<<<<<< HEAD
            <h2 className="text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl ">Shobarudin Alghozi</h2>
            <h3 className="text-lg py-3 dark:text-white md:text-3md">Fullstack Developer </h3>
=======
            <h2 className="text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">Shobarudin</h2>
            <h3 className="text-ls py-3 dark:text-white md:text-3md">Frontend Web Developer | Backend Web Developer</h3>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
          </div>
          <div className="flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400" data-aos="fade-up">
            <a href="https://github.com/alghoziii" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-gray-800 transition-colors duration-300">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/shobarudin-alghozi-550163217/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-500 transition-colors duration-300">
              <AiFillLinkedin />
            </a>
            <a href="https://instagram.com/alghozii_zy" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-pink-500 transition-colors duration-300">
              <AiFillInstagram />
            </a>
          </div>
<<<<<<< HEAD

        </section>

        <section id="about" className="py-12">
          <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 text-center mb-8" data-aos="fade-down">
            About Me
          </h3>

          <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 mx-auto max-w-5xl" data-aos="fade-up">
            {/* Image Container - Closer to text */}
            <div className="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src={ME}
                  alt="Profile Photo"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
            </div>

            {/* Content Container - Better aligned */}
            <div className="w-full md:w-3/5 max-w-xl flex flex-col">
              <div className="flex-grow">
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg max-w-prose px-6 text-justify ">
                  I'm a passionate web developer specializing in backend development.
                  I have a deep enthusiasm for technology and continuously seek opportunities to expand my knowledge and skills.
                  I thrive in collaborative environments, delivering efficient solutions, and contributing to innovative projects that drive positive change.
                  I am open to diverse job opportunities that align with my expertise and interests.
                </p>
              </div>



              {/* Button aligned to right */}
              {/* <div className="flex justify-end mt-4">
                <a
                  href="https://www.linkedin.com/in/shobarudin-alghozi-550163217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Know Me More
                </a>
              </div> */}
            </div>
          </div>
        </section>


        <section id="experience" className="py-12">
          <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 text-center mb-8" data-aos="fade-down">
            My Experience
          </h3>

          <div className="flex flex-col md:flex-row items-stretch justify-center bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 p-6 mx-auto max-w-6xl" data-aos="fade-down">
            {/* Image Container - Full Height */}
            <div className="mt-12">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={exp}
                  alt="Work Experience"
                />
              </div>
            </div>

            {/* Experiences List - Better Card Sizing */}
            <div className="w-full md:w-2/3 space-y-6">
              {experiences.map((exp, index) => (
                <a
                  key={index}
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all duration-300 ml-auto hover:-translate-y-1 hover:border-l-4 hover:border-teal-500"
                  style={{ maxWidth: "90%" }}
                >
                  <div className="text-gray-700 dark:text-green-400 font-medium">{exp.period}</div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.title}</h4>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</div>
                  <div className="mt-2 text-teal-500 text-sm flex items-center">
                    View details <span className="ml-1">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 mt-16 text-center mb-11" data-aos="zoom-in">
            My Skills
=======
        </section>
        <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 mt-16 text-center" data-aos="fade-down">
          About Me
        </h3>
        <section id="about-me" className="flex flex-col md:flex-row items-center justify-center py-12 bg-gray-100 rounded-lg shadow-md max-w-full h-auto dark:bg-gray-900 mt-3" data-aos="fade-up-left">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-4">
            <Image src={ME} alt="me" className="rounded-lg shadow-md max-w-full h-auto" />
          </div>

          <div className="w-full md:w-2/3 mx-2 mt-4 md:mt-0">
            <div className="text-center p-6">
              <p className="text-md leading-1 text-gray-700 dark:text-white">
                Currently, I am taking part in the Bangkit 2023 Learning Path Cloud Computing Program. I have experience in the fields of Frontend Development, Backend Development, and Cloud Computing. I am a person who enjoys learning new
                things, especially about technology.
              </p>
              <a href="https://www.linkedin.com/in/shobarudin-alghozi-550163217/">
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-xl mt-4 md:mt-5">Know Me More</button>
              </a>
            </div>
          </div>
        </section>
        <section id="experience">
          <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 mt-16 text-center mb-11" data-aos="zoom-in">
            My Experience
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
          </h3>
          <div className="container experience__container dark:text-white" data-aos="zoom-in">
            <div className="experience__fontend">
              <h3>Frontend Development</h3>
              <div className="experience__content mt-6">
<<<<<<< HEAD

=======
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Javascript</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
<<<<<<< HEAD
                    <h4>PHP</h4>
=======
                    <h4>Bootstrap</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Tailwind</h4>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
<<<<<<< HEAD
                    <h4>Vue Js</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Laravel</h4>
=======
                    <h4>React</h4>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience__backend">
              <h3>Backend Development | Cloud Computing</h3>
              <div className="experience__content mt-6">
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
<<<<<<< HEAD
                    <h4>Python</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
=======
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                    <h4>Node JS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
<<<<<<< HEAD
                    <h4>Flask</h4>
=======
                    <h4>MySQL</h4>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
<<<<<<< HEAD
                    <h4>Golang</h4>
                    <small className="text-light">Pre-intermediate </small>
=======
                    <h4>Python</h4>
                    <small className="text-light">Intermediate</small>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
<<<<<<< HEAD
                    <h4>Google Cloud Computing</h4>
                    <small className="text-light">Intermediate </small>
                  </div>
                </article>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Mysql & PostgreSql</h4>
                    <small className="text-light">Intermediate </small>
=======
                    <h4>Cloud Computing</h4>
                    <small className="text-light">Intermediate</small>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        <section className="py-12 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 text-center mb-12">Portfolio</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">{item.desc}</p>

                    {/* Unique Tech Stack for Each Project */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {item.techStack?.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={item.view || item.demo || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-teal-500 hover:bg-teal-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Lihat Detail
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
=======
        <section className="py-12" data-aos="zoom-in-left">
          <div>
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400 text-center mt-16">Portofolio</h3>
          </div>
          <Swiper ref={swiperRef} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000 }}>
            {portfolioData.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex justify-between dark:bg-white mt-4 mb-5">
                      {item && (
                        <div className="flex-1 border border-gray-900 p-5 rounded-md mr-1">
                          <img src={item.image} alt={item.title} className="w-full h-auto mb-4 mt-4 object-cover" style={{ maxHeight: "210px" }} />
                          <h4 className="text-xl font-bold mt-11">{item.title}</h4>
                          <p className="text-gray-600">{item.desc}</p>
                          <div className="flex justify-center mt-12">
                            {" "}
                            <a href={item.demo} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mr-4">
                              Demo
                            </a>
                            <a href={item.view} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mr-4">
                              View
                            </a>
                          </div>
                        </div>
                      )}
                      {index + 1 < portfolioData.length && (
                        <div className="flex-1 border border-gray-900 p-6 rounded-md ml-4">
                          <img src={portfolioData[index + 1].image} alt={portfolioData[index + 1].title} className="w-full h-auto mb-4 mt-4 object-cover" style={{ maxHeight: "210px" }} />
                          <h4 className="text-xl font-bold mt-11">{portfolioData[index + 1].title}</h4>
                          <p className="text-gray-600">{portfolioData[index + 1].desc}</p>
                          <div className="flex justify-center mt-12">
                            {" "}
                            <a href={portfolioData[index + 1].demo} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mr-4">
                              Demo
                            </a>
                            <a href={portfolioData[index + 1].view} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mr-4">
                              View
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              } else {
                return null;
              }
            })}
          </Swiper>
>>>>>>> a2a590534715cca30c50c9cc6af14f8f0624753e
        </section>
      </main>
    </div>
  );
}
