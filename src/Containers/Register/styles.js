import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
background: url(${Background});
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const ContainerItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 526px;
height: 664px;

background: #373737;
box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
border-radius: 0 10px 10px 0;

h1{
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
margin-top: 19px;

color: #FFFFFF;

}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
margin: 20px 0 3px 0;

color: #FFFFFF;
`
export const Error = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #CC1717;
margin-top: 3px;
`

export const Input = styled.input`
display: flex;
flex-direction: column;
width: 391.42px;
height: 38.32px;

background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
padding-left: 10px;
border: ${props => props.error ? '3px solid #CC1717' : 'none'};
`
export const Link = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
a{
    cursor: pointer;
    text-decoration: underline;
}
`
