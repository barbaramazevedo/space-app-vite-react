import { styled } from "styled-components";

const ListItemStyled = styled.li`

`

const NavegationItem = ({ children, activeIcon,  inactiveIcon, active = false}) => {
    return <ListItemStyled>
        <img src={active ? activeIcon : inactiveIcon } alt="" />
        {children}
    </ListItemStyled>
}

export default NavegationItem;