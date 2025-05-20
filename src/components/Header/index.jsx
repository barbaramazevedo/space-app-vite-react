import { styled } from 'styled-components';
import TextField from '../TextField';

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
      max-width: 212px;
    }
`;

const Header = () => {
  return (
    <HeaderStyled>
        <img src="./public/imagens/logo.png" alt="Logo" />
        <TextField />
    </HeaderStyled>
  );
}

export default Header;