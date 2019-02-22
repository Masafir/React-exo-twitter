/**
 * Import
 */
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
/**
 * Local import
 */
import './twitter.scss';

/**
 * Code
 */
class Twitter extends React.Component{

  loadTwitter = () => {
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
    
      return t;
    }(document, "script", "twitter-wjs"));
  }
  render() {
    return(
      <div className="twitter">
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=React%20Vie%20!"
          data-size="large"
        >
          <FaTwitter /> Tweet
        </a>
      </div>
    );
  } 
} 


/**
 * Export
 */
export default Twitter;
