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
  Modal,
} from 'semantic-ui-react'

import logoImg from '../../public/landing-image.png'


class HomepageLayout extends Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render () {
    return (

      <Grid container centered textAlign="center">
        <Grid.Column>
          <img src={logoImg} size="massive" />
        </Grid.Column>
        <Grid.Column>
              <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="small"
          dimmer="blurring"
          closeOnDimmerClick={false}
          closeOnDocumentClick={false}
          centered
      >
          <Header icon="beer" content="Age Verification" />
          <Modal.Content>
            <h3>Are you at least 21 years of age?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={this.handleClose} inverted>
            <Icon name="cancel" /> No
          </Button>
            <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Yes
          </Button>
          </Modal.Actions>
        </Modal>
            </Grid.Column>
      </Grid>
    )
  }
}

export default withSiteData(HomepageLayout)
