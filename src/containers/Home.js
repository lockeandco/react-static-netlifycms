import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../../public/stub-landing.png'

export default withSiteData(() => (
  <div>
    <img src={logoImg} alt="" />
  </div>
))
