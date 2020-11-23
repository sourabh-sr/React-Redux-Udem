import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to Do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:25PM" 
                comment="Its a Nice Blog" 
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Tomorrow at 7:00PM" 
                comment="One of the Best Actually!!" 
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 10:00AM" 
                comment="Yes!! The best blog." 
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));