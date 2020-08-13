import React from 'react';
import './Profile.css';

const Profile: React.FC = (): JSX.Element => {
  return (
    <div className="content">
    <div>
      <img src="https://images.unsplash.com/photo-1534024669648-7183524c6fbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt=""/>
    </div>
    <div>
      ave + description
      {/* <img src="https://images.unsplash.com/photo-1596860618905-10d5b5a6b22d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt=""/> */}
    </div>
    <div>
      My posts
      <div>New post</div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  </div>
  )
}

export default Profile