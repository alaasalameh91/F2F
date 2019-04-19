import React, { Component } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomeSlider from './HomeSlider.js';

class HomePage extends Component {
    render() {
        return (
            <div class="jumbotron">
                <h5>Projects</h5>
                <div class="card">
                    <div class="card-body">
                        <div class="card-text row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <HomeSlider />
                            </div>
                            <div class="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;


