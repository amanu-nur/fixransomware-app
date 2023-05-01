import React from "react";
import Logo from "./../../Assets/logo.png";
import { Link } from "react-router-dom";
import { Language } from "../../Partials";

function Login() {
  return (
    <div>
      <div className="body-sign">
        <div className="sign-left">
          <div className="logo-wrapper">
            <div className="logo-wrapp">
              <img width={36} height={36} src={Logo} />
            </div>
            <Language />
          </div>
          <div className="title-wrapper">
            <span className="title-page">Sign Up</span>
            <span className="ask-sign">
              Already a member?{" "}
              <Link className="link-sign" to="/">
                Login Now
              </Link>
            </span>
          </div>
          <form className="input-body">
            <div className="input-double">
              <input
                type="text"
                className="input-field"
                placeholder="Fullname"
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email Address"
              />
            </div>
            <div className="input-double">
              <input
                type="text"
                className="input-field"
                placeholder="Institution"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Phone Number"
              />
            </div>
            <input
              type="Address"
              className="input-field"
              placeholder="Address"
            />

            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
            <div className="wrapp-submit">
              <div></div>
              <Link to="/home" className="btn btn-outline-primary">
                SIGN UP
              </Link>
            </div>
          </form>
        </div>
        <div className="sign-right">
          <section class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">
              <li id="carousel__slide1" tabindex="0" class="carousel__slide">
                <div class="carousel__snapper">
                  <a href="#carousel__slide3" class="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" class="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
              <li id="carousel__slide2" tabindex="0" class="carousel__slide">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide1" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide3" class="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li id="carousel__slide3" tabindex="0" class="carousel__slide">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide2" class="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" class="carousel__next">
                  Go to next slide
                </a>
              </li>
            </ol>
            <aside class="carousel__navigation">
              <ol class="carousel__navigation-list">
                <li class="carousel__navigation-item">
                  <a
                    href="#carousel__slide1"
                    class="carousel__navigation-button"
                  >
                    Go to slide 1
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a
                    href="#carousel__slide2"
                    class="carousel__navigation-button"
                  >
                    Go to slide 2
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a
                    href="#carousel__slide3"
                    class="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
              </ol>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
