import React from 'react';
import Translate from '@docusaurus/Translate';

export default function Reminder() {
	return (
		<div className='center'>
			<span className='italic'>
				<Translate
					id='reminder'
					description='The text stating that what is written in this website is my own opinions and only mine'
				>
					Just a quick reminder: the opinions expressed here are stricly my own.
					They do not represent the opinions or views of my current employer nor
					any of my previous ones.
				</Translate>
			</span>
		</div>
	);
}
