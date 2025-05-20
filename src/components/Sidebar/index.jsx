import { styled } from "styled-components";
import NavegationItem from "./NavegationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavegationItem 
                        activeIcon="/icones/home-ativo.png" 
                        inactiveIcon="/icones/home-inativo.png"
                        active={true}
                    >
                        Home
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/mais-vistas-ativo.png" 
                        inactiveIcon="/icones/mais-vistas-inativo.png"
                    >
                        Most viewed
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/mais-curtidas-ativo.png" 
                        inactiveIcon="/icones/mais-curtidas-inativo.png"
                    >
                        Most liked
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/novas-ativo.png" 
                        inactiveIcon="/icones/novas-inativo.png"
                    >
                        New
                    </NavegationItem>
                    <NavegationItem 
                        activeIcon="/icones/surpreenda-me-ativo.png" 
                        inactiveIcon="/icones/surpreenda-me-inativo.png"
                    >
                        Surprise me
                    </NavegationItem>
                </StyledList>    
            </nav>
        </aside>
    )
}

export default Sidebar;