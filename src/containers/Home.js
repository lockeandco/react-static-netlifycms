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
import '../../src/app.css'

class HomepageLayout extends Component {
  state = { modalOpen: true, portalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false, portalOpen: true })

  handlePortalOpen = () => this.setState({ portalOpen: true })

  handlePortalClose = () => this.setState({ portalOpen: false })


  handleNo = () => window.location.assign('https://www.responsibility.org/')

  render () {
    return [


      <Grid key={2} centered textAlign="center" columns={1}>
        <Grid.Column >


          <img src={logoImg} />


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

width: (typeof window !== 'undefined') && window.innerWidth > 400 ? 400 : (typeof window !== 'undefined') ? window.innerWidth * 0.90 : 400,
 left: (typeof window !== 'undefined') && window.innerWidth > 400 ? (window.innerWidth/2) - 200 : (typeof window !== 'undefined') ? (window.innerWidth/2) - ((window.innerWidth *0.90) /2) : '10%',
position: 'fixed',
top: (typeof window !== 'undefined') && window.innerWidth > 600 ? (window.innerHeight) * 0.20 : '5%',
zIndex: 1000,
padding: '5 5 5 5',
}}>
              <Icon style={{ float: 'right', margin: '5 5 5 5 ' }} name="cancel" size="large" onClick={this.handlePortalClose} />
              <p style={{ color: '#243746' }}>stay in touch</p>
              <span style={{ fontFamily: 'Arial', color: '#243746' }}>
                <p>Subscribe to our mailing list for important annoucements,
                upcoming events, and random musings.
                </p>
              </span>
              <div style={{ textAlign: 'center' }}>
                <Icon style={{ align: 'center' }} name="pointing down" size="big" circular />
              </div>
            </Segment>

          </TransitionablePortal>
        </Grid.Column>
        <GridColumn textAlign="center" >
        <Segment basic padded style={{ padding: '20px 20px 100px 20px'}}>
          <CustomForm />
          </Segment>
        </GridColumn>

      </Grid>,
    ]
  }
}

export default withSiteData(HomepageLayout)
