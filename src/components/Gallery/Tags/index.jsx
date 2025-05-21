import { styled } from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const StyledTitle = styled.h3`
    color: #D9D9D9;
    font-size: 20px;
    margin: 0;
    font-family: 'GandhiSansRegular';
    font-weight: 300;
`

const TagButton = styled.button`
    font-size: 20px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    font-family: 'GandhiSansRegular';
    font-weight: 100;
    &:hover {
        border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = () => {
    return <TagsContainer>
        <StyledTitle>Search for tags:</StyledTitle>
        <Div>
            {tags.map(tag => (
                <TagButton key={tag.id}>{tag.title}</TagButton>
            ))}
        </Div> 
    </TagsContainer>
}

export default Tags
