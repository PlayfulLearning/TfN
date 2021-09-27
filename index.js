import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';
import People from './components/People.js';

// load csv files and populate data
Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSwAeinactPi83oSPnxmbCpjjUSRs-aZ8LWsltaZm-0pNK2cBVUMN4S-jeHnwz5ul29ts2Qw91odcu0/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTICqVXJVEFAcy57f3QJ5cVY5_sTd64ylcgRrFHgYxgyATcxU5O4tgUgyBquqS_nCc2zE-SEnXiARun/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vR3vie2AsSnITp1-9bCC1VpeRctkZde6TO8NXhmL7s9tXXJ9qztviVQGYJgh5IIwPtsfovSc7fta8K0/pub?output=csv"), 
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vT5sC2rb01P-mHlqeMyjIBdNVctqaPiLueM8fwL3-KKzpzcDt8bbu2WpmQFrY6MM7Y5bxQoMPsA_2kM/pub?output=csv") 
      ])
      .then(([about, websites, projects, people]) => {
        const data = {about, websites, projects, people};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
        hljs.highlightAll();
    }    
});



