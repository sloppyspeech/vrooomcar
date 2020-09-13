import React,{Fragment} from 'react';
import Card,{CardHeader,CardText,CardDivider,CardImage,CardContainer}  from '../../styledComps/card';
import './HowItWorks.scss';

const HowItWorks = () => {
    const howItWorks=[  
                        {
                            id:'a0',
                            iconClass:'fas fa-car',
                            title:'Book',
                            description:'Search and Book your desired car'
                        },
                        {
                            id:'a1',
                            iconClass:'fas fa-file-upload',
                            title:'Verification',
                            description:'Upload Valid Drivers License and Pay a small security deposit'
                        },
                        {
                            id:'a2',
                            iconClass:"fas fa-unlock-alt",
                            title:'Get & Unlock Your Car',
                            description:'Car details are provided to you, unlock the same via otp'
                        },
                        {
                            id:'a3',
                            iconClass:'fas fa-car-side',
                            title:'vRoooom',
                            description:'Fill the necessary info on the website and go for a spin'
                        },
                        {
                            id:'a4',
                            iconClass:"fas fa-undo-alt",
                            title:'Return',
                            description:'Return Your ride'
                        },
                    ];
    return (
        <div className="how-it-works-container">
            <CardHeader centered fontSize="2rem"  >How it all works</CardHeader>
            <CardHeader centered  >Follow 5 simple steps</CardHeader>
            <CardContainer >
                {
                    howItWorks.map((item,i)=>{
                        return (
                        <Card key={item.id} minWidth="15.6rem">
                                <i className={item.iconClass} style={{color:"#e55a34",fontSize:"3rem",marginLeft:"6rem",marginTop:"1rem",marginBottom:"1rem"}}></i> 
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

export default HowItWorks;