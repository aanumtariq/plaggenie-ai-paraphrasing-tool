  import React, { useState } from "react";
  import BeforeParaphrase from './Components/BeforeParaphrase/BeforeParaphrase';
  import AfterParaphrase from './Components/AfterParaphrase/AfterParaphrase';
  import ActionButton from './Components/ActionButton/ActionButton';

  const ParaphraseTool = () => {
    const [inputText, setInputText] = useState("");
    const [paraphrasedText, setParaphrasedText] = useState("");
    const [tone, setTone] = useState("formal");

    const [humanization, setHumanization] = useState("");
    const [grammarly, setGrammarly] = useState("");
    const [plagiarism, setPlagiarism] = useState("");

    console.log("from main component Passing to ActionButton:", { 
      setHumanization, 
      setGrammarly, 
      setPlagiarism, 
      setParaphrasedText, 
      tone 
    }); 
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };

    return (
      <div className="paraphrase-tool">
        <BeforeParaphrase
          text={inputText}
          charCount={inputText.length}
          handleInputChange={handleInputChange}
          setTone={setTone}  
        />
        <ActionButton
         onParaphrase={inputText}
         setParaphrasedText={setParaphrasedText} 
         setHumanization={setHumanization} 
         setGrammarly={setGrammarly} 
         setPlagiarism={setPlagiarism} 
         tone={tone}
      />
        <AfterParaphrase
          paraphrasedText={paraphrasedText}
          humanizePercent={humanization}  
          grammarlyPercent={grammarly} 
          plagiarismPercent={plagiarism}  
        />
      </div>
    );
  };

  export default ParaphraseTool;
