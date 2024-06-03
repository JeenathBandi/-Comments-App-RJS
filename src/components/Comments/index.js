import './index.css'
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// Write your code here

const initialCommentedUserList = []

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    initialList: initialCommentedUserList,
    commentCount: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newUser = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      createdAt: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      initialList: [...prevState.initialList, newUser],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  isLikedGettingToggle = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteComment = id => {
    const {initialList} = this.state
    const filteredResults = initialList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentCount: prevState.commentCount - 1,
      initialList: filteredResults,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, initialList, commentCount} = this.state

    return (
      <div className="bg-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="comments-enter-container">
          <div className="comments-cont-1">
            <p className="input-description">
              Say something about 4.0 Technologies
            </p>
            <form
              className="comments-add-container"
              onSubmit={this.onAddComment}
            >
              <input
                placeholder="Your Name"
                className="input-element"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                rows="8"
                cols="30"
                placeholder="Your Comment"
                className="input-element"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="add-btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="comments-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="seperator" />
        <div className="after-hr">
          <button className="add-btn-2" type="button">
            {commentCount}
          </button>
          <pc className="comments-total">Comments</pc>
        </div>
        <ul className="comment-add-section">
          {initialList.map(each => (
            <CommentItem
              initialSendList={each}
              key={each.id}
              isLikedGettingToggle={this.isLikedGettingToggle}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
