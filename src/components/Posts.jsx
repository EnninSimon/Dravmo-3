import React from 'react';
import { Container } from 'react-bootstrap';
import Post from './Post';

const Posts = (props) => {
    return (
        <Container>
            {
                props.usersData.map((user) => {
                    return <Post userInfo={user} key={user.id} 
                    deletePost={props.deletePost} 
                    editPost = {props.editPost}
                    />
                })
            }
        </Container>
    );
}

export default Posts;
