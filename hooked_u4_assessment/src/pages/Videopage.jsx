/*
JOSEPH P. PASAOA
Videopage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import YouTube from 'react-youtube';

    // local
    import './Videopage.css';
    import CommentCard from '../components/CommentCard';
    const { processInput } = require('../helpers/globalHelp.js');


/* COMPONENT + EXPORT */
export default class Videopage extends Component {
  state = {
    nameTxt: "",
    commentTxt: "",
    errorMessage: "",
    comments: []
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleKeydown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.handleSubmit(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const nameCheck = processInput(this.state.nameTxt, "name");
    const cmtCheck = processInput(this.state.commentTxt, "comment");
      const [ namePass, namePayload ] = [ nameCheck.pass, nameCheck.payload ];
      const [ cmtPass, cmtPayload ] = [ cmtCheck.pass, cmtCheck.payload ];
    if (!namePass && !cmtPass) {
      this.refs.input1.focus();
      this.setState({
          errorMessage: "Invalid name and comment. Please re-enter them and try again."
      });
    } else if (!namePass) {
      this.refs.input1.focus();
      this.setState({
          errorMessage: namePayload
      });
    } else if (!cmtPass) {
      this.refs.input2.focus();
      this.setState({
          errorMessage: cmtPayload
      });
    } else {
      const cmtWithBreaks = cmtPayload.split('\n').map((line, i) => {
        return (
          <span key={i}>
            {line}<br />
          </span>
        );
      });    
      const newCommentObj = {
        name: namePayload,
        comment: cmtWithBreaks
      }
      this.refs.input1.blur();
      this.refs.input2.blur();
      this.refs.button.blur();
      this.setState((state, props) => {
          return { 
            nameTxt: "",
            commentTxt: "",
            errorMessage: "",
            comments: [
              newCommentObj,
              ...state.comments
            ]
          }
      });
    }
    this.refs.button.blur();
  }

  // future return to top feature wip
  // handleScrollToTop = () => {
  //   if (this.$ref && location.href.includes('#my-ref')) {
  //     this.$ref.scrollIntoView({
  //         // optional params
  //         behaviour: 'smooth',
  //         block: 'start',
  //         inline: 'center',
  //     });
  //   }
  // }


  render() {
    const videoId = this.props.match.params.id;
    const { nameTxt, commentTxt, errorMessage, comments } = this.state;

    const opts = {
      height: '510',
      width: '680',
      playerVars: {
        origin: "https://localhost:3000",
        autoplay: 1,
      }
    }

    let listComments = null;
    if (comments.length) {
      listComments = comments.map(({name, comment}, i) => {
          return (
            <CommentCard 
              key={i.toString() + videoId} 
              name={name} 
              comment={comment} 
            />
          );
      });
    }


    return(
      <div className="stage">

        <div className="ytvideo-box">
          <YouTube
            key={videoId} 
            videoId={videoId} 
            opts={opts} 

            id={videoId} 
            className={"ytvideo"} 
          />
        </div>

        <form className="form-comments" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="nameTxt">Name</label>
            <input 
              type="text" 
              name="nameTxt" 
              id="nameTxt" 
              className="input-name" 
              ref="input1" 
              value={nameTxt} 
              onChange={this.handleChange} 
              placeholder="Your Name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="commentTxt">Comment</label>
            <textarea 
              type="text" 
              name="commentTxt" 
              id="commentTxt" 
              className="input-comment" 
              ref="input2" 
              value={commentTxt} 
              onChange={this.handleChange} 
              onKeyDown={this.handleKeydown} 
              placeholder="What do you want to say?..." 
            />
          </div>
          <div className="form-row">
            <button className="btn-comment" ref="button">Submit a comment!</button>
            <div className="msg-error">{errorMessage}</div>
          </div>
        </form>

        <div className="display-comments">
          {listComments}
          {/* {comments.length ? <Link to={{ hash: "#top" }}>Return to top</Link> : false} */}
        </div>

      </div>
    );
  }
}
