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

        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

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
            <h1>PORTFOLIO</h1>
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
              <p>기술 스택</p>
              <div className="skills-grid">
                <div className="skill-item"><img src="img/html.png" alt="HTML" /><span>HTML</span></div>
                <div className="skill-item"><img src="img/css.png" alt="CSS" /><span>CSS</span></div>
                <div className="skill-item"><img src="img/js.png" alt="JS" /><span>JS</span></div>
                <div className="skill-item"><img src="img/react.png" alt="React" /><span>React</span></div>
                <div className="skill-item"><img src="img/flutter.png" alt="Flutter" /><span>Flutter</span></div>
                <div className="skill-item"><img src="img/github.png" alt="GitHub" /><span>GitHub</span></div>
                <div className="skill-item"><img src="img/figma.png" alt="Figma" /><span>Figma</span></div>
              </div>
            </div>
          </section>

          <section id="projects" className="swiper-slide">
            <div className="projects-content">
              <h2>Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <img src="img/project1.jpg" alt="프로젝트 1" />
                  <div className="card-info">
                    <h3>[APP] MILSPOON</h3>
                    <p>떠먹여주는 국방지식 밀스푼 앱 입니다.</p>
                    <a href="https://github.com/jdaun0621/milspoon" target="_blank" rel="noopener noreferrer">GitHub 바로가기</a>
                  </div>
                </div>

                <div className="project-card">
                  <img src="img/project2.jpg" alt="프로젝트 2" />
                  <div className="card-info">
                    <h3>[APP] Weather</h3>
                    <p>날씨 API를 사용하여 현재 서울의 날씨와 온도를 알려주는 앱 입니다.</p>
                    <a href="https://github.com/jdaun0621/Weather" target="_blank" rel="noopener noreferrer">GitHub 바로가기</a>
                  </div>
                </div>

                <div className="project-card">
                  <img src="img/project3.jpg" alt="프로젝트 3" />
                  <div className="card-info">
                    <h3>[WEB] Recycle Game</h3>
                    <p>수박게임을 클론하여 변형한 분리수거 게임 웹 프로젝트 입니다.</p>
                    <a href="https://github.com/jdaun0621/suika-recycle-game" target="_blank" rel="noopener noreferrer">GitHub 바로가기</a>
                  </div>
                </div>

                <div className="project-card">
                  <img src="img/project4.jpg" alt="프로젝트 4" />
                  <div className="card-info">
                    <h3>[WEB] To do List</h3>
                    <p>투두리스트 웹 페이지입니다.</p>
                    <a href="https://github.com/jdaun0621/Todo-list" target="_blank" rel="noopener noreferrer">GitHub 바로가기</a>
                  </div>
                </div>
              </div>
            </div>
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
