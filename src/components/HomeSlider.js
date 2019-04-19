import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
import Uo from '../images/uo.jpg';
import Dra from '../images/dra.jpg';
import Qbox from '../images/qbox.jpg';

class HomeSlider extends Component {

   
   render() {
        return (
            <Carousel>
                <div>
                    <img src={Uo} />
                    <p className="legend">Uniorders is a Powerful, Quick, and Simple web-based online orders application which increase visibility and control of all orders management processes. Uniorders customers benefit from increased accuracy, reduced orders processing costs, and resolved real-time issues that come up every day. Uniorders also speed up fulfillment.......</p>
                </div>
                <div>
                    <img src={Dra}  />
                    <p className="legend">Darajtee is a dockless bike (anywhere pickup, anywhere drop) sharing system solution which offers bike sharing service to fulfill short distance trips. We are committed to providing you an easy, healthy, convenient, reliable and environment friendly way to transport by combining advanced idea with IoT (Internet of Things) tech.......</p>
                </div>
				<div>
                    <img src={Qbox}  />
                    <p className="legend">A multi languages, cross platform online examination system, support any operating system including (windows, Linux, Mac, tablets, android …). The software allows add, edit, delete, schedule tests, quizzes, exams with reports generation, Online examination system provides a basis for effective online exams in a professional .........</p>
                </div>
            </Carousel>
        );
    }
}export default HomeSlider;
 