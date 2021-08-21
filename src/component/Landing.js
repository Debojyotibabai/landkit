import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Switch from "react-switch";

// component
import Navbar from "./Navbar";
import Footer from "./Footer";

// css
import "../css/Landing.css";
import "../App.css";

// material icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import CodeIcon from "@material-ui/icons/Code";
import CheckIcon from "@material-ui/icons/Check";
import RepeatIcon from "@material-ui/icons/Repeat";

// img
import landing__banner from "../image/landing__banner.svg";
import airbnb from "../image/airbnb.png";
import pinterest from "../image/pinterest.png";
import instagram from "../image/instagram.png";
import netflix from "../image/netflix.png";
import experience__banner from "../image/experience__banner.svg";
import business__banner from "../image/business__banner.svg";

const Landing = () => {
  const [aboutDetail] = useState([
    {
      img: <ToggleOffIcon />,
      title: "Built for developers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia rem aut earum recusandae aspernatur quod unde odit.",
    },
    {
      img: <ViewQuiltIcon />,
      title: "Designed to be modern",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia rem aut earum recusandae aspernatur quod unde odit, reprehenderit alias? Illum quis eveniet illo quod doloribus deleniti, rem nemo nesciunt?",
    },
    {
      img: <CodeIcon />,
      title: "Documentation fro everything",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia rem aut earum recusandae aspernatur quod unde odit, reprehenderit alias? Illum quis eveniet illo quod doloribus deleniti.",
    },
  ]);

  const [carouselDetail] = useState([
    {
      img: "https://images.unsplash.com/photo-1471174466996-0aa69dbda661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxtaW5pbWFsJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      logo: airbnb,
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a, labore quo quam sed quidem, fugit commodi sequi corrupti voluptatum cupiditate repudiandae esse ipsa deserunt.",
      name: "DEBOJYOTI GHOSH",
    },
    {
      img: "https://images.unsplash.com/photo-1471174466996-0aa69dbda661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxtaW5pbWFsJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      logo: netflix,
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a, labore quo quam sed quidem, fugit commodi sequi corrupti voluptatum cupiditate repudiandae esse ipsa deserunt.",
      name: "TANMAY PAUL",
    },
    {
      img: "https://images.unsplash.com/photo-1471174466996-0aa69dbda661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxtaW5pbWFsJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      logo: pinterest,
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a, labore quo quam sed quidem, fugit commodi sequi corrupti voluptatum cupiditate repudiandae esse ipsa deserunt.",
      name: "SOHEL ISLAM",
    },
  ]);

  const [faq] = useState([
    {
      que: "Can I use Landkit for my clients?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero dolorum non earum quo, optio, nostrum nisi laudantium enim voluptates quia voluptatibus alias. Quisquam praesentium autem nisi quidem illum mollitia? nostrum nisi laudantium enim voluptates quia voluptatibus alias.",
    },
    {
      que: "Is there a money back guarantee?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero dolorum non earum quo, optio, nostrum nisi laudantium enim voluptates quia voluptatibus alias.",
    },
    {
      que: "Do I get free updates?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero dolorum non earum quo, optio. Optio, nostrum nisi laudantium enim.",
    },
    {
      que: "Does it works with React? Rail? Laravel?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero dolorum non earum quo, optio, nostrum nisi laudantium enim voluptates quia voluptatibus alias.",
    },
  ]);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="main__section">
        {/* navbar */}
        <Navbar />

        {/* banner */}
        <div className="banner">
          <div className="left__banner">
            <h1>
              Welcome to <span>Landkit.</span>
              <br />
              Develop anything.
            </h1>
            <p>
              Build a beautiful, modern website with flexible Bootstrap
              components built from scratch.
            </p>
            <div className="banner__button__section">
              <button className="banner__button banner__button1">
                View all pages <ArrowForwardIcon />
              </button>
              <button className="banner__button banner__button2">
                Documentation
              </button>
            </div>
          </div>
          <div className="right__banner">
            <img src={landing__banner} alt="" />
          </div>
        </div>

        {/* about */}
        <div className="about">
          {aboutDetail.map((eachItem, eachItemIndex) => {
            return (
              <div key={eachItemIndex} className="about__card">
                {eachItem.img}
                <h1>{eachItem.title}</h1>
                <p>{eachItem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* brands */}
      <div className="brands__section">
        <div className="brands main__section">
          <div className="brands__card">
            <img src={airbnb} alt="" />
          </div>
          <div className="brands__card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Dribbble_Text_Logo_Script.svg"
              alt=""
            />
          </div>
          <div className="brands__card">
            <img src={pinterest} alt="" />
          </div>
          <div className="brands__card">
            <img src={instagram} alt="" />
          </div>
          <div className="brands__card">
            <img src={netflix} alt="" />
          </div>
        </div>
      </div>
      <div className="top__section">
        {/* resource */}
        <div className="resource main__section">
          <div className="left__resource">
            <form>
              <img
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Download a sample</button>
            </form>
          </div>
          <div className="similar">
            <h1 className="similar__heading">The most useful resource</h1>
            <h1
              className="similar__heading__color"
              style={{ color: "#3fb491" }}
            >
              ever created for dev.
            </h1>
            <p className="similar__para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi cumque quaerat sint sunt voluptates ullam perferendis
              numquam ab ut, architecto et quibusdam, quo commodi ratione
              molestiae. Perspiciatis earum qui exercitationem.
            </p>
            <div className="right__resource__features">
              <div className="features">
                <span>
                  <CheckIcon />
                  Life time updates
                </span>
                <span>
                  <CheckIcon />
                  Tech support
                </span>
              </div>
              <div className="features">
                <span>
                  <CheckIcon />
                  Tons of assets
                </span>
                <span>
                  <CheckIcon />
                  Integration ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="experience main__section">
          <div className="similar">
            <h1 className="similar__heading">We have a lots experience</h1>
            <h1 className="similar__heading__color">
              building Bootstrap themes.
            </h1>
            <p className="similar__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, facilis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur. adipisicing elit. Aspernatur,
              facilis. Lorem ipsum dolor.
            </p>
            <div className="experience__card">
              <div>
                <RepeatIcon />
              </div>
              <div>
                <h1>Bootstrap users since the beginning</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime blanditiis.
                </p>
              </div>
            </div>
            <div className="experience__card">
              <div>
                <CodeIcon />
              </div>
              <div>
                <h1>Deep understanding of Bootstrap</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime blanditiis.
                </p>
              </div>
            </div>
          </div>
          <div className="right__experience">
            <img src={experience__banner} alt="" />
          </div>
        </div>

        {/* center */}
        <div className="center">
          <h1>Our customers are our biggest fans.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            necessitatibus aut aperiam ex alias iste odit dolorum laudantium
            doloremque, itaque id cumque beatae odio facilis sint fugiat?
            Laudantium, optio enim.
          </p>
        </div>

        {/* carousel */}
        <Splide
          className="carousel"
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            pagination: false,
            arrows: false,
          }}
        >
          {carouselDetail.map((eachItem, eachItemIndex) => {
            return (
              <SplideSlide className="carousel__section" key={eachItemIndex}>
                <img src={eachItem.img} alt="" className="carousel__image" />
                <div className="details">
                  <img src={eachItem.logo} alt="" />
                  <p>{eachItem.comment}</p>
                  <span>{eachItem.name}</span>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>

      <div className="middle__section">
        {/* business */}
        <div className="business main__section">
          <div className="similar">
            <h1 className="similar__heading">Stay focused in your business.</h1>
            <h1 className="similar__heading__color">
              Let us handle your design.
            </h1>
            <p className="similar__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              magni neque voluptate architecto harum temporibus repellat,
              deserunt quisquam sequi sint libero excepturi atque, sed dolorem
              dolore. Reprehenderit nostrum animi quibusdam.
            </p>
            <div className="business__support">
              <div>
                <p>100%</p>
                <span>Satisfaction</span>
              </div>
              <div>
                <p>24/7</p>
                <span>Support</span>
              </div>
              <div>
                <p>100k+</p>
                <span>Sales</span>
              </div>
            </div>
          </div>
          <div className="right__business">
            <img src={business__banner} alt="" />
          </div>
        </div>

        {/* center */}
        <div className="center">
          <h1>Fair, simple pricing for all.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            necessitatibus aut aperiam ex alias iste odit dolorum laudantium
            doloremque, itaque id cumque beatae odio facilis sint fugiat?
            Laudantium, optio enim.
          </p>
          <div className="toggle">
            <p>Annual</p>
            <Switch
              onColor="#bec8da"
              offColor="#bec8da"
              onHandleColor="#185adb"
              height={20}
              width={45}
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => {
                setToggle(!toggle);
              }}
              checked={toggle}
            />
            <p>Monthly</p>
          </div>
        </div>

        {/* price */}
        <div className="price main__section">
          <div className="left__price">
            <span>STANDARD</span>
            <h1>
              $29<span>/mo</span>
            </h1>
            <p>per seat</p>
            <div className="price__features">
              <p>
                <CheckIcon />
                Lorem ipsum dolor sit amet.
              </p>
              <p>
                <CheckIcon />
                Lorem ipsum dolor sit amet.
              </p>
              <p>
                <CheckIcon />
                Lorem ipsum dolor sit amet.
              </p>
              <p>
                <CheckIcon />
                Lorem ipsum dolor sit amet.
              </p>
              <p>
                <CheckIcon />
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <button>Get it now</button>
          </div>
          <div className="right__price">
            <span>ENTERPRISE</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              corrupti eveniet voluptatibus aliquam eius vitae sit vel quod
              veniam eos minima vero nulla itaque facilis quam reiciendis, esse
              eaque harum.
            </p>
            <button>Contact us</button>
          </div>
        </div>
      </div>

      <div className="bottom__section">
        {/* faq */}
        <div className="faq main__section">
          {faq.map((eachFaq, eachFaqIndex) => {
            return (
              <div className="faq__card" key={eachFaqIndex}>
                <span>?</span>
                <div className="details">
                  <h1>{eachFaq.que}</h1>
                  <p>{eachFaq.ans}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* buy */}
        <div className="buy main__section">
          <span>GET STARTED</span>
          <h1>Get Landkit and save your time.</h1>
          <p>
            Stop wasting time trying to do it the "right way" and build a site
            from scratch. Landkit is faster, easier and you still have complete
            control.
          </p>
          <button>
            Buy it now <ArrowForwardIcon />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
