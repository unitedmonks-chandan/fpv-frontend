import React, { useState } from 'react'
import Image from 'next/image'

export default function Form(){
  return(
  <>
    <div className="form">
    <h3 className="form-heading">Leave a reply</h3>
    <form>
    <div className="row">
    <div className="col-md-6">
    <input type="text" placeholder="Name*"></input>
    </div>
    <div className="col-md-6">
    <input type="email" placeholder="Email*"></input>
    </div>
    </div>
    <textarea placeholder="Your Comment" />
    <input type="checkbox" id="save" name="save"></input>
    <label for="save">Save my name, email, and website in this browser for the next time I comment.</label>
    <br/>
    <button type="submit">
    <a className="buy_now bg-blue-grad">
                        <span className="btn-text">Post Comment</span>
                    </a>
    </button>
    </form>
    </div>
    <style jsx>{`
.form{
width:75%;
margin:20px auto 80px;
}
.form-heading{
font-size:25px;
font-weight:600;
}
form input[type=text], input[type=email]{
margin-top:30px;
width:100%;
background:#F0F1F2;
color:#777777;
border:none;
outline:none;
padding:15px 20px;
}
form textarea{
margin-top:20px;
width:100%;
background:#F0F1F2;
color:#777777;
border:none;
outline:none;
padding:15px 20px;
height:250px;
}
form input[type=checkbox]{
margin-top:20px;
width:20px;
height:20px;
}
form label{
color:#777777;
font-size:16px;
padding-left:15px;
}
form button{
background:transparent;
outline:none;
border:none;
padding:0;
}
form .buy_now{
margin-top:30px;
display:block;
padding:10px 30px;
border-radius:3px;
font-size:20px;
position:relative;
}
form .btn-text{
  position: relative;
  z-index: 20;
  color: #fff;
}
}
`}</style>
    </>
  )
}