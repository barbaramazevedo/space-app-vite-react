import styled from "styled-components";

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
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#mostviewed">Most viewed</a>
                    </li>
                    <li>
                        <a href="#mostliked">Most liked</a>
                    </li>
                    <li>
                        <a href="#new">New</a>
                    </li>
                    <li>
                        <a href="#surprise">Surprise me</a>
                    </li>
                </StyledList>    
            </nav>
        </aside>
    )
}

export default Sidebar;