import {ParserTest} from './parser-tests.js';
import 'mathjax3/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest1_3 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest1_3();


parserTest.runTest(
  'Quantities_Absval_0', '\\absolutevalue\\Bigg{\\frac{a}{b}}',
  {"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"minsize":"2.470em","maxsize":"2.470em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"minsize":"2.470em","maxsize":"2.470em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Quantities_Absval_1', '\\absolutevalue{}',
  {"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"|"},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Quantities_Absval_2', '\\abs\\Bigg{\\frac{a}{b}}',
  {"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"minsize":"2.470em","maxsize":"2.470em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"minsize":"2.470em","maxsize":"2.470em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Quantities_Absval_3', '\\abs*\\Bigg{\\frac{a}{b}}',
  {"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Quantities_Absval_4', '\\norm\\Bigg{\\frac{a}{b}}',
  {"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":3,"attributes":{"minsize":"2.470em","maxsize":"2.470em","fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":3,"attributes":{"minsize":"2.470em","maxsize":"2.470em","fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Quantities_Absval_5', '\\norm*\\Bigg{\\frac{a}{b}}',
  {"kind":"math","texClass":4,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"mo","texClass":5,"attributes":{"fence":false,"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Quantities_Absval_6', '\\norm{}',
  {"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"∥","close":"∥"},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.printTime();