import React from 'react';
import {ChevronDownIcon,ChevronUpIcon} from '@primer/octicons-react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import ItemCard from './itemCard';

function SearchSection(props) {

  const useStyles = makeStyles({
    root: {
      width: 300,
      marginTop: 15,
      marginBottom: 10
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState([100,1000]);
  const [minPrice,setMinPrice] = React.useState(100);
  const [maxPrice,setMaxPrice] = React.useState(1000);
  const [flag,setFlag] = React.useState('normal');
  const [filterArrowState,setFilterArrow] = React.useState(false);
  const [occasionArrowState,setOccasionArrow] = React.useState(false);

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

  function toggleFilterArrow(){
    setFilterArrow(!filterArrowState)
  }
  function toogleOccasionArrow(){
    setOccasionArrow(!occasionArrowState)
  }


    return (
        <div className="container-fluid d-flex justify-content-center my-4" id="section-main">
            <div className="wrapper">
                <div className="container-fluid">

                    <div className="row bg-transparent">
                        <div className="col-md-2 border-bottom py-3">
                           <div className="row p-0 m-0">
                               <div className="col d-flex justify-content-start p-0">
                                    <div className="card-text text-uppercase font-weight-bold " style={{fontSize:"20px"}}>filters</div>
                               </div>
                               <div className="col d-flex justify-content-end align-items-center">
                                    <div className="card-text text-capitalize text-muted" style={{fontSize:"15px"}}>reset all</div>
                               </div>
                           </div>
                        </div>
                        <div className="col-md-10 border-bottom d-flex align-items-center">
                            <div className="card-text text-uppercase font-weight-bold" id="results_header" style={{fontSize:"20px"}}>results(14)</div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-2 border-right">

                            {/* Filters */}
                            <div class="accordion" id="filteraccordion">
                                <div className="row p-1">
                                    <div className="col p-2 d-flex justify-content-start align-items-center" >
                                        <div className="font-weight-bold" >
                                            Format
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-end align-items-center">
                                        <div data-toggle="collapse" data-target="#collapseFilter" aria-expanded="true" style={{cursor:"pointer"}} aria-controls="collapseFilter" onClick={toggleFilterArrow}>
                                            {
                                                filterArrowState?<ChevronDownIcon />:<ChevronUpIcon/>
                                            }
                                         </div>
                                    </div>
                                </div>
                                <div id="collapseFilter" class="collapse mt-2" data-parent="#filteraccordion">
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
                                            <div className="font-weight-bold" >
                                                Occasion
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-end align-items-center">
                                            <div data-toggle="collapse" data-target="#collapseOccasion" aria-expanded="true" aria-controls="collapseOccasion" style={{cursor:"pointer"}} onClick={toogleOccasionArrow}>
                                                {
                                                    occasionArrowState?<ChevronDownIcon/>:<ChevronUpIcon/>
                                                }
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseOccasion" class="collapse  mt-2"  data-parent="#occasionAccordion">
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
                        <div className="col-md-10">
                            <div className="row mt-2">
                                <div className="col-md-7 d-flex justify-content-start align-items-center">
                                    <SelectionChips/>
                                </div>
                                <div className="col-md-5 d-flex justify-content-end align-items-center">
                                    <SortBySection/>
                                </div>
                            </div>
                            <div className="card-section">

                                <div className="row mt-4">
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <ItemCard usage={'mainPart'}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

function SortBySection(props){

    const useStyles = makeStyles((theme) => ({
        formControl: {
          minWidth: 280,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [type, setType] = React.useState('None');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return(
        <div className="row w-100 m-0">
            <div className="col-md-4 px-0 d-flex align-items-center justify-content-md-end justify-content-start">
                <div className="card-text text-end font-weight-bold mt-md-0 mt-4">Sort by:</div>
            </div>
            <div className="col-md-8 px-0 d-flex align-items-center justify-content-md-end justify-content-center">
                <FormControl variant="outlined" className={classes.formControl}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={type}
                        onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Most Popular'}>Most Popular</MenuItem>
                    <MenuItem value={'Highest Price'}>Highest Price</MenuItem>
                    <MenuItem value={'Lowest Price'}>Lowest Price</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}


function SelectionChips(props){

    const useStyles = makeStyles((theme) => ({
        chip: {
            margin: theme.spacing(0.5),
        },
    }));
    

    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return(
        <div>
            {chipData.map((data) => {
                return (
                    <Chip
                        key={data.key}
                        className={classes.chip}
                        label={data.label}
                        onDelete={handleDelete(data)}
                    />
                );
            })}
        </div>
    )
}


export default SearchSection;