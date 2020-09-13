import React,{Fragment} from 'react';
import Card,{CardHeader,CardText,CardDivider,CardImage,CardContainer}  from '../../styledComps/card';
import './Advantages.scss';

const Advantages = () => {
    const Advantages=[  
                        {
                            id:'aa0',
                            iconClass:'fas fa-gas-pump',
                            title:'Fuel Cost Included',
                            description:"Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!"
                        },
                        {
                            id:'aa1',
                            iconClass:'fas fa-coins',
                            title:'No Hidden Charges',
                            description:'Our prices include taxes and insurance.What you see is what you really pay!'
                        },
                        {
                            id:'aa2',
                            iconClass:"fas fa-dollar-sign",
                            title:'Flexi Pricing Packages',
                            description:'One size never fits all! Choose a balance of time and kilometers that works best for you.'
                        },
                        {
                            id:'aa3',
                            iconClass:'fas fa-chess-queen',
                            title:'Go Anywhere',
                            description:'Our cars have all-India permits.Just remember to pay state tolls and entry taxes.'
                        },
                        {
                            id:'aa4',
                            iconClass:"fas fa-truck-loading",
                            title:'24x7 Roadside Assistance',
                            description:'We have round-the-clock, pan India partners. Help is never far away from you.'
                        },
                        {
                            id:'aa5',
                            iconClass:"fas fa-car-crash",
                            title:'Damage Insurance',
                            description:'All your bookings include damage insurance! Drive safe, but don’t worry!'
                        }
                    ];
    return (
        <div className="how-it-works-container">
            <CardHeader centered fontSize="2rem"  >The vRooomCar Advantage</CardHeader>
            <CardHeader centered  >We simplified car rentals, so you can focus on what's important to you.</CardHeader>
            <CardContainer >
                {
                    Advantages.map((item,i)=>{
                        return (
                        <Card key={item.id} minWidth="27rem">
                                <i className={item.iconClass} style={{color:"#e55a34",fontSize:"3rem",marginLeft:"12rem",marginTop:"1rem",marginBottom:"1rem"}}></i> 
                            <CardHeader centered >{item.title}</CardHeader>
                            <CardText centered>
                                    {item.description}
                            </CardText>
                        </Card>
                        )
                    })
                }
            </CardContainer>
        </div>
    );
};

export default Advantages;