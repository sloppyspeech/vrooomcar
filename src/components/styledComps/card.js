import styled from 'styled-components';
const Card =styled.div`
    background:#fff;
    moz-box-shadow: 0.125rem 0.125rem 1.5rem #dddddd;
    -webkit-box-shadow: 0.125rem 0.125rem 1.5rem #dddddd;
    box-shadow: 0.125rem 0.125rem 1.5rem #dddddd;
    font-family:'Roboto';
    margin-left:1.5rem;
    margin-top:1rem;
    margin-bottom:1rem;
    border-radius:0.25rem;
    min-width:${ (props) => props.minWidth ? props.minWidth :"20rem" };
    width:10rem;
    display:block;
`;

export const CardContainer=styled.div`
    margin:1rem;
    display:flex;
    width:100%;
    flex-wrap:wrap;
    background:${ (props) => props.cardBackGroundColor };
`;
export const CardHeader=styled.div`
    display:block;
    background:${ (props) => props.showBackGroundColor ? "#eaeaea" :"#fff" };
    font-weight:500;
    font-size:${ (props) => props.fontSize ? props.fontSize : "1rem" };
    padding:0.5rem;
    border-top-left-radius:0.25rem;
    border-top-right-radius:0.25rem;
    text-align:${ (props) => props.centered ? "center" : "inherit" };
`


export const CardText=styled.div`
    flex-wrap: wrap;
    justify-content:center;
    font-weight:400;
    font-size:0.9rem;
    padding:0.5rem;
    text-align:${ (props) => props.centered ? "center" : "inherit" };
    justify-content: center;

`
export const CardDivider=styled.div`
    border-bottom:0.0625rem solid #ddd;
    height:0.0625rem;
    width:100%;
    padding:0.25rem;
    margin:0.25rem;
`;

export const CardImage=styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    padding:1rem;
    img {
        width:15rem;
        height:10rem;
        background:transparent
    }
`;
export default Card;