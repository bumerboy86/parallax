import './App.css'
import basePic from "./assets/layer-base.png";
import middlePic from "./assets/layer-middle.png";
import frontPic from  "./assets/layer-front.png";
import bgPic from  "./assets/dungeon.jpg";
import viteIco from "./assets/vite.svg";
import gitHubIco from  "./assets/Git_icon.svg"
import typeScriptIco from "./assets/typescript.svg";
import gsapIco from "./assets/gsap.svg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useEffect} from "react";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    useEffect(() => {
        const runAnimation = () => {
            const scrollTop:number = window.scrollY;
            document.body.style.cssText +=  `--scrollTop: ${scrollTop}px`;
        }

        window.addEventListener('scroll', runAnimation);
        return () => {
            window.removeEventListener('scroll', runAnimation);
        };
    }, []);

    return (
    <>gsapIco
        <header className={"main-header"}>
            <div className={"layers"}>
                <div className={"layer__header"}>
                    <div className={"layers__caption"}>react typescript</div>
                    <div className={"layers__title"}>PARALLAX</div>
                </div>
                <div className="layer layer__base" style={{ backgroundImage: `url(${basePic})` }}></div>
                <div className="layer layer__middle" style={{ backgroundImage: `url(${middlePic})` }}></div>
                <div className="layer layer__front" style={{ backgroundImage: `url(${frontPic})` }}></div>
            </div>
        </header>
        <div className="main-article" style={{ backgroundImage: `url(${bgPic})` }}>
            <div className={"main-article__content"}>
                <h2 className={"main-article__header"}>About</h2>
                <p className={"main-article__paragraph"}>Добро пожаловать на сайт с эффектом параллакса! Этот сайт был разработан с использованием инструмента сборки Vite и языка программирования TypeScript. Одним из ключевых компонентов, используемых для создания эффекта параллакса на этом сайте, является библиотека GSAP (GreenSock Animation Platform).</p>
                <p className={"main-article__paragraph"}>GSAP - это мощная библиотека анимации, которая предоставляет широкий набор инструментов для создания плавных и динамичных анимаций веб-страниц. Она позволяет легко управлять анимацией различных элементов на основе различных параметров, таких как прокрутка страницы.</p>
                <p className={"main-article__paragraph"}>Комбинация Vite, TypeScript и GSAP дает нам мощные инструменты для создания впечатляющих анимаций и эффектов на веб-страницах. Мы надеемся, что вы насладитесь просмотром нашего сайта с эффектом параллакса и оцените визуальные возможности, которые они предоставляют.</p>
                <a
                    className={"main-article__link"}
                    href={"https://github.com/bumerboy86"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    >Visit GitHub Page
                </a>
                <div className={"main-article__box"}>
                    <img className={"main-article__icons"} src={viteIco} alt={"vite-ico"}/>
                    <img className={"main-article__icons"} src={gitHubIco} alt={"github-ico"}/>
                    <img className={"main-article__icons"} src={typeScriptIco} alt={"typeScrip-ico"}/>
                    <img className={"main-article__icons"} src={gsapIco} alt={"gsap-ico"}/>
                </div>
            </div>
            <footer className={"copy"}>&copy; 2023 Website. All rights reserved.</footer>
        </div>
    </>
  )
}

export default App;
