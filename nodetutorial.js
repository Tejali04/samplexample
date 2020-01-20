var Tutor=require('./tutorial.js');
exports.nodetutorial=function()
{
    console.log("Node Tutorial")
    this.pTutor=function()
    {
        console.log("This is Node tutorial")
        var PTutor=Tutor
        PTutor.tutorial();
    }
}