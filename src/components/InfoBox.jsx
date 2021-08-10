import React, { Component } from 'react'
import { useState,useEffect } from 'react';

function InfoBox(props){
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [icon, etIcon] = useState("");
	return (
    <>
    <div className="box-border h-32 w-[500px] flow root">
      <div className="ml-[190px]">
      {props.icon}
      </div>
    </div>
    <div className="box-border leading-[20px] md:leading-[29px] text-[20px] md:text-[24px] 
    font-medium text-justify h-16 w-[500px] flow root ">
      <div>{props.text1}</div><br/>
      <div>{props.text2}</div>
    </div>
    </>
	)
}

export default InfoBox