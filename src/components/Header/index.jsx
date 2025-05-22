import { styled } from 'styled-components';
import TextField from '../TextField';
import { useEffect, useState } from 'react';

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
      max-width: 212px;
    }
`;

const Header = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(inputValue);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [inputValue, onSearchChange]);

  return (
    <HeaderStyled>
      <img src="/imagens/logo.png" alt="Logo" />
      <TextField 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </HeaderStyled>
  );
}

export default Header;