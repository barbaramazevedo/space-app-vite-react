import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png'
import Gallery from './components/Gallery'

import spaceData from '/src/data/spaceData.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

const BackGroundGradient =  styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const MainWrapper = styled.main`
  display: flex;
  gap: 10px;
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

export const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(spaceData.photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [selectedTag, setSelectedTag] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

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

  const filteredPhotos = galleryPhotos.filter(photo => {
  const hasSearchText = searchText.trim() !== ''
  const hasTagFilter = selectedTag !== 0

  if (showOnlyFavorites && !photo.favorite) return false
  
  if (!hasSearchText && !hasTagFilter) return true
  
  const matchesTag = selectedTag === 0 || photo.tagId === selectedTag
  const matchesSearch = photo.title.toLowerCase().includes(searchText.toLowerCase())
  
  if (hasSearchText && hasTagFilter) {
    return matchesTag || matchesSearch
  }
  
  return hasSearchText ? matchesSearch : matchesTag
  })

  const getRandomPhotos = () => {
  const shuffled = [...spaceData.photos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

const handleSurpriseMe = () => {
  setGalleryPhotos(getRandomPhotos());
  setSelectedTag(0);
  setSearchText('');
}

const handleMostLiked = () => {
    setShowOnlyFavorites(true)
    setSelectedTag(0)
    setSearchText('')
}

const handleViewPhoto = (photo) => {
  setGalleryPhotos(prevPhotos =>
    prevPhotos.map(p =>
      p.id === photo.id ? { ...p, views: (p.views || 0) + 1 } : p
    )
  );
};

const handleMostViewed = () => {
  const sorted = [...galleryPhotos].sort((a, b) => b.views - a.views);
  const topFour = sorted.slice(0, 4);
  setGalleryPhotos(topFour);
  setSelectedTag(0);
  setSearchText('');
  setShowOnlyFavorites(false);
};

  return (
    <BackGroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header onSearchChange={setSearchText}/>
        <MainWrapper>
          <Sidebar 
            onSurpriseMe={handleSurpriseMe}
            onMostLiked={handleMostLiked}
            handleMostViewed={handleMostViewed} 
          />
          <GalleryContainer>
            <Banner
              text="The most complete gallery of space photos!"
              backgroundImage={bannerBackground}
            />
            <Gallery 
              whenSelectPhoto={photo => setSelectedPhoto(photo)}
              toToggleFavorite={toToggleFavorite} 
              photos={filteredPhotos} 
              selectedTag={selectedTag}
              onTagSelect={setSelectedTag}
            />
          </GalleryContainer>
        </MainWrapper>
      </AppContainer>
      <ModalZoom 
          photo={selectedPhoto} 
          whenClose={() => setSelectedPhoto(null)}
          toToggleFavorite={toToggleFavorite}
          onViewPhoto={handleViewPhoto}
        />
        <Footer />
    </BackGroundGradient>
  )
}

export default App
