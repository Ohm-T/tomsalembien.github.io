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
        <Content>
          <h1>Professional Experiences :
          </h1>
        </Content>
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
      top: 80px;
      .spline{
      position: absolute;
      margin: 0
      }
`
const Content = styled.div`
  position: relative;
  top: -30px;
  font-size :3rem;
  display: flex;
  color: black;
  flex-direcion: columns;
  gap: 80px;
`