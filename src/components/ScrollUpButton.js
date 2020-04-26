import React from 'react'

class ScrollUpButton extends React.Component {
  constructor() {
    super()
    this.state = {
      intervalId: 0,
      class: 'scroll hidden',
    }
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }
  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    )
    this.setState({ intervalId: intervalId })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll() {
    if (window.pageYOffset !== 0) {
      this.setState({ class: 'scroll' })
    } else {
      this.setState({ class: 'scroll hidden' })
    }
  }
  render() {
    return (
      <button
        title="Back to top"
        className={this.state.class}
        onClick={() => {
          this.scrollToTop()
        }}
      >
        <i className="fas fa-arrow-up fa-3x" />
      </button>
    )
  }
}

export default ScrollUpButton
