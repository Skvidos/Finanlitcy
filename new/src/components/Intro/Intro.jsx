import React from "react";
import "./Intro.scss";
import BgIntro from "./img/bg-intro.png"
const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__wrapper">
                    <div className="intro__content">
                        <h1 className="intro__slogan">Не знаете, как повысить свою финансовую грамотность? Или не можете
                            уследить за вашими деньгами?
                        </h1>
                        <p className="intro__text">Тогда вы пришли туда куда нужно! Здесь мы предоставляем вам услуги по
                            учету
                            личных расходов и доходов, планирование бюджета и сбора статистики. </p>
                        <p className="intro__text">А также у нас действует скидки до 50% на все виды наших услуг.
                            Торопитесь,
                            скидка будет действительна до 01.03.21 года!</p>
                        <a href="#" className="intro__btn">Регистрация</a>
                    </div>
                </div>
            </div>
            <div className="intro__img">
                <img src={BgIntro} alt="bg"></img>
            </div>
        </section>
    );
};

export default Intro