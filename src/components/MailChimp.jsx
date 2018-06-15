
import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Form, Input, Message, Button } from 'semantic-ui-react'

const url = 'https://locke-co.us18.list-manage.com/subscribe/post?u=8aeed6c1985a567aeb3b561e3&amp;id=8c8ccc3829'

// simplest form (only email)
export const SimpleForm = () => <MailchimpSubscribe url={url} />

// use the render prop and your custom form


class StyleForm extends Component {
  state = {}

  handleChange = (e, { name, value }) => { 
    console.log(name, value)
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.onSubmitted({ EMAIL: this.state.email })
    this.setState({ email: '' })
  }
  render () {
    return (
      [
      <Input key={'input'} label="email" name="email" value={this.state.email || ''}  onChange={this.handleChange}
      placeholder="Your email"/>,
      <Button key={'button'} onClick={this.handleSubmit} type="submit">Submit</Button>

    ]

    )
  }
}
export const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <StyleForm onSubmitted={formData => {
          console.log(formData)
          subscribe(formData)
}} />
        {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
        {status === 'error' && <Message
          error
          header="Action Forbidden"
          content={message}
      />}
        {status === 'success' && <Message success header="Subscribed!" content="You're all signed up for the newsletter" />}
      </div>
    )}
  />
)
