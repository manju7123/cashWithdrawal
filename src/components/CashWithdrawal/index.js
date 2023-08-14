import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  deduct = value => {
    const {amount} = this.state
    const resAmount = amount - value
    this.setState({
      amount: resAmount,
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-card">
            <p className="letter"> S </p>
            <h1 className="name"> Sarah Williams </h1>
          </div>
          <div className="balance-card">
            <p className="balance-element"> Your Balance </p>
            <div className="rupee-card">
              <p className="balance"> {amount} </p>
              <p className="rupee"> In Rupees </p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw"> Withdraw </p>
            <p className="choose"> CHOOSE SUM (IN RUPEES) </p>
            <ul className="list">
              {denominationsList.map(each => (
                <DenominationItem
                  listItem={each}
                  key={each.id}
                  deduct={this.deduct}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
