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

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageLayout = () => (
  <Container fluid>
<Image src={logoImg} size="massive" />
  </Container>
)
export default withSiteData(HomepageLayout)

