import React, { Component } from 'react'
import { CardSection } from './common'
import {
		Text,
	 	View,
		TouchableWithoutFeedback,
		UIManager,
		LayoutAnimation
		} from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends Component {
	componentWillMount() {
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}
	componentWillUpdate() {
		LayoutAnimation.spring();
	}
	renderDescription() {
		const { expanded, library } = this.props
		if(expanded){
			return (
				<CardSection>
					<Text>{ library.description }</Text>
				</CardSection>
			)
		}
	}

	render() {
		const { selectLibrary, library:{title,id} } = this.props
		const { titleStyle } = styles 
		return (
			<TouchableWithoutFeedback
				onPress={ () => selectLibrary(id) }
			>
				<View>
					<CardSection>
						<Text style={ titleStyle }>{ title }</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id
	return { expanded }
}

const styles = {
	titleStyle:{
		fontSize: 18,
		paddingLeft: 15
	}
}

export default connect(mapStateToProps, actions)(ListItem)