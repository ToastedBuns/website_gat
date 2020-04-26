import React from 'react'
import axios from 'axios'

class MailList extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()

    const newEmail = {
      email: this.state.email,
    }

    const options = {
      url: 'https://j6w7fnl193.execute-api.eu-west-2.amazonaws.com/api',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: newEmail,
    }

    axios(options)
      .then(res => {
        console.log(res)
        this.setState({ email: '' })
      })
      .catch(err => {
        if (err.statusCode === 400) {
          console.log(err)
          this.setState({ email: '' })
        } else {
          console.log(err)
        }
      })

    // const data = {
    //   members: [
    //     {
    //       email_address: this.state.email,
    //       status: 'subscribed',
    //     },
    //   ],
    // }
    // // Subscribe to mailchimp email list
    // const options = {
    //   url: 'https://us19.api.mailchimp.com/3.0/lists/ca500e9cc1',
    //   method: 'post',
    //   headers: {
    //     Authorization: 'auth fd09cb931e0af36b28cbb5f9d719d490-us19',
    //   },
    //   data: JSON.stringify(data),
    // }
    // // Make request
    // axios(options)
    //   .then(res => {
    //     if (res.error_count < 1) {
    //       this.setState({ email: '' })
    //       console.log(res)
    //     } else {
    //       console.log(res)
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
  render() {
    return (
      <div className="mail-list">
        <p className="lead">Sign up to our news letter</p>
        <form onSubmit={this.onSubmit} className="form-inline">
          <input
            type="email"
            className="my-input"
            placeholder="Email.."
            autoComplete="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <button className="my-button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    )
  }
}

export default MailList
