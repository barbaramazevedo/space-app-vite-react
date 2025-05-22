import { styled } from 'styled-components'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterStyled = styled.footer`
    max-width: 100%;
    background-color: #04244F;
    color: #FFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    margin-top: 100px;
    text-align: center;
`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    padding: 24px;
`

const StyledListItem = styled.li`
    margin: 0 10px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.2);
    }
`

const IconLink = styled.a`
    color: white;
    font-size: 24px;
`

const Text = styled.p`
    font-size: 16px;
    color: #FFF;
    font-family: 'GandhiSansRegular';
`

const Footer = () => {
    return (
        <FooterStyled>
            <StyledList>
                <StyledListItem>
                    <IconLink href="https://facebook.com" aria-label="Facebook">
                        <FaFacebook />
                    </IconLink>
                </StyledListItem>    
                <StyledListItem>
                    <IconLink href="https://linkedin.com" aria-label="LinkedIn">
                        <FaLinkedin />
                    </IconLink>
                </StyledListItem> 
                <StyledListItem>
                    <IconLink href="https://instagram.com" aria-label="Instagram">
                        <FaInstagram />
                    </IconLink>
                </StyledListItem> 
            </StyledList>
            <Text>
                Developed by Bárbara Azevedo
            </Text>
        </FooterStyled>
    )
}

export default Footer;