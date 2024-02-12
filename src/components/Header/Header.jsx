import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: blue;
`

function Header() {
    return (
        <HeaderContainer>
            React Clock With Weather
        </HeaderContainer>
    )
}

export default Header