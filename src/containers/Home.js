import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../../public/landing-image.png'

export default withSiteData(() => (
  <div>
    <img src={logoImg} alt="" />
  </div>
))
