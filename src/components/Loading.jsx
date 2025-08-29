import './Loading.css'

const Loading = ({ text = '加载中...' }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  )
}

export default Loading