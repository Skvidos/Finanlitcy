import React from "react";
import "./Footer.scss"
import Logo2 from "./img/logo-2.png"
import Pinterest from "../../ico/pinterest.svg"
import VK from "../../ico/vk.svg"
import Facebook from "../../ico/facebook.svg"
import Instagram from "../../ico/instagram.svg"
import Telegram from "../../ico/telegram.svg"
import Twitter from "../../ico/twitter.svg"
import GooglePlay from "./img/google-play.png"
import AppStore from "./img/app-store.png"

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <a href="#"><img src={Logo2} alt="logo" className="footer__logo-img"></img></a>
                    </div>
                    <nav className="footer__nav">
                        <a href="#" className="footer__nav-link">Offer</a>
                        <a href="#" className="footer__nav-link">О компании</a>
                        <a href="#" className="footer__nav-link">Предлагаемые услуги</a>
                        <a href="#" className="footer__nav-link">Почему выбирают нас?</a>

                    </nav>
                    <nav className="footer__nav">
                        <a href="#" className="footer__nav-link">Отзывы</a>
                        <a href="#" className="footer__nav-link">Личный кабинет</a>
                        <a href="#" className="footer__nav-link">Вопросы и ответы</a>
                        <a href="#" className="footer__nav-link">Наша история</a>
                    </nav>
                    <div className="footer__social-box">
                        <div className="footer__social">
                            <a href="#"><img className="footer__social-item" src={Pinterest} alt="social"></img></a>
                            <a href="#"><img className="footer__social-item" src={VK} alt="social"></img></a>
                            <a href="#"><img className="footer__social-item" src={Facebook} alt="social"></img></a>
                        </div>
                        <div className="footer__social">
                            <a href="#"><img className="footer__social-item" src={Instagram} alt="social"></img></a>
                            <a href="#"><img className="footer__social-item" src={Telegram} alt="social"></img></a>
                            <a href="#"><img className="footer__social-item" src={Twitter} alt="social"></img></a>
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <h1 className="footer__contacts-title">
                            Контакты
                        </h1>
                        <a href="https://goo.gl/maps/RWTJRrNC6oC6pCUc7" className="footer__contacts-location">г. Алматы, ул.
                            Абая, 158
                        </a>
                        <a href="tel:77774528989" className="footer__contacts-tel">тел: +7777 452 89 89
                        </a>
                        <a href="mailto:finanlity@gmail.com" className="footer__contacts-mail">E-mail:
                            finanlity@gmail.com</a>
                        <div className="footer__contacts-time">Часы работы: с 8:00 до 20:00</div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copy">© 2021 Finanlitcy | Финансовая грамотность</div>
                    <div className="footer__links">
                        <a href="#" className="footer__link">Terms & conditions</a>
                        <a href="#" className="footer__link">Privacy policy</a>
                        <a href="#" className="footer__link">Cookies policy</a>
                        <a href="#" className="footer__link">Cookies Settings</a>
                    </div>
                    <div className="footer__apps">
                        <a href="#"><img className="footer__app" src={GooglePlay} alt="google"></img></a>
                        <a href="#"><img className="footer__app" src={AppStore} alt="google"></img></a>
                    </div>
                    <button className="footer__btn"></button>
                </div>

                {/* For phone device */}

                <div className="footer__top-mini">
                    <div className="footer__top-mini__inner">
                        <div className="footer__logo">
                            <a href="#"><img src={Logo2} alt="logo" className="footer__logo-img"></img></a>
                        </div>
                        <div className="footer__copy">© 2021 Finanlitcy | Финансовая грамотность</div>
                    </div>
                </div>

                <div className="footer__nav-mini">
                    <div className="footer__nav-mini__inner">
                        <nav className="footer__nav">
                            <a href="#" className="footer__nav-link">Offer</a>
                            <a href="#" className="footer__nav-link">О компании</a>
                            <a href="#" className="footer__nav-link">Предлагаемые услуги</a>
                            <a href="#" className="footer__nav-link">Почему выбирают нас?</a>
                        </nav>
                        <nav className="footer__nav">
                            <a href="#" className="footer__nav-link">Отзывы</a>
                            <a href="#" className="footer__nav-link">Личный кабинет</a>
                            <a href="#" className="footer__nav-link">Вопросы и ответы</a>
                            <a href="#" className="footer__nav-link">Наша история</a>
                        </nav>
                    </div>
                </div>

                <div className="footer__social-mini">
                    <div className="footer__social-mini__inner">
                        <div className="footer__social-box">
                            <div className="footer__social">
                                <a href="#"><img className="footer__social-item" src={Pinterest}
                                                 alt="social"></img></a>
                                <a href="#"><img className="footer__social-item" src={VK} alt="social"></img></a>
                                <a href="#"><img className="footer__social-item" src={Facebook} alt="social"></img></a>
                            </div>
                            <div className="footer__social">
                                <a href="#"><img className="footer__social-item" src={Instagram}
                                                 alt="social"></img></a>
                                <a href="#"><img className="footer__social-item" src={Telegram} alt="social"></img></a>
                                <a href="#"><img className="footer__social-item" src={Twitter} alt="social"></img></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__apps-mini">
                    <div className="footer__apps-mini__inner">
                        <div className="footer__apps">
                            <a href="#"><img className="footer__app" src={GooglePlay} alt="google"></img></a>
                            <a href="#"><img className="footer__app" src={AppStore} alt="google"></img></a>
                        </div>
                    </div>
                </div>

                <div className="footer__contacts-mini">
                    <div className="footer__contacts-mini__inner">
                        <div className="footer__contacts">
                            <h1 className="footer__contacts-title">
                                Контакты
                            </h1>
                            <a href="https://goo.gl/maps/RWTJRrNC6oC6pCUc7" className="footer__contacts-location">г. Алматы, ул.
                                Абая, 158
                            </a>
                            <a href="tel:77774528989" className="footer__contacts-tel">тел: +7777 452 89 89
                            </a>
                            <a href="mailto:finanlity@gmail.com" className="footer__contacts-mail">E-mail:
                                finanlity@gmail.com</a>
                            <div className="footer__contacts-time">Часы работы: с 8:00 до 20:00</div>
                        </div>
                    </div>
                </div>

                <div className="footer__links-mini">
                    <div class="footer__link-mini__inner">
                        <div class="footer__links">
                            <a href="#" class="footer__link">Terms & conditions</a>
                            <a href="#" class="footer__link">Privacy policy</a>
                            <a href="#" class="footer__link">Cookies policy</a>
                            <a href="#" class="footer__link">Cookies Settings</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer