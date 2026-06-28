// class component
import React, { Component } from 'react'
import { useState, useEffect } from 'react';

const Welcome = () => {
    const [message, setMessage] = useState("Hello RCR week Welcome component");
    
    return <h1>{message}</h1>;
}

export default Welcome