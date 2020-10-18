import React from 'react';


function SearchSection(props) {
    return (
        <div className="container-fluid d-flex justify-content-center my-4" id="section-main">
            <div className="wrapper">
                <div className="container-fluid">

                    <div className="row bg-transparent">
                        <div className="col-3 border-bottom py-3">
                           <div className="row p-0 m-0">
                               <div className="col d-flex justify-content-start p-0">
                                    <div className="card-text text-uppercase font-weight-bold " style={{fontSize:"20px"}}>filters</div>
                               </div>
                               <div className="col d-flex justify-content-end align-items-center">
                                    <div className="card-text text-capitalize text-muted" style={{fontSize:"15px"}}>reset all</div>
                               </div>
                           </div>
                        </div>
                        <div className="col-9 border-bottom d-flex align-items-center">
                            <div className="card-text text-uppercase font-weight-bold " style={{fontSize:"20px"}}>results(14)</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 border-right">
                            <div className="row">
                                <div className="col d-flex justigy-content-start border border-dark">
                                    <div className="card-text text-capitalize font-weight-bold" style={{fontSize:"15px"}}>format</div>
                                </div>
                                <div className="col d-flex justigy-content-end">

                                </div>
                            </div>
                            
                        </div>
                        <div className="col-9">

                            <h1>asdsdsd</h1>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default SearchSection;