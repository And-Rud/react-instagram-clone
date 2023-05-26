import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="sug__title">Sugg for you</div>
      <div className="sug__usernames">
        <div className="sug__username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">andrud_</span>
              <span className="relation">
                New to instagram
              </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sug__username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">andrud_</span>
              <span className="relation">
                New to instagram
              </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sug__username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">andrud_</span>
              <span className="relation">
                New to instagram
              </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sug__username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">andrud_</span>
              <span className="relation">
                New to instagram
              </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sug__username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">andrud_</span>
              <span className="relation">
                New to instagram
              </span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
