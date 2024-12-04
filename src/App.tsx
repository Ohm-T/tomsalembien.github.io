import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'


export default function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <About></About>
      <Wrapper>
        <Spline scene="https://prod.spline.design/pQ-gTKmbS7R2heXz/scene.splinecode" />
      </Wrapper>
      
      <Footer></Footer>
    </>
  )
}

const Wrapper = styled.section`
      font-family: "Spline Sans", sans-serif;
      font-size: 16x;
      color: blacklist;
      position: relative;
`