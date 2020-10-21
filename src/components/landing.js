import React from 'react';
import ItemCard from './itemCard'

function Landing(props) {

    return (
        <div className="container-fluid d-flex justify-content-center" id="recent-orders">
                <div className="wrapper">
                    <div className="container-fluid" id="corousel-section" >
                        <div style={{fontSize:"25px",textTransform:"uppercase",fontWeight:"bold"}} className="mb-2">most frequently ordered</div>
                        <div className="recent-carousel">
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                            <ItemCard/>
                        </div>
                    </div>
                </div>
        </div>
    );
}



export default Landing;