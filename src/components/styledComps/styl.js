import styled,{keyframes} from 'styled-components';

// --bs-blue: #0d6efd;
//     --bs-indigo: #6610f2;
//     --bs-purple: #6f42c1;
//     --bs-pink: #d63384;
//     --bs-red: #dc3545;
//     --bs-orange: #fd7e14;
//     --bs-yellow: #ffc107;
//     --bs-green: #28a745;
//     --bs-teal: #20c997;
//     --bs-cyan: #17a2b8;
//     --bs-white: #fff;
//     --bs-gray: #6c757d;
//     --bs-gray-dark: #343a40;
//     --bs-primary: #0d6efd;
//     --bs-secondary: #6c757d;
//     --bs-success: #28a745;
//     --bs-info: #17a2b8;
//     --bs-warning: #ffc107;
//     --bs-danger: #dc3545;
//     --bs-light: #f8f9fa;
//     --bs-dark: #343a40;

export const Title = styled.h1`
  margin-top:2rem;
  font-size: 1.25em;
  font-weight:400;
  width:20rem;
  padding:0.375rem;
  border-radius:0.375rem;
  margin-left:auto;
  margin-right:auto;
  text-align: center;
  background: palevioletred;
  color: white
`;

export const ButtonPrimary = styled.button` 
    background: #0d6efd;
    color:#fff;
    border-radius:0.25rem;
    border-color:transparent;
    width:auto;
    font-size: 1rem;
    font-weight:500;
    min-width:14rem;
    display:inline-block;
    margin-left:20rem;
    margin-right:auto;
    text-align: center;
    padding-top:0.25rem;
    padding-bottom:0.25rem;
    padding-left:0.875rem;
    padding-right:0.875rem;
    transition: box-shadow 0.2s ease-in-out;
    cursor:pointer;
    box-styling:border-box;
    &:hover {
        background: #0064d3;
        padding-left:0.87rem;
        padding-right:0.87rem;
        -moz-box-shadow: 0 0 0.675rem #bbbbbb;
        -webkit-box-shadow: 0 0 0.675rem #bbbbbb;
        box-shadow: 2px 2px 0.675rem #bbbbbb;
    }
`

export default Title;