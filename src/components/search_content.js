import React from 'react';
import {ChevronDownIcon} from '@primer/octicons-react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function SearchSection(props) {

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState([100,1000]);
  const [minPrice,setMinPrice] = React.useState(100);
  const [maxPrice,setMaxPrice] = React.useState(1000);
  const [flag,setFlag] = React.useState('normal');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
    if(newValue[0]>newValue[1]){
        setFlag('inverted');
    }
  };

  const [filterStates,setFilterStates]= React.useState({
      checkedA: true,
      checkedB: false,
      checkedC: false,
      checkedD: false,
  })

  function onCheckboxChange(event){
        setFilterStates({...filterStates,[event.target.name]: event.target.checked})
  }

  const [occasionStates, setOccasionStates]=React.useState({
      checkedA: true,
      checkedB: false,
      checkedC: false,
      checkedD: false,
  })

  function onOccasionOptionHandle(event){
      setOccasionStates({...occasionStates,[event.target.name]: event.target.checked})
  }



    return (
        <div className="container-fluid d-flex justify-content-center my-4" id="section-main">
            <div className="wrapper">
                <div className="container-fluid">

                    <div className="row bg-transparent">
                        <div className="col-2 border-bottom py-3">
                           <div className="row p-0 m-0">
                               <div className="col d-flex justify-content-start p-0">
                                    <div className="card-text text-uppercase font-weight-bold " style={{fontSize:"20px"}}>filters</div>
                               </div>
                               <div className="col d-flex justify-content-end align-items-center">
                                    <div className="card-text text-capitalize text-muted" style={{fontSize:"15px"}}>reset all</div>
                               </div>
                           </div>
                        </div>
                        <div className="col-10 border-bottom d-flex align-items-center">
                            <div className="card-text text-uppercase font-weight-bold " style={{fontSize:"20px"}}>results(14)</div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-2 border-right">
                            {/* Filters */}
                            <div class="accordion" id="filteraccordion">
                                <div className="row p-1">
                                    <div className="col p-2 d-flex justify-content-start align-items-center">
                                        <div className="font-weight-bold" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="true" aria-controls="collapseFilter">
                                            Format
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-end align-items-center">
                                        <ChevronDownIcon data-toggle="collapse" data-target="#collapseOne"/>
                                    </div>
                                </div>
                                <div id="collapseFilter" class="collapse show mt-2" data-parent="#filteraccordion">
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-0"
                                                    checked={filterStates.checkedA}
                                                    onChange={onCheckboxChange}
                                                    name="checkedA"
                                                    color="primary"
                                                />
                                            }
                                            label="Buffet"
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-1"
                                                    checked={filterStates.checkedB}
                                                    onChange={onCheckboxChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Mini Buffet"
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-1"
                                                    checked={filterStates.checkedC}
                                                    onChange={onCheckboxChange}
                                                    name="checkedC"
                                                    color="primary"
                                                />
                                            }
                                            label="Lunch Box"
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-1"
                                                    checked={filterStates.checkedD}
                                                    onChange={onCheckboxChange}
                                                    name="checkedD"
                                                    color="primary"
                                                />
                                            }
                                            label="Snack Box"
                                        />
                                    </div>
                                </div>

                            </div>
                            
                            {/* Price */}
                            <div className="row border-top p-2 py-3 border-bottom">
                                <div className="card-text font-weight-bold">Price &#8377; {minPrice} - &#8377; {maxPrice}</div>
                                <div className={classes.root}>
                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        step={100}
                                        min={0}
                                        max={5000}
                                        track={flag}
                                        aria-labelledby="range-slider"
                                    />
                                </div>
                            </div>
                            {/* Occasion */}
                            <div className="w-100">
                                <div className="accordion" id="occasionAccordion">
                                    <div className="row p-1">
                                        <div className="col p-2 d-flex justify-content-start align-items-center">
                                            <div className="font-weight-bold" data-toggle="collapse" data-target="#collapseOccasion" aria-expanded="true" aria-controls="collapseOccasion">
                                                Occasion
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-end align-items-center">
                                            <ChevronDownIcon data-toggle="collapse" data-target="#collapseOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseOccasion" class="collapse show mt-2"  data-parent="#occasionAccordion">
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-0"
                                                    checked={occasionStates.checkedA}
                                                    onChange={onOccasionOptionHandle}
                                                    name="checkedA"
                                                    color="primary"
                                                />
                                            }
                                            label="Birthday Celebration"
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-1"
                                                    checked={occasionStates.checkedB}
                                                    onChange={onOccasionOptionHandle}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Baby Shower"
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-1"
                                                    checked={occasionStates.checkedC}
                                                    onChange={onOccasionOptionHandle}
                                                    name="checkedC"
                                                    color="primary"
                                                />
                                            }
                                            label="House Warning"
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className="py-1"
                                                    checked={occasionStates.checkedD}
                                                    onChange={onOccasionOptionHandle}
                                                    name="checkedD"
                                                    color="primary"
                                                />
                                            }
                                            label="House Party"
                                        />
                                    </div>
                                </div>
                            </div>           
                          
                        </div>
                        <div className="col-10">
                                    {/* Main Content */}
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default SearchSection;