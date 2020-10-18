import React from 'react';


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

function ItemCard(props){
    return(
        <div className="card" style={{marginLeft:"40px"}}>
             <div className="card-body p-0 m-0">
                 <div className="col-12 p-0">
                      <div className="row-10 d-flex justify-content-center ">
                        <img className="image-fluid" src="./images/recent_food_img_1.jpg" style={{width:"100%",height:"150px"}}/>
                      </div>
                      <div className="row-2">
                            <div className="col-12 p-1">
                                    <div className="m-0 p-0" style={{fontSize:"17px",fontWeight:"bold"}}>Abcd Hotel</div>
                                    <div className="m-0 p-0 text-right card-text" style={{color:"red"}}>Re-order</div>
                                    <div className="m-0 p-0" style={{color:"#c6c7ce"}}>Indra Nagar</div>
                            </div>
                      </div>
                 </div>
             </div>
        </div>
    )
}

export default Landing;