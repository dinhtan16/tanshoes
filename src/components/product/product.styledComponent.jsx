import styled from 'styled-components'

export const ProductBody = styled.div `
  display: flex;
  flex-direction: column;
  transition: all .2s ease-in;
  padding: 10px;
  border: 1px solid transparent;
  height: 100%;
  text-align: left;
  &:hover{
    border: 1px solid grey;
  }
`
export const  ProductBodyTop = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
   `
 export const  ProductSizeMap= styled.div`
    display: flex;
    flex:1;
    gap: 10px;
    overflow: scroll;
`   
 
export const  ProductBodyBottom= styled.div`
 margin-top: auto;
`   
  
  
  
  
