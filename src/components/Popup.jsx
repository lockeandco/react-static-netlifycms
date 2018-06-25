import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'


const PopupExampleControlled = props => {
  console.log(props)
  return (<Popup
    trigger={props.trigger}
    content={
    [
      <Icon key={10} style={{ float: 'right', margin: '5 5 5 5 ' }} name="cancel" size="large" on="focus" />,
      <p key={12} style={{ color: '#243746', fontFamily: 'oldGrowth' }}>stay in touch</p>,
      <span key={111} style={{ fontFamily: 'Arial', color: '#243746' }}>
        <p>Subscribe to our mailing list for important annoucements,
                            upcoming events, and random musings.
        </p>
      </span>,
      <div key={11120} style={{ textAlign: 'center' }}>
        <Icon style={{ align: 'center' }} name="pointing up" size="big" circular />
      </div>,
    ]}
    on="hover"
    open={props.open}
    onClose={props.onClose}
    onOpen={props.onOpen}
    position="left center"
          />)
}

export default PopupExampleControlled
