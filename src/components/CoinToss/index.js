import {Component} from 'react'
import './index.css'

// Write your code here
const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    img: headImg,
  }

  tossCoin = () => {
    const {head, tail} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let img = ''
    let headsCount = head
    let tailsCount = tail

    if (tossResult === 0) {
      img = headImg
      headsCount += 1
    } else {
      img = tailImg
      tailsCount += 1
    }

    this.setState({
      head: headsCount,
      tail: tailsCount,
      img,
    })
  }

  render() {
    const {img, head, tail} = this.state
    const total = head + tail

    return (
      <div className="main-con">
        <div className="inner-con">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={img} alt="toss result" className="result-Img" />
          <button type="button" onClick={this.tossCoin} className="button">
            Toss Coin
          </button>
          <div className="result-con">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {head}</p>
            <p className="result">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
