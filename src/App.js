import React, { useState } from 'react';
import './App.css';

const PassG = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeLcase, setincludeLcase] = useState(true);
  const [includeUcase, setincludeUcase] = useState(true);
  const [includenum, setIncludenum] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generateP = () => {


    const Lcase = 'abcdefghijklmnopqrstuvwxyz';
    const Ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    let characters = '';
    if ((length === 0 || length=== '') || (!includeLcase && !includeUcase && !includenum && !includeSymbols)) {
      alert('Please enter the required details.');
      return;
    }
    setPassword('');
    if(length <= 4)
    {
      alert("Length shoud be minimum 4");
      return;
    }
    //setPassword(''); // Reset the password state

    if (includeLcase) {
      characters += Lcase;
    }

    if (includeUcase) {
      characters += Ucase;
    }

    if (includenum) {
      characters += num;
    }

    if (includeSymbols) {
      characters += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div class="area" >
       <div className="circles">
      <center><h1 className='head'>Password Generator</h1></center>
      <blockquote>
    <div className="password-generator">
    

      <div className="form-group">
        <label>Password Length:</label>
        <input
          type="number"
          min="4"
          max="50"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="form-group">
        {/* <label>Include Lowercase:</label> */}
       Include Lowercase <input
          type="checkbox"
          checked={includeLcase}
          onChange={(e) => setincludeLcase(e.target.checked)}
        />
      </div>

      <div className="form-group">
        {/* <label>Include Uppercase:</label> */}
       Include Uppercase <input
          type="checkbox"
          checked={includeUcase}
          onChange={(e) => setincludeUcase(e.target.checked)}
        />
      </div>

      <div className="form-group">
        {/* <label>Include num:</label> */}
      Include Number  <input
          type="checkbox"
          checked={includenum}
          onChange={(e) => setIncludenum(e.target.checked)}
        />
      </div>

      <div className="form-group">
        {/* <label>Include Symbols:</label> */}
      Inlcude Symbol  <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>

      <button onClick={generateP} className='button-85'>Generate Password</button>

      {password && (
        <div className="password-result">
          <label>Generated Password:</label>
          <input type="text" readOnly value={password} />
        </div>
      )}
      



           
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </div></blockquote>
    </div >
    </div>
  );
};

export default PassG;
