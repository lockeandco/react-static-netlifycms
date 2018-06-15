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
    return [
      <Modal
      open={this.state.modalOpen}
      onClose={this.handleClose}
      
      size="small"
      dimmer="blurring"
      closeOnDimmerClick={false}
      closeOnDocumentClick={false}
      centered
      closeOnEscape={false}
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
    </Modal>,

      <Grid container centered textAlign="center" columns={1} stretched vertical>
        <Grid.Column centered>
          <img src={logoImg} size="massive" />  
        </Grid.Column>
   
      </Grid>
      <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    ]
  }
}

export default withSiteData(HomepageLayout)
