/**
 * Import
 */
import React from 'react';
import post from 'src/data/post';
/**
 * Local import
 */
import './app.scss';
import Twitter from 'src/components/Twitter';

/**
 * Code
 */
class App extends React.Component {

  state = {
    bot: false,
  }

  isBottom(element){
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScroll);
    console.log(this.state.bot);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScroll);
  }
  
  trackScroll = () => {
    //Notre element
    const wrappedElement = document.getElementsByClassName('app-article');
    if (wrappedElement) {
      console.log('root bottom reached');

      /* this.setState({
        bot: true,
      }); */

      document.removeEventListener('scroll', this.trackScroll);
    }
  };


  render() {
    return (
      <div className="app">
        <article className="app-article" >
          <div dangerouslySetInnerHTML={{__html: post}} />
        </article>
        {this.state.bot ? <Twitter /> : ''}
      </div>
    );
  }
} 


/**
 * Export
 */
export default App;
