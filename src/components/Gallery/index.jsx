import { styled } from 'styled-components'
import Title from '../Title'
import Tags from './Tags'
import Popular from './Popular'
import Image from "./Image"

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`   

const ContainerImages = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
   
    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`

const Gallery = ({ photos = [], whenSelectPhoto, toToggleFavorite, selectedTag, onTagSelect }) => {
    return (
        <>
            <Tags selectedTag={selectedTag} onTagSelect={onTagSelect}/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                    <ContainerImages>
                        {photos.map( photo => <Image
                            whenRequestedZoom={whenSelectPhoto}
                            toToggleFavorite={toToggleFavorite}
                            key={photo.id}
                            photo={photo} />)
                        }    
                    </ContainerImages>
                </FluidSection>
                <Popular/>
            </GalleryContainer>
        </>
    )
}

export default Gallery