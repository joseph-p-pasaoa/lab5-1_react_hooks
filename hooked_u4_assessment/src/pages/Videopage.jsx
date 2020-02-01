/*
JOSEPH P. PASAOA
Videopage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
    import React, { useState } from 'react';
    import YouTube from 'react-youtube';

    // local
    import './Videopage.css';
    import CommentCard from '../components/CommentCard';
    const { processInput } = require('../helpers/globalHelp.js');


/* COMPONENT */
const Videopage = (props) => {

  // USESTATES
  const [ inputValue , setInputValue ] = useState({
      nameTxt: "",
      commentTxt: "",
      comments: []
  });
  const [ errorMsg, setErrorMsg ] = useState("");


  // CREATE REFS
  const refNameInput = React.createRef();
  const refCommentInput = React.createRef();
  const refBtnSubmit = React.createRef();
  const refStageTop = React.createRef();


  // HANDLERS
  const handleChange = (e) => {
    const { name , value } = e.target;
    setInputValue(prevState => ({
          ...prevState,
          [name] : value
      })
    );
  }

  const handleKeydown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      handleSubmit(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    refBtnSubmit.current.blur();

    const { nameTxt, commentTxt, comments } = inputValue;
    const nameCheck = processInput(nameTxt, "name");
    const cmtCheck = processInput(commentTxt, "comment");
      const [ namePass, namePayload ] = [ nameCheck.pass, nameCheck.payload ];
      const [ cmtPass, cmtPayload ] = [ cmtCheck.pass, cmtCheck.payload ];
    if (!namePass && !cmtPass) {
      refNameInput.current.focus();
      setErrorMsg("Invalid name and comment. Please re-enter them and try again.");
    } else if (!namePass) {
      refNameInput.current.focus();
      setErrorMsg(namePayload);
    } else if (!cmtPass) {
      refCommentInput.current.focus();
      setErrorMsg(cmtPayload);
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
      refNameInput.current.blur();
      refCommentInput.current.blur();
      setErrorMsg("");
      setInputValue(prevState => ({ 
            nameTxt: "",
            commentTxt: "",
            errorMsg: "",
            comments: [
              newCommentObj,
              ...comments
            ]
          })
      );
    }
  }

  const handleReturnToTop = () => {
    refStageTop.current.scrollIntoView({
          // optional params
          behaviour: 'smooth',
          block: 'end',
          inline: 'center',
      });
  }


  // PRE-RETURN
  const videoId = props.match.params.id;
  const { nameTxt, commentTxt, comments } = inputValue;

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


  // RETURN
  return(
    <div className="stage">

      <div ref={refStageTop}></div>

      <div className="ytvideo-box">
        <YouTube
          key={videoId}
          videoId={videoId}
          opts={opts}

          id={videoId}
          className={"ytvideo"}
        />
      </div>

      <form className="form-comments" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="nameTxt">Name</label>
          <input
            type="text"
            name="nameTxt"
            id="nameTxt"
            className="input-name"
            ref={refNameInput}
            value={nameTxt}
            onChange={handleChange}
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
            ref={refCommentInput}
            value={commentTxt}
            onChange={handleChange}
            onKeyDown={handleKeydown}
            placeholder="What do you want to say?..."
          />
        </div>
        <div className="form-row">
          <button className="btn-comment" ref={refBtnSubmit}>Submit a comment!</button>
          <div className="msg-error">{errorMsg}</div>
        </div>
      </form>

      <div className="display-comments">
        {listComments}
        {comments.length > 0 ? <button onClick={handleReturnToTop}>Return to top</button> : null}
      </div>

    </div>
  );
}


/* EXPORT */
export default Videopage;
