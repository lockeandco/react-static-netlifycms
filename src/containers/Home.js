import React, { Component } from 'react'
import { withSiteData } from 'react-static'
import { SimpleForm, CustomForm } from '../components/MailChimp'

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
  TransitionablePortal,
  GridColumn,
} from 'semantic-ui-react'

import logoImg from '../../public/landing-image.png'


class HomepageLayout extends Component {
  state = { modalOpen: true, portalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false, portalOpen: true })

  handlePortalOpen = () => this.setState({ portalOpen: true })

  handlePortalClose = () => this.setState({ portalOpen: false })


  handleNo = () => window.location.assign('https://www.responsibility.org/')

  render () {

    return [


      <Grid key={2} container centered textAlign="center" columns={1}>
        <Grid.Column >
          <img src={logoImg} size="massive" />
        </Grid.Column>
        <Grid.Column>
          <Modal
            key={1}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size="tiny"
            dimmer="blurring"
            closeOnDimmerClick={false}
            closeOnDocumentClick={false}
            closeOnEscape={false}
    >
            <Header icon="beer" content="Age Verification" />
            <Modal.Content>
              <h3>Are you at least 21 years of age?</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={this.handleNo} inverted>
                <Icon name="cancel" /> No
              </Button>
              <Button color="green" onClick={this.handleClose} inverted>
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
          <TransitionablePortal
            transition={{
            animation: 'fly down',
            duration: 1800,
          }}
            onClose={this.handlePortalClose} open={this.state.portalOpen}
      >
            <Segment style={{
           
width: 400,
 left: (window.innerWidth/2) - 200,
position: 'fixed',
top: '40%',
zIndex: 1000,
padding: '5 5 5 5'
}}>
              <p style={{color: '#243746' }}>stay in touch</p>
              <span style={{ fontFamily: 'Arial', color: '#243746' }}>
                <p>Subscribe to our mailing list for important annoucements,
                upcoming events, and random musings.
              </p>
              </span>
              <Icon style={{align: 'center'}} name="pointing down" size="big"  circular  />
            </Segment>
  
          </TransitionablePortal>
        </Grid.Column>
        <GridColumn textAlign="center">
          <CustomForm />
        </GridColumn>

      </Grid>,
    ]
  }
}

export default withSiteData(HomepageLayout)
