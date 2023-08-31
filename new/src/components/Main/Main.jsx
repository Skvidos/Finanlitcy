import React from "react";
import "./Main.scss"
import Post1 from "./img/post-img1.png"
import Post2 from "./img/post-img2.png"
import Slider1 from "./img/slider/1.png"
import Slider2 from "./img/slider/2.png"
import Slider3 from "./img/slider/3.png"
import Img from "./img/img.png"

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="post__box">
                    <div className="post__box-wrapper">

                        <div className="post__content">
                            <h1 className="post__title">Кто мы такие?</h1>
                            <p className="post__text">Мы компания, которая помогает вам разобраться в финансовой грамотности и
                                помочь
                                вам сохранить или сэкономить ваши денежные средства.
                            </p>
                            <p className="post__text">В первую очередь вы должны понимать, что финансовая грамотность – это
                                знания и
                                навыки, которые помогают принимать взвешенные и разумные решения в отношении финансов. Чтобы
                                считаться финансово грамотным, нужно разбираться в основных финансовых понятиях,
                                ориентироваться
                                в
                                услугах финансовых институтов и использовать их с осознанием плюсов, минусов и рисков,
                                правильно
                                оценивать ситуацию на рынке, управлять финансами: вести бюджет, планировать траты,
                                накапливать
                                сбережения и по возможности избегать долгов.
                                И поэтому обращаясь к нам, вы можете планировать свой бюджет, смотреть на ваши расходы и
                                доходы
                                за
                                год, месяц, либо неделю.
                            </p>
                        </div>
                        <div className="post__img">
                            <img src={Post1} alt="post"></img>
                        </div>
                    </div>
                </div>

                <div className="post__box">
                    <div className="post__box-wrapper">
                        <div className="post__content">
                            <h1 className="post__title">наша история</h1>
                            <p className="post__text">Наша компания была основана в 1996 году, а в сеть мы вышли в 2000 году. Мы
                                были не очень популярны, но в дальнейшем к нам стали обращаться все больше и больше людей. И
                                из-за этого от маленькой компании по обучению финансовой грамотности мы превратились в
                                большую
                                компанию.
                            </p>
                        </div>
                        <div className="post__img">
                            <img src={Post2} alt="post"></img>
                        </div>
                    </div>
                </div>

                <div className="post__box">
                    <div className="post__slider-title">
                        <h1 className="post__title">наши услуги</h1>
                        <a href="#" className="post__more">ПОДРОБНЕЕ</a>
                    </div>
                    <div className="post__slider">
                        <div className="post__slider-item">
                            <img src={Slider1} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Составление личного финансового плана
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider2} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Консультация со специалистами
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider3} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Помощь в получении финансирования
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider2} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Бизнес планирование, составление бизнес плана
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider1} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Составление личного финансового плана
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider2} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Консультация со специалистами
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider3} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Помощь в получении финансирования
                                </h2>
                        </div>

                        <div className="post__slider-item">
                            <img src={Slider2} alt="img" className="post__slider-bg"></img>
                                <h2 className="post__slider-text">
                                    Бизнес планирование, составление бизнес плана
                                </h2>
                        </div>
                    </div>
                </div>

                <div className="post__box">
                    <h1 className="post__title">почему выбирают нас?</h1>
                    <img src={Img} alt="" className="post__img-full"></img>
                </div>

                <div className="post__box">
                    <h1 className="post__title">отзывы наших клиентов</h1>
                    <div className="post__slider-reviews-1">
                        <div className="post__reviews-item">
                            <div className="post__reviews__name-box">
                                <img src="https://via.placeholder.com/75" alt="" className="post__reviews-avatar"></img>
                                    <div className="post__reviews__client">
                                        <div className="post__reviews-name">Имя Фамилия</div>
                                        <div className="post__reviews-rating">Оценка: положительная</div>
                                    </div>
                            </div>
                            <div className="post__reviews-text">
                                Очень нравится данный сайт. Теперь мне реально очень удобно смотреть за моими финансами!
                                Спасибо.
                            </div>
                        </div>

                        <div className="post__reviews-item">
                            <div className="post__reviews__name-box">
                                <img src="https://via.placeholder.com/75" alt="" className="post__reviews-avatar"></img>
                                    <div className="post__reviews__client">
                                        <div className="post__reviews-name">Имя Фамилия</div>
                                        <div className="post__reviews-rating">Оценка: положительная</div>
                                    </div>
                            </div>
                            <div className="post__reviews-text">
                                Очень нравится данный сайт. Теперь мне реально очень удобно смотреть за моими финансами!
                                Спасибо.
                            </div>
                        </div>

                        <div className="post__reviews-item">
                            <div className="post__reviews__name-box">
                                <img src="https://via.placeholder.com/75" alt="" className="post__reviews-avatar"></img>
                                    <div className="post__reviews__client">
                                        <div className="post__reviews-name">Имя Фамилия</div>
                                        <div className="post__reviews-rating">Оценка: положительная</div>
                                    </div>
                            </div>
                            <div className="post__reviews-text">
                                Очень нравится данный сайт. Теперь мне реально очень удобно смотреть за моими финансами!
                                Спасибо.
                            </div>
                        </div>

                        <div className="post__reviews-item">
                            <div className="post__reviews__name-box">
                                <img src="https://via.placeholder.com/75" alt="" className="post__reviews-avatar"></img>
                                    <div className="post__reviews__client">
                                        <div className="post__reviews-name">Имя Фамилия</div>
                                        <div className="post__reviews-rating">Оценка: положительная</div>
                                    </div>
                            </div>
                            <div className="post__reviews-text">
                                Очень нравится данный сайт. Теперь мне реально очень удобно смотреть за моими финансами!
                                Спасибо.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Main