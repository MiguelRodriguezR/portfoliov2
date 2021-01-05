import React, { useEffect, useRef } from "react";
import "./layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const LeftInfo = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const itextRef = useRef(null);
  const itextRef2 = useRef(null);
  const itextRef3 = useRef(null);
  const menuRef = useRef(null);
  const footerRef = useRef(null);

  const references = [
    titleRef,
    subtitleRef,
    itextRef,
    itextRef2,
    itextRef3,
    menuRef,
  ];

  useEffect(() => {
    references.forEach((ref, index) => {
      gsap.from(ref.current, {
        autoAlpha: 0,
        y: 200,
        ease: "power4",
        duration: 1,
        delay: index * 0.1 + 0.2,
      });
    });

    gsap.from(footerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "none",
      delay: 1.5,
    });
  }, []);

  return (
    <div className="left-container section-container">
      <div className="top-path">
        <div className="intro">
          <div className="uncutable">
            <div className="title" ref={titleRef}>
              {" "}
              migu.<div className="yellow">es</div>(){" "}
            </div>
          </div>
          <div className="uncutable">
            <div className="subtitle yellow" ref={subtitleRef}>
              Miguel Rodriguez - Full Stack developer
            </div>
          </div>
          <div className="i-text-container">
            <div className="uncutable">
              <div className="i-text" ref={itextRef}>
                I create awesome <strong className="white">apps</strong> and{" "}
              </div>
            </div>
            <div className="uncutable">
              <div className="i-text" ref={itextRef2}>
                unique <strong className="white">web experiences</strong>, let's{" "}
              </div>
            </div>
            <div className="uncutable">
              <div className="i-text" ref={itextRef3}>
                <strong className="white">build</strong> something{" "}
                <strong className="white">together</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="uncutable">
          <div className="menu" ref={menuRef}>
            <div className="option">
              <div className="opt-num">1</div>
              <div className="opt-separator"></div>
              <div className="opt-text">My Work</div>
            </div>
            <div className="option">
              <div className="opt-num">2</div>
              <div className="opt-separator"></div>
              <div className="opt-text">About</div>
            </div>
            <div className="option">
              <div className="opt-num">3</div>
              <div className="opt-separator"></div>
              <div className="opt-text">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-path" ref={footerRef}>
        <div className="photo">
          <img
            src="https://avatars1.githubusercontent.com/u/5733463?s=460&u=f31bd217ce82ed57915490e041a80f7e283fec1a&v=4"
            alt=""
          />
        </div>
        <div className="social">
          <a
            className="s-network"
            href="https://github.com/MiguelRodriguezR"
            target="_blank"
          >
            <div className="s-n-ico">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="s-n-text">Github</div>
            <div className="s-n-ico">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
          <a
            className="s-network"
            href="mailto:miguel.a.rodriguez.r@gmail.com"
            target="_blank"
          >
            <div className="s-n-ico">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="s-n-text">Email</div>
            <div className="s-n-ico">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
          <a
            className="s-network"
            href="https://twitter.com/MiguelRodriR"
            target="_blank"
          >
            <div className="s-n-ico">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="s-n-text">Twitter</div>
            <div className="s-n-ico">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
