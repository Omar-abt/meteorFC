import React from "react";
import Form from 'react-bootstrap/Form';

import Navbar from "./Navbar"
import ProgramSearchCard from "./ProgramSearchCard"
import programSearchData from "../data/ProgramSearchData"

export default function Search(props) {

    const [filterData, setFilterData] = React.useState(
        {
            skill: "",
            age: "",
            date: ""
        }
    )

    const [filteredPrograms, setFilteredPrograms] = React.useState(programSearchData);


    function handleFilterChange(event) {
        const {name, value} = event.target;
        setFilterData(prevFilterData => {
            return {
                ...prevFilterData,
                [name]: value
            }
        });
    }

    React.useEffect(() => {
        const filteredData = programSearchData.filter(item => {
            if (
                (filterData.age === '' || item.age === filterData.age) &&
                (filterData.skill === '' || item.skill === filterData.skill) &&
                (filterData.date === '' || item.date === filterData.date)
            ) {
                return true;
            }
            return false;
        });

        setFilteredPrograms(filteredData);
    }, [filterData]);


    const programSearchCards = filteredPrograms.map(item => (
        <ProgramSearchCard 
            leagueName={item.leagueName}
            skill={item.skill}
            age={item.age}
            date={item.date}
            img={item.img}
        />
    ));
    

    return (
        <div className="search" id="search-section">
            <Navbar french={props.french} changeLanguage={props.changeLanguage}/>
            <div className="container-fluid container-formatting">
                <div className="row g-0">
                    <div className="col-3">
                        <div className="filters-col">
                            <h2 style={{marginBottom: "40px"}}>Filters</h2>
                            <div className="search-form-group">
                                <Form.Label className="search-form-label" htmlFor="skill-form">Skill Level</Form.Label>
                                <Form.Select 
                                    className="search-form"
                                    id="skill-form"
                                    value={filterData.skill}
                                    onChange={handleFilterChange}
                                    name="skill"
                                >
                                    <option value=""> - Select - </option>
                                    <option value="Recreational">Recreational</option>
                                    <option value="Semi-Pro">Semi-professional</option>
                                    <option value="Professional">Professional</option>
                                </Form.Select>
                            </div>

                            <div className="search-form-group">
                                <Form.Label className="search-form-label" htmlFor="age-form">Age</Form.Label>
                                <Form.Select 
                                    className="search-form" 
                                    id="age-form"
                                    value={filterData.age}
                                    onChange={handleFilterChange}
                                    name="age"
                                >
                                    <option value=""> - Select - </option>
                                    <option value="4-12">4-12 years</option>
                                    <option value="12-18">12-18 years</option>
                                    <option value="18-35">18-35 years</option>
                                    <option value="35+">35+ years</option>
                                </Form.Select>
                            </div>

                            <div className="search-form-group">
                                <Form.Label className="search-form-label" htmlFor="season-form">Season Dates</Form.Label>
                                <Form.Select 
                                    className="search-form"
                                    id="season-form"
                                    value={filterData.date}
                                    onChange={handleFilterChange}
                                    name="date"
                                >
                                    <option value=""> - Select - </option>
                                    <option value="Sep-Dec">September-December</option>
                                    <option value="Jan-Apr">January-April</option>
                                    <option value="May-Aug">May-August</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="programs-col">
                            <div className="row">
                                {programSearchCards}
                            </div>                                                        
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}