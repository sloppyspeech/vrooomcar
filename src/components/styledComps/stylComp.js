import React,{useState,useEffect} from 'react';
import Title,{ButtonPrimary,StyledButton} from './styl';
import Card,{CardHeader,CardText,CardDivider,CardImage,CardContainer} from './card';

const StylComp = () => {
    const cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


    return (  
        <div>
            <CardContainer >
                {
                    cards.map((item,i)=>{
                        return (
                        <Card key={i}>
                            <CardHeader>
                                 Header For Item {item}
                            </CardHeader>
                            <CardImage>
                                <img
                                    src={`${process.env.REACT_APP_URL}/images/carImages/${item}.jpg`}
                                    alt=""
                                />
                            </CardImage>
                                <CardHeader centered  >On Road {item}</CardHeader>
                            <CardText centered>
                                    here we go and see if this OK 2
                                    here we go and see if this OK 2
                                    here we go and see if this OK 2
                            </CardText>
                        </Card>
                        )
                    })
                }
            </CardContainer>
        </div>
    );
}
 
export default StylComp;