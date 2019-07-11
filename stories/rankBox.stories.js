import React from 'react'

import {storiesOf} from '@storybook/react'

import Ranking from '../src/components/Dashboard/Ranking'
import {withKnobs, number} from '@storybook/addon-knobs'

const stories = storiesOf('Rank Box', module).addDecorator(story => (
	<div
		style={{
			padding: '5rem',

			background: 'teal'
		}}>
        {story()}
	</div>
))
stories.addDecorator(withKnobs)
const datas = {
	current: 1,
	update: 10,
	updateStatus: '' //data = '+' || '-' || ' '
}

const handleStatus = data => {
	switch (data.updateStatus) {
		case '+':
			return '🔺'
		case '-':
			return '🔻'
		default:
			return '😑'
	}
	f
}

stories.add('normal', () => (
	<div
		style={{
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'flex-start'
		}}>
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '130px',
				flexDirection: 'column'
			}}>
			<Ranking data={datas} status={handleStatus(datas)} />
		</div>

		<div style={{flex: '5 auto'}}> </div>
	</div>
))
