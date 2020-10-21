import React from 'react';
import {StarFillIcon} from '@primer/octicons-react';
 

function ItemCard(props){   
    return(
        <div className="card rounded-75" style={{marginLeft:"0px"}}>
             <div className="card-body p-0 m-0">
                 <div className="col-12 p-0">
                      <div className="row-10 d-flex justify-content-center ">
                        <img className="image-fluid" src="./images/recent_food_img_1.jpg" style={{width:"100%",height:"150px"}}/>
                      </div>
                      {
                          props.usage === 'mainPart'?
                            <div className="row-2 mb-3">
                                <div className="m-0 px-3 mt-2" style={{fontSize:"17px",fontWeight:"bold"}}>Barbique Delight</div>
                                <div className="m-0 px-3">
                                    <span style={{color:"red"}}>&#8377;199/-</span>
                                    <span style={{marginLeft:"4px",color:"grey"}}>per head - </span>
                                    <span style={{marginLeft:"4px",color:"grey"}}>10 dishes</span>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="button rounded-75" class="btn btn-warning btn-sm px-2">
                                                <img src="./images/star.svg"/>
                                                <span class="text-white ml-2">3.1</span>
                                            </button>
                                            <span style={{marginLeft:"10px"}}>213 ratings</span>
                                            <span style={{marginLeft:"10px", float:"right"}}>
                                                <img src="https://img.icons8.com/color/28/000000/vegetarian-food-symbol.png"/>
                                                <img src="https://img.icons8.com/color/28/000000/non-vegetarian-food-symbol.png"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            :<div className="row-2">
                                <div className="col-12 px-3 py-2">
                                        <h6 className="m-0 p-0" style={{fontSize:"17px",fontWeight:"bold"}}>Abcd Hotel</h6>
                                        <h6 className="m-0 p-0 text-right card-text" style={{color:"red"}}>Re-order</h6>
                                        <h6 className="m-0 p-0" style={{color:"#c6c7ce"}}>Indra Nagar</h6>
                                </div>
                            </div>
                      }
                      

                 </div>
             </div>
        </div>
    )
}

export default ItemCard