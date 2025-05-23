import Title from "../../Title"
import { styled } from "styled-components"
import spaceData from '@/data/spaceData.json'

const ColumnPhotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;    
`

const ButtonPopular = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`

const Popular = ( ) => {
    return <>
        <section>
            <Title $alignment="center">Trend photos</Title>
            <ColumnPhotos>
                {spaceData.trends.map(trend => <Image key={trend.id} src={trend.path} alt={trend.alt}/>)}
            </ColumnPhotos>
            <ButtonPopular>View more</ButtonPopular>
        </section>
    </>
}

export default Popular