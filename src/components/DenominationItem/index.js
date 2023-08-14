import './index.css'

const DenominationItem = props => {
  const {listItem, deduct} = props
  const {value} = listItem
  const onButton = () => {
    deduct(value)
  }

  return (
    <li className="list-item">
      <button className="btn" type="button" onClick={onButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
