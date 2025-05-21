import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png'

const BackGroundGradient =  styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
  margin: 0;
`

function App() {

  return (
    <BackGroundGradient>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <Banner
        text="The most complete gallery of space photos!"
        backgroundImage={bannerBackground}
      />
    </BackGroundGradient>
  )
}

export default App
