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

          // 슬라이드 이동 시 활성화된 메뉴 표시 업데이트
          const links = document.querySelectorAll("nav ul li a");
          links.forEach((link) => {
            const slideIndex = Number(link.getAttribute("data-slide"));
            if (slideIndex === swiper.activeIndex) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        },
      },
    });

    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const index = link.getAttribute("data-slide");
        swiper.slideTo(index);

        // 클릭한 메뉴에 active 클래스 추가
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    // 초기 상태: 첫 번째 메뉴 활성화
    document.querySelector('nav ul li a[data-slide="0"]').classList.add("active");
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#" data-slide="0">HOME</a></li>
            <li><a href="#" data-slide="1">ABOUT</a></li>
            <li><a href="#" data-slide="2">SKILLS</a></li>
            <li><a href="#" data-slide="3">PROJECTS</a></li>
          </ul>
        </nav>
      </header>

      <div className="swiper">
        <div className="swiper-wrapper">
          <section id="home" className="swiper-slide">
            <h1>Welcome to My Portfolio</h1>
          </section>
          <section id="about" className="swiper-slide">
  <img src="img/tongari.jpg" alt="Portfolio" />
  <div className="about-content">
    <h2>About</h2>
    <p>안녕하세요. 프론트엔드 개발자를 꿈꾸는 정다운입니다. 사용자 중심의 웹 서비스를 만들기 위해 꾸준히 성장하고 있습니다.</p>
  </div>
</section>

<section id="skill" className="swiper-slide">
  <div className="skills-content">
    <h2>Skills</h2>
    <p>나의 기술 스택</p>
    <div className="skills-grid">
      <div className="skill-item">
        <img src="img/html.png" alt="HTML" />
        <span>HTML</span>
      </div>
      <div className="skill-item">
        <img src="img/css.png" alt="CSS" />
        <span>CSS</span>
      </div>
      <div className="skill-item">
        <img src="img/javascript.png" alt="JavaScript" />
        <span>JavaScript</span>
      </div>
      <div className="skill-item">
        <img src="img/react.png" alt="React" />
        <span>React</span>
      </div>
      <div className="skill-item">
        <img src="img/github.png" alt="GitHub" />
        <span>GitHub</span>
      </div>
    </div>
  </div>
</section>

          <section id="projects" className="swiper-slide">
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
