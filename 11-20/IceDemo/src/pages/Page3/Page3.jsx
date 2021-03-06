import React, { Component } from 'react';
import SimpleSlider from './components/SimpleSlider';
import Footer from '../../components/Footer';
import Banner from './components/Banner';
import BrandDisplay from './components/BrandDisplay';
import Header from '../../components/Header';
import DownloadCard from './components/DownloadCard';
export default class Page3 extends Component {
  static displayName = 'Page3';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page3-page">
        <Header />
        <Banner />
        <DownloadCard />
        <SimpleSlider />
        <BrandDisplay />
        <Footer />
      </div>
    );
  }
}
