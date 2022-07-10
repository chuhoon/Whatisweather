import React from 'react'
import styled from 'styled-components'
import LocationLogo from '../assets/location.svg'
import CloudyImg from '../assets/cloudy.svg' 
import LocationButton from '../components/LocationButton'

const WeatherColSection = styled.section`
	margin: 100px auto;
	width: 500px;
	border-radius: 20%;
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom, #3a7bd5, #3a6073);
`

const LocationRowBox = styled.div`
	width: 200px;
	margin: 50px auto 20px;
	text-align: center;
`

const LocationLogoImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 5px;
`

const LocationSpan = styled.span`
	font-style: normal;
	font-weight: 700;
	font-size: 23px;
	line-height: 21px;
	color: #fff;
`

const CloudyLogoImg = styled.img`
	width: 180px;
	height: 156px;
`

const CurrentDate = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 14px;
	color: #E8E8E8;
	position: absolute;
	bottom: 12px;
	left: 27px;
`

const TempSpan = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 100px;
	line-height: 118px;
	color: #FFFFFF;
	text-align: center;
`

const TodayWeatherSpan = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 38px;
	line-height: 56px;
	color: #FAFD74;
	text-align: center;
`

const WeatherRowBox = styled.div`
	display: flex;
	margin: 0 auto;
`

const WeatherColBox = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

// destructoring
const WeatherPage = ({weather, cities, setCity}) => {
	console.log("weather?", weather);
	console.log('cities', cities);
	return (
		<>
			<WeatherColSection>
				<LocationRowBox>
					<LocationLogoImg src={LocationLogo} />
					{/*
					useEffect는 UI가 렌더링된 후에 실행 되는데
					weather.name의 초기값이 null 이므로 에러가 발생한다.
					따라서 삼항연산자를 사용해 weather가 있다면 뽑아달라는 문법을 사용하였다.
					*/}
					<LocationSpan>{weather?.name}</LocationSpan>
				</LocationRowBox>
				<WeatherRowBox>
					<WeatherColBox>
						<CloudyLogoImg src={CloudyImg}/>
						<CurrentDate>Monday, 17 May</CurrentDate>
					</WeatherColBox>
					<WeatherColBox>
						<TempSpan>{weather?.main.temp}</TempSpan>
						<TodayWeatherSpan>{weather?.weather[0].description}</TodayWeatherSpan>
					</WeatherColBox>
				</WeatherRowBox>
				<LocationButton cities={cities} setCity={setCity}/>
			</WeatherColSection>
		</>
	)
}

export default WeatherPage