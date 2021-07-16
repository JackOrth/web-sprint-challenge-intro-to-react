// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
  border: 2px solid #443e3e;
  margin-top: 1%;
  margin-bottom:1%;
  text-align: center;
  align-items: center;
  color: white;
  background-color: black;
  opacity: 75%;
  &:hover {
      opacity: 100%;
  }

  button{
      color:white;
      background-color: #443e3e;
      padding: 15px;
      border-radius: 20px;
      border: 1px solid white;
      &:hover {
          transform:scale(1.1)
      }
  }
`

export default function Character({name, birth_year}){
    return (
        <StyledCharacter>
            <h2>{name}</h2>
            <button>Birth Year: {birth_year} </button>
        </StyledCharacter>
    )
}