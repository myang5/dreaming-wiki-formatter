const namesOfficial = [
  'NARRATION',
  'YUMA',
  'YANAGI',
  'TOUJI',
  'SHION',
  'SHINYA',
  'SHIGURE',
  'ISSEI',
  'MIKAGE',
  'SENRI',
  'TAKAOMI',
  'JIN',
  'CHIZURU',
  'KASUKA',
  'MINATO',
  'YUNI',
  'RINTARO',
  'KIRITANI',
  'SARUWATARI',
  'INOH',
  'MAMORU',
  'DYLAN',
  'JUDAH',
]

//lmao
function convertToDom(data) {
  return new DOMParser().parseFromString(data, 'text/html');
}

//each line in CKEditor has <p> wrapper
//params: editorDom - editor data already converted to DOM object
//returns an Array of each line of text
function getTextFromDom(editorDom) {
  const paragraphs = editorDom.querySelectorAll('p');
  const input = []
  paragraphs.forEach(function (p) {
    input.push(p.innerHTML.replace(/&nbsp;/g, ''));
  });
  return input;
}

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function getTextAfterColon(line) {
  return line.slice(line.indexOf(':') + 1).trim();
}

//helper function to check if the line is a file
//params: line - a String
//returns a boolean value representing if the string is a file name
function isFileName(line) {
  const extensions = ['.png', '.gif', '.jpg', '.jpeg', '.ico', '.pdf', '.svg'];
  for (let i = 0; i < extensions.length; i++) {
    if (line.toLowerCase().endsWith(extensions[i])) {
      return true;
    }
  }
  return false;
}

//helper function to remove file extension if it exists
//params: line - a String
//returns a String with extension removed
function formatFileName(line) {
  line = line.trim();
  const extensions = ['.png', '.gif', '.jpg', '.jpeg', '.ico', '.pdf', '.svg'];
  for (let i = 0; i < extensions.length; i++) {
    if (line.toLowerCase().endsWith(extensions[i])) {
      return line.replace(extensions[i], '');
    }
  }
  return line;
}

//helper function to format bold, italics, links based on HTML tags
//params: editorDom - editor data already converted to DOM object
//returns a DOM object with specified HTML tags converted to wiki code equivalent
function formatStyling(editorDom) {
  editorDom.querySelectorAll('strong').forEach(function (strong) {
    strong.replaceWith(`'''${strong.innerText}'''`);
  });
  editorDom.querySelectorAll('i').forEach(function (italic) {
    italic.replaceWith(`''${italic.innerText}''`);
  });
  editorDom.querySelectorAll('a').forEach(function (link) {
    link.replaceWith(`[${link.href} ${link.innerText}]`);
  });
  return editorDom;
}

function convertText() {

  //const values = getValues(); //get user input from all the tabs

  //format wiki code with user input
  const headerCode =
    `{{Story Header
|Title=${this.state.details.title[2]}        
|Image=${this.state.details.image[2]}        
|Source=${this.state.details.source[2]}        
|TranslatorURL=${this.state.details.tlCredit[2]} 
|TranslatorName=${this.state.details.tlName[2]}
|Chapter=${this.state.details.chapter[2]}       

`;
  const charaCode =
    `}}{{VALUE|Dialogue=`;

  const npcCode =
    `}}{{NPC
|Name=VALUE
|Dialogue=`;

  const unknownCode =
    `}}{{NPC
|Name=???
|RealName=VALUE
|Dialogue=`

  const imageCode =
    `}}{{Story Image|Image=VALUE

`;

  const locationCode =
    `}}{{Location|Location=VALUE

`;

  const chapterCode =
    `}}{{Chapter Divider|Chapter=VALUE
      
`;

  const footerCode =
    `{{Story Footer
|Prev=${this.state.details.prev[2]}          
|Next=${this.state.details.next[2]}          
}}`

  let inputDom = formatStyling(convertToDom(this.state.input));
  let input = getTextFromDom(inputDom);
  let output = headerCode;

  let currentName = ''; //needed for case where dialogue has name on every line
  input.forEach(function (line) {
    if (line != '') { //ignore empty lines
      //console.log('analyzing line: ' + line);
      if (isFileName(line)) {
        //console.log('isFileName: true...');
        //if CG or scene change image file
        //console.log('image file');
        output += imageCode.replace('VALUE', formatFileName(line));
        currentName = ''; //since its new section
      }
      else { //if dialogue line or header
        let key = line.slice(0, line.indexOf(':')).split(' ');
        //console.log(key);
        if (key.length > 3 || !line.includes(':')){ //cases where 1 (Takaomi) or 2 (Takaomi & Senri) are speaking but there is a colon in the dialogue
          //console.log('no colon, continue dialogue');
          output += line + '\n\n';
        }
        else {
          //console.log('key found...')
          let firstWord = key[0]
          if (firstWord.toUpperCase() === 'LOCATION') { //if heading
            //console.log('new LOCATION');
            output += locationCode.replace('VALUE', getTextAfterColon(line));
            currentName = ''; //since its new section
          }
          else if (firstWord.toUpperCase() === 'CHAPTER') { //if heading
            //console.log('new CHAPTER');
            output += chapterCode.replace('VALUE', getTextAfterColon(line));
            currentName = ''; //since its new section
          }
          else { //if character is speaking
            //console.log('character speaking... ' + key);
            key = key.join(' ');
            if (key != currentName) { //if new character is speaking
              //console.log('new character detected')
              //add dialogueRender code to output
              if (key.includes('???')) {
                key = key.replace('???', '').trim();
                let code = unknownCode;
                output += code.replace('VALUE', (namesOfficial.includes(key.toUpperCase()) ? key : 'NPC'));
              }
              else {
                let code = namesOfficial.includes(key.toUpperCase()) ? charaCode : npcCode;
                output += code.replace('VALUE', capitalizeFirstLetter(key));
              }
              //update currentName
              currentName = key;
            }
            output += getTextAfterColon(line) + '\n\n';
          }
        }
      }
    }
  });

  output += '}}\n';
  let title = getChapTitle(this.state.tlNotes);
  output = formatTlMarker(output, title);
  output += formatTlNotes(this.state.tlNotes, title);
  output += footerCode;
  this.setState({ output: output });
}

//helper function to get and format chapter title from tl notes
//assumes the editor has some data
function getChapTitle(data) {
  if (data.includes('<ol>') && data.includes('<p>')) { //editor already has the <p> in it, so user must input some sort of new <p> (the chapter title) and an <ol> (the TL notes)
    let inputDom = (convertToDom(data).querySelector('p'));
    let title = inputDom.innerText;
    title = title.replace(' ', '');
    return title;
  }
  else {
    //ERROR: add alert to let user know they didn't provide a chapter title
    //console.log('Please make sure to include a title in the TL Notes section')
  }
}

//helper function to format tl note markers
function formatTlMarker(output, title) {
  const markerRegExp = /\[\d+\]/g;
  if (output.search(markerRegExp) != -1) { //if there is a tlMarker
    if (title != undefined) {
      let tlCode = `<span id='${title}RefNUM'>[[#${title}NoteNUM|<sup>[NUM]</sup>]]</span>`;
      const markers = output.match(markerRegExp);
      markers.forEach(function (marker) {
        let num = marker.substring(marker.indexOf('[') + 1, marker.indexOf(']'));
        let newTlCode = tlCode.replace(/NUM/g, num);
        output = output.replace(marker, newTlCode)
      });
    }
  }
  return output;
}

//helper function to format TlNotes
//assumes that there is a valid title and correct number of TL notes
function formatTlNotes(tlNotes, title) {
  if (title != undefined) {
    let inputDom = formatStyling(convertToDom(tlNotes));
    let notes = []
    const listItems = inputDom.querySelectorAll('li');
    listItems.forEach(function (li) {
      notes.push(li.innerHTML.replace(/&nbsp;/g, ''));
    });
    let output =
      `|-
| colspan="2"|`;
    let tlCode = `<span id='${title}NoteNUM'>NUM.[[#${title}RefNUM|↑]] TEXT</span><br />`;
    for (let i = 0; i < notes.length; i++) {
      let newTlCode = tlCode.replace(/NUM/g, i + 1);
      output += newTlCode.replace('TEXT', notes[i]);
    }
    output = output.replace(/<br \/>$/m, '\n');
    return output;
  }
  else return ''
}

export default convertText;