import React, { Component } from 'react'

import Footer from './components/Footer/Footer';

import poster from './img/poster.jpg';
import logo from './img/sf-logo.png';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  handleChange(val){
    this.setState({
      search: val
    })
  }
  search(e){
    e.preventDefault();
    window.location.assign(`https://stockfootage.com/?s=england+${this.state.search}&post_type=product`);
  }
  render() {
    return (
      <div className="App">

        <div className="bg-video-container">
          <video className="bg-video" loop="1" autoPlay="1" playsInline="" muted="1" data-bgvideo="" poster={poster} data-bgvideo-fade-in="500" data-bgvideo-pause-after="120" data-bgvideo-show-pause-play="false" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top">
            <source src="/assets/bg-video.mp4" type="video/mp4"/>
            <source src="/assets/bg-video.mp4" type="video/webm"/>
            <source src="/assets/bg-video.mp4" type="video/ogg"/>
          </video>
        </div>

        <div id="vidtop-content">
          <header>
            <div></div>
            <a className="nav-link" href="https://stockfootage.com/">HOME</a>
            <a className="nav-link" href="https://stockfootage.com/shop">SHOP</a>
            <a className="nav-link" href="https://stockfootage.com/my-account">LOGIN</a>
          </header>
          <div className="interact-box">
            <img src={logo} alt=""/>
            <h1><span style={{color: 'rgb(188, 52, 38)'}}>Uk</span>Footage.com</h1>
            <form className="search" onSubmit={e=>this.search(e)}>
              <input placeholder="Search" onChange={e=>this.handleChange(e.target.value)} value={this.state.search} type="text"/>
            </form>
          </div>
          <div></div>
        </div>

        <div className="info-sec">
          <section>
            <h1>United Kingdom <a className="rf" href="https://en.wikipedia.org/wiki/Royalty-free">Royalty-Free</a> Stock Footage Marketplace (contact us for 4K)</h1>
            <h4 className="sub-banner">UkFootage.com is a division of <a style={{textDecoration:'none', color: '#999'}} href="https://stockfootage.com/">StockFootage.com</a></h4>
          </section>
          <div className="hr-red"/>
          <section className="category-sec">
            <h1>Browse by Category</h1>
            <div className="categories">
						<a href="https://stockfootage.com/?s=england+Bath&post_type=product" className="cat">Bath</a>
						<a href="https://stockfootage.com/?s=england+Cotswolds&post_type=product" className="cat">Cotswolds</a>
						<a href="https://stockfootage.com/?s=england+Big+Ben&post_type=product" className="cat">Big Ben</a>
						<a href="https://stockfootage.com/?s=england+Tower+of+London&post_type=product" className="cat">Tower of London</a>
						<a href="https://stockfootage.com/?s=england+Tower+Bridge&post_type=product" className="cat">Tower Bridge</a>
						<a href="https://stockfootage.com/?s=england+Piccadilly+Circus&post_type=product" className="cat">Piccadilly Circus</a>
						<a href="https://stockfootage.com/?s=england+Westminster+Abbey&post_type=product" className="cat">Westminster Abbey</a>
						<a href="https://stockfootage.com/?s=england+Buckingham+Palace&post_type=product" className="cat">Buckingham Palace</a>
						<a href="https://stockfootage.com/?s=england+St.+Paul's+Cathedral&post_type=product" className="cat">St. Paul's Cathedral</a>
						<a href="https://stockfootage.com/?s=england+London+Eye&post_type=product" className="cat">London Eye</a>
						<a href="https://stockfootage.com/?s=england+River+Thames&post_type=product" className="cat">River Thames</a>
						<a href="https://stockfootage.com/?s=england+St.+James+Park&post_type=product" className="cat">St. James Park</a>
						<a href="https://stockfootage.com/?s=england+Whitehall&post_type=product" className="cat">Whitehall</a>
						<a href="https://stockfootage.com/?s=england+Trafalgar+Square&post_type=product" className="cat">Trafalgar Square</a>
						<a href="https://stockfootage.com/?s=england+Mermaid+Street&post_type=product" className="cat">Mermaid Street</a>
						<a href="https://stockfootage.com/?s=england+Stonehenge&post_type=product" className="cat">Stonehenge</a>
						<a href="https://stockfootage.com/?s=england+Castle+Combe&post_type=product" className="cat">Castle Combe</a>
						<a href="https://stockfootage.com/?s=england+Cliffs+of+Dover&post_type=product" className="cat">Cliffs of Dover</a>
            </div>
          </section>
          <br/>
          <div className="hr-red"/>
          <section className="contributors">
            <h1><span className="contrib-show">Contributors Showcase</span> - Inspired to Create</h1>


            <div className="contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt1" width="350" height="195" src="https://www.youtube.com/embed/9HTEZkTA11Q" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt2" width="350" height="195" src="https://player.vimeo.com/video/60775799" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt3" width="350" height="195" src="https://www.youtube.com/embed/CDMN1aQ6I6c" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="mobile-contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt4" width="250" height="150" src="https://www.youtube.com/embed/9HTEZkTA11Q" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt5" width="250" height="150" src="https://player.vimeo.com/video/60775799" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt6" width="250" height="150" src="https://www.youtube.com/embed/CDMN1aQ6I6c" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <br/>
            <p>Download high quality royalty-free 4K and HD stock video footage clips from the post popular travel locations in the United Kingdom including:  Big Ben, St. Paul's Cathedral, Picadilly, London, Westminster, busy streets, and phone booths.  Contact us to learn more about selling your own stock footage through our online community.  </p>
          </section>
          <br/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
