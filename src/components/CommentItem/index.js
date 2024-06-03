// Write your code here
import './index.css'

const CommentItem = props => {
  const {initialSendList, isLikedGettingToggle, onDeleteComment} = props
  const {name, comment, createdAt, isLiked, id} = initialSendList

  const onClickLikedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeBtn = () => isLikedGettingToggle(id)
  const onClickDelBtn = () => onDeleteComment(id)

  return (
    <li className="added-comment-sec-container">
      <div className="profile-con-comment">
        <div className="profile-letter-container">
          <p className="profile-letter">{name[0]}</p>
        </div>
        <div>
          <div className="profile-name-time-container">
            <p className="profile-name">{name}</p>
            <p className="time">{createdAt}</p>
          </div>
          <p className="my-comment">{comment}</p>
        </div>
      </div>
      <div className="like-button-container">
        <button type="button" className="like-btn" onClick={onClickLikeBtn}>
          <img src={onClickLikedImg} alt="like" className="like-img" />
        </button>
        <p className="like">Like</p>
        <button
          data-testid="delete"
          type="button"
          className="del-btn"
          onClick={onClickDelBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="seperator-2" />
    </li>
  )
}
export default CommentItem
