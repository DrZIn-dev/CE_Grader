import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {
	Window,
	WindowHeader,
	WindowContent,
	themes,
	Button,
	Cutout
} from 'react95'
import HeatMap from './HeatMap'
import StackBar from './StackBar'
import Attemp from './Attemp'
import {GaugeComplete} from './GaugeComplete'
import GaugeScore from './GaugeScore'
import {dummyData} from './DummyData'
const Container = styled.div`
	background-color: #ccc;
	display: flex;
	max-height: 90vh;
	min-height: 90vh;
	max-width: 90vw;
	min-width: 80vw;
`

const WinBox = styled(Window)`
	width: 100%;
	margin: 0 auto;
`
const BoxHeader = styled(WindowHeader)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ExitButton = styled(Button)`
	margin-right: -6px;
`
const Exit = styled.span`
	font-weight: bold;
	transform: translateY(-1px);
`
const BoxContent = styled(WindowContent)`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	overflow: auto;
`

const DashBox = styled.div`
	grid-area: ${props => {
		return props.area
	}};
`
const FieldBox = styled.div`
	display: flex;
	grid-area: ${props => {
		return props.area
	}};
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
	justify-content: space-around;
`

const CutoutBox = styled(Cutout)`
	align-items: stretch;
	height: 100%;
	width: 100%;
	overflow: auto;
`

export default () => {
	return (
		<Container>
			<ThemeProvider theme={themes.default}>
				<WinBox>
					<BoxHeader>
						<span>Dashboard.exe</span>
						<ExitButton size={'sm'} square>
							<Exit>x</Exit>
						</ExitButton>
					</BoxHeader>
					<BoxContent>
						<StackBar data={dummyData.stackBar} style={{flex: '1 auto'}} />
						<HeatMap data={dummyData.heatmaps} style={{flex: '1 auto'}} />
						<Attemp data={dummyData.attemps} style={{flex: '1 auto'}} />
						<GaugeComplete style={{flex: '1 auto'}} />
						<GaugeScore style={{flex: '1 auto'}} />
					</BoxContent>
				</WinBox>
			</ThemeProvider>
		</Container>
	)
}
