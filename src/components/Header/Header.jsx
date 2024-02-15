import styled from "styled-components";
import "./header.css"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import desktopWinter from "../../assets/images/desktop-winter-img.jpg";

const HeaderContainer = styled.header`
    background: url(${desktopWinter}) no-repeat center center;
    width: 100vw;
    height: 60vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Hour = styled.span`
    color: white;
    font-size: 10em;
    font-weight: 500;
`

const TextContainer = styled.div`
    display: flex;
    color: white;
    font-size: 2em;
    align-items: center;
    justify-content: center;
`

const Greeting = styled.h1`
    color: white;
    font-size: 1.35em;
    font-weight: 300;
    text-align: start;
    margin: 0 0 0 10px;
`

const newDate = new Date();
const currentHour = newDate.toLocaleTimeString("pt-BR", {
    timeStyle: "short",       //Serão retornado apenas horas e minutos.  
    hour12: false,            //Formato de 24h, suprimindo sufixos AM e PM.
    numberingSystem: "latn"   //Resulado em algarismos indo-arábicos.
  });
const handleGreeting = currentHour >= 5 && currentHour <= 12 ? 'morning' : currentHour >= 12 && currentHour <= 18 ? 'afternoon' : 'evening';
const moonDisplay = currentHour >= 5 && currentHour < 18 ? 'moon__icon d_none' : 'moon__icon';
const sunDisplay = currentHour >= 5 && currentHour < 18 ? 'sun__icon' : 'sun__icon  d_none';


function Header() {
    return (
        <HeaderContainer>
            <TextContainer>
                <FaMoon className={moonDisplay} />
                <FaSun className={sunDisplay} />
                <Greeting>
                    Good {handleGreeting}!
                </Greeting>
            </TextContainer>
            <Hour>{currentHour}</Hour>
        </HeaderContainer>
    )
}

export default Header;