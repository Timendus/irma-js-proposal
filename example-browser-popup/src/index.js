const IrmaCore = require('irma-core');
const Popup    = require('irma-popup');
// const IrmaServer  = require('irma-irmaserver');
const NutsAuth = require('irma-nuts-auth');

document.getElementById('start-button').addEventListener('click', () => {

  const irma = new IrmaCore({
    debugging: true,
    element:   '#irma-web-form'
  });

  irma.use(Popup);
  irma.use(NutsAuth);

  irma.start('http://localhost:21323', {
    type: "BehandelaarLogin",
    language: "NL",
    version: "v1"
  }).then(result => {
    console.log("Successful disclosure! 🎉");
    console.log(result)
  });

});
