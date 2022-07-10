import React from 'react'
import styled from 'styled-components'

const BtnFlexBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 40px 20px;
`

const LocationBtn = styled.button`
	width: 100px;
	height: 50px;
	left: 104px;
	top: 682px;
	background: #fff;
	border-radius: 30px;
	border: none;
	cursor: pointer;
`

const LocationButton = ({cities, setCity}) => {
  console.log(cities);
	return (
    <>
      <BtnFlexBox>
        {cities.map((cityName, index) => (
          <LocationBtn key={index} onClick={() => setCity(cityName[0])}>{cityName[1]}</LocationBtn>
        ))}
				</BtnFlexBox>
    </>
  )
}

export default LocationButton