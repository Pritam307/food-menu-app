import React from 'react';




function Landing(props) {
    
    return (
        <div className="container-fluid d-flex justify-content-center" id="section-main">
                <div className="container mt-3 border border-dark" id="courousel-section" >
                    <ItemCard/>
                </div>
        </div>
    );
}

function ItemCard(props){
    return(
        <div className="card">
             <div className="card-body"></div>
        </div>
    )
}

export default Landing;