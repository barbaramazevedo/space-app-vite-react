import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png'
import Gallery from './components/Gallery'

import photos from './photos.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const BackGroundGradient =  styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const MainWrapper = styled.main`
  display: flex;
  gap: 100px;
`

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const toToggleFavorite = (photo) => {
    if(photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }

    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
      }

    }))
  }

  return (
    <BackGroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainWrapper>
          <Sidebar />
          <GalleryContainer>
            <Banner
            text="The most complete gallery of space photos!"
            backgroundImage={bannerBackground}
            />
            <Gallery 
              whenSelectPhoto={photo => setSelectedPhoto(photo)}
              toToggleFavorite={toToggleFavorite} 
              photos={galleryPhotos}
            />
          </GalleryContainer>
        </MainWrapper>
        <ModalZoom 
          photo={selectedPhoto} 
          whenClose={() => setSelectedPhoto(null)}
          toToggleFavorite={toToggleFavorite}
        />
      </AppContainer>
    </BackGroundGradient>
  )
}

export default App
