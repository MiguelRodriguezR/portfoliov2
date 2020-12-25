import React from 'react';
import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const LeftInfo = () => {
  return (
    <div className="left-container section-container">
      <div className="top-path">
        <div className="intro">
          <div className="title">
              Migu.<div className="yellow">es</div>()
          </div>
          <div className="subtitle yellow">
              Miguel Rodriguez - Full Stack developer
          </div>
          <div className="i-text">I create awesome <strong className="white">apps</strong> and unique <strong className="white">web experiences</strong>, let's <strong className="white">build</strong> something <strong className="white">together</strong></div>
        </div>
        <div className="menu">
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
      <div className="footer-path">
        <div className="photo">
            <img src="https://avatars1.githubusercontent.com/u/5733463?s=460&u=f31bd217ce82ed57915490e041a80f7e283fec1a&v=4" alt=""/>
        </div>
        <div className="social">
            <div className="s-network">
                <div className="s-n-ico"><FontAwesomeIcon icon={faGithub} /></div>
                <div className="s-n-text">Github</div>
                <div className="s-n-ico"><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            </div>
            <div className="s-network">
                <div className="s-n-ico"><FontAwesomeIcon icon={faTwitter} /></div>
                <div className="s-n-text">Twiter</div>
                <div className="s-n-ico"><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
