import React, { Component } from 'react'
import { withSiteData } from 'react-static'
//


import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import logoImg from '../../public/landing-image.png'


export default class HomepageLayoutextends Component {
  state = { modalOpen: true}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      
      <Grid container textAlign='center'>
      <Image src={logoImg} size="massive" />

      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
        dimmer="blurring"
        closeOnDimmerClick={false}
        closeOnDocumentClick={false}
      >
        <Header icon='browser' content='Age Verification' />
        <Modal.Content>
          <h3>Are you at least 21 years of age?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='cancel' /> Yes
          </Button>
          <Button color='green' onClick={this.handleClose} inverted>
          <Icon name='checkmark' /> Yes
        </Button>
        </Modal.Actions>
      </Modal>
      </Grid>ß
    )
  }
}

export default withSiteData(HomepageLayout)