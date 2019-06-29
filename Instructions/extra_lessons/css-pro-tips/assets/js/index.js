document.addEventListener('DOMContentLoaded',function(){


  let tips=new CssProTips();
      tips.addNavLink("Form","index.html","fas fa-cog");
      tips.addNavLink("Sass","sass.html","fab fa-sass");
      tips.addNavLink("Animations","animations.html","fas fa-coffee");
      tips.addNavLink("Transforms","transforms.html","fas fa-bomb");
      tips.addRefLink("A Complete Guide to Flexbox","https://css-tricks.com/snippets/css/a-guide-to-flexbox/");
      tips.addRefLink("The Skinny on CSS Attribute Selectors","https://css-tricks.com/attribute-selectors/");
      tips.addRefLink("Keyframe Animation Syntax","https://css-tricks.com/snippets/css/keyframe-animation-syntax/");
      tips.addRefLink("Controlling CSS Animations and Transitions with JavaScript","https://css-tricks.com/controlling-css-animations-transitions-javascript/");
      tips.addRefLink("Transforms","https://css-tricks.com/almanac/properties/t/transform/");
});


class CssProTips {
  constructor(){
    //nav
    this.nav=document.getElementsByTagName('nav')[0];
    //sidebar
    this.aside=document.getElementsByTagName('aside')[0];
    this.billMurray().addEventListener('click',event=>this.billMurray.call(this,event));
    this.refLinksList=document.createElement('ul');
    this.aside.appendChild(this.refLinksList);

    this.activateButtons()
  }
  activateButtons(){
    let buttons=document.querySelectorAll('button.activate');
    [...buttons].forEach(function(button){
      button.addEventListener('click',function(){
        button.classList.remove('hasAnimation');
        void button.offsetWidth;
        button.classList.add('hasAnimation');
        if(button.classList.contains('active')){
          button.classList.remove('active');
        }
        else {
          button.classList.add('active');
        }
      });
    });
  }
  billMurray(event){
    console.log(this)
    if(!this.billMurrayImg){
      this.billMurrayImg=document.createElement('img');
      this.aside.appendChild(this.billMurrayImg);
    }
    let src=sessionStorage.getItem('billMurray');
    if(!src || event){
      src=`https://www.fillmurray.com/${Math.floor(Math.random()*100)+100}/${Math.floor(Math.random()*100)+200}`
      sessionStorage.setItem('billMurray',src);
    }
    this.billMurrayImg.setAttribute('src',src);
    return this.billMurrayImg;
  }
  addRefLink(name,url){
    let a=document.createElement('a');
        a.setAttribute('href',url);
        a.setAttribute('target','_blank');
        a.textContent=name;
    let li=document.createElement('li');
    li.appendChild(a);
    this.refLinksList.appendChild(li);
    return this;
  }
  addNavLink(name,url,icon){
    let button=document.createElement('button');
    let i=document.createElement('i');
        i.setAttribute('class',icon)
    let a=document.createElement('a');
        a.setAttribute('href',url);
    button.appendChild(a);
    a.appendChild(i);
    a.appendChild(document.createTextNode(name));
    this.nav.appendChild(button);
    if(location.href.includes(url)){
      button.classList.add('active');
    }
    return this;
  }
}
