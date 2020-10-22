import React from 'react';
import ItemCard from './itemCard'

function Landing(props) {

    const img_list=[
        './images/caousel_images/img1.jpeg',
        './images/caousel_images/img2.jpeg',
        './images/caousel_images/img3.jpeg',
        './images/caousel_images/img4.jpeg',
        './images/caousel_images/img5.jpeg',
        './images/caousel_images/img6.jpeg',
        './images/caousel_images/img7.jpeg',
        './images/caousel_images/img8.jpeg'
    ]
    return (
       <div className="container-fluid d-flex justify-content-center" id="recent-orders">
              <div className="wrapper">
                   <div className="container-fluid" id="corousel-section" >
                        <div style={{fontSize:"25px",textTransform:"uppercase",fontWeight:"bold"}} className="mb-2">most frequently ordered</div>
                        <div className="recent-carousel">
                          {
                              img_list.map((item)=>(
                                  <ItemCard image={item}/>
                              ))
                          }
                        </div>
                    </div>
                </div>
        </div>
    );
}



export default Landing;