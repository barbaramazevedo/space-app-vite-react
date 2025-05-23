import { useState } from "react";
import { styled } from "styled-components";
import NavegationItem from "./NavegationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 236px;
`

const Sidebar = ({ onSurpriseMe }) => {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <aside>
            <nav>
                <StyledList>
                    <NavegationItem 
                        activeIcon="/icones/home-ativo.png" 
                        inactiveIcon="/icones/home-inativo.png"
                        active={activeItem === 'home'}
                        onClick={() => setActiveItem('home')}
                    >
                        Home
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/mais-vistas-ativo.png" 
                        inactiveIcon="/icones/mais-vistas-inativo.png"
                        active={activeItem === 'mostViewed'}
                        onClick={() => setActiveItem('mostViewed')}
                    >
                        Most viewed
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/mais-curtidas-ativo.png" 
                        inactiveIcon="/icones/mais-curtidas-inativo.png"
                        active={activeItem === 'mostLiked'}
                        onClick={() => setActiveItem('mostLiked')}
                    >
                        Most liked
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/surpreenda-me-ativo.png" 
                        inactiveIcon="/icones/surpreenda-me-inativo.png"
                        active={activeItem === 'surpriseMe'}
                        onClick={() => {
                            setActiveItem('surpriseMe');
                            onSurpriseMe();
                        }}
                    >
                        Surprise me
                    </NavegationItem>
                </StyledList>    
            </nav>
        </aside>
    )
}

export default Sidebar;