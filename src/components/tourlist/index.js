import React, { Component } from 'react';
import './Tourlist.scss';
import Tour from '../tour/tour';
import { tourData } from "../tourData";
export default class Tourlist extends Component{
    state={
        tours:tourData
    };
    removeTour=id=>{
        console.log(id);
        const {tours}=this.state;
        const sortedTours=tours.filter(tour=>tour.id!==id);
        this.setState({
            tours:sortedTours
        });
    }
    render(){
        const {tours}=this.state;
        return(
            <section>
            {tours.map(tour => (
                <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
              ))}
            
            </section>
        );
    }
}