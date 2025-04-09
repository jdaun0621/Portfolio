// App.js
import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./App.css";

function App() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      direction: "vertical",
      loop: false,
      speed: 800,
      mousewheel: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },
      on: {
        slideChange: function () {
          const footer = document.querySelector("footer");
          if (swiper.activeIndex === 3) {
            footer.style.display = "block";
          } else {
            footer.style.display = "none";
          }
        },
      },
    });

    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const index = link.getAttribute("data-slide");
        swiper.slideTo(index);
      });
    });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#" data-slide="0">HOME</a></li>
            <li><a href="#" data-slide="1">PROFILE</a></li>
            <li><a href="#" data-slide="2">SKILL</a></li>
            <li><a href="#" data-slide="3">CERTIFICATE</a></li>
          </ul>
        </nav>
      </header>

      <div className="swiper">
        <div className="swiper-wrapper">
          <section id="home" className="swiper-slide">
            <h1>Welcome to My Portfolio</h1>
          </section>
          <section id="profile" className="swiper-slide">
            <h2>Profile</h2>
            <img src="/tongari.jpg" alt="Portfolio" />
            <p>안녕하세요 프론트 엔드 개발자 정다운 입니다.</p>
          </section>
          <section id="skill" className="swiper-slide">
            <h2>Skills</h2>
            <p>나의 기술 스택</p>
          </section>
          <section id="certificate" className="swiper-slide">
            <h2>Projects</h2>
            <p>자격증</p>
          </section>
        </div>
        <div className="swiper-pagination"></div>
      </div>

      <footer style={{ display: "none" }}>
        <p>&copy; 2025 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;