import React from 'react';
import { styled } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import * as constants from './constants';
import './infoArea.css';
import Slideshow from '../ProgramsPage/Slideshow';
import { Desktop, Default, Mobile } from './constants';
import SlideshowMobile from '../ProgramsPage/SlideShowMobile';

const InfoArea = props => {
	if (props.color === constants.HOME_PAGE_DARK_COLOR)
		return (
			<div>
				<Desktop>
					<ContainerDark
						flexDirection={
							props.align === 'left' ? 'row' : 'row-reverse'
						}
						backgroundColor='red'
					>
						<TextArea>
							<h4 className='info-header'>{props.header}</h4>
							<ActualText>{props.text}</ActualText>
						</TextArea>
						{props.images && <Slideshow images={props.images} />}
					</ContainerDark>
				</Desktop>
				<Default>
					<ContainerDark flexDirection='column' backgroundColor='red'>
						<TextAreaMobile>
							<h4 className='info-header mobile-header'>
								{props.header}
							</h4>
							<ActualText
								style={{
									padding: '0 0 0 0',
									margin: '0 0 0 0'
								}}
							>
								{props.text}
							</ActualText>
						</TextAreaMobile>
						{props.images && (
							<SlideshowMobile images={props.images} />
						)}
					</ContainerDark>
				</Default>
				<Mobile>
					<ContainerDark flexDirection='column' backgroundColor='red'>
						<TextAreaMobile>
							<h4 className='info-header mobile-header'>
								{props.header}
							</h4>
							<ActualText
								style={{
									padding: '0 0 0 0',
									margin: '0 0 0 0'
								}}
							>
								{props.text}
							</ActualText>
						</TextAreaMobile>
						{props.images && (
							<SlideshowMobile images={props.images} />
						)}
					</ContainerDark>
				</Mobile>
			</div>
		);
	if (props.color === constants.HOME_PAGE_LIGHT_COLOR)
		return (
			<div>
				<Desktop>
					<ContainerLight
						flexDirection={
							props.align === 'left' ? 'row' : 'row-reverse'
						}
						backgroundColor='red'
					>
						<TextArea>
							<h4 className='info-header'>{props.header}</h4>
							<ActualText>{props.text}</ActualText>
						</TextArea>
						{props.images && <Slideshow images={props.images} />}
					</ContainerLight>
				</Desktop>
				<Default>
					<ContainerLight
						flexDirection='column'
						backgroundColor='red'
					>
						<TextAreaMobile>
							<h4 className='info-header mobile-header'>
								{props.header}
							</h4>
							<ActualText
								style={{
									padding: '0 0 0 0',
									margin: '0 0 0 0'
								}}
							>
								{props.text}
							</ActualText>
						</TextAreaMobile>
						{props.images && (
							<SlideshowMobile images={props.images} />
						)}
					</ContainerLight>
				</Default>
				<Mobile>
					<ContainerLight
						flexDirection='column'
						backgroundColor='red'
					>
						<TextAreaMobile>
							<h4 className='info-header mobile-header'>
								{props.header}
							</h4>
							<ActualText
								style={{
									padding: '0 0 0 0',
									margin: '0 0 0 0'
								}}
							>
								{props.text}
							</ActualText>
						</TextAreaMobile>
						{props.images && (
							<SlideshowMobile images={props.images} />
						)}
					</ContainerLight>
				</Mobile>
			</div>
		);
};

const ContainerDark = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	backgroundColor: constants.HOME_PAGE_DARK_COLOR,
	color: constants.HOME_PAGE_LIGHT_TEXT_COLOR
});

const ContainerLight = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	backgroundColor: constants.HOME_PAGE_LIGHT_COLOR,
	color: constants.HOME_PAGE_DARK_TEXT_COLOR
});

const TextArea = styled(Box)({
	order: 0,
	display: 'flex',
	flexDirection: 'column',
	width: '50%',
	paddingTop: '5%',
	paddingBottom: '5%',
	paddingRight: '3%',
	paddingLeft: '3%'
});

const TextAreaMobile = styled(Box)({
	order: 0,
	display: 'flex',
	flexDirection: 'column',
	width: '90%',
	textAlign: 'center',
	paddingTop: '5%',
	paddingBottom: '5%',
	paddingRight: '3%',
	paddingLeft: '3%'
});

const ActualText = styled('p')({
	fontFamily: 'Futura',
	fontSize: '25px'
});

export default InfoArea;
