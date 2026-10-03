document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='76px';nav.style.right='4%';nav.style.background='#fff';nav.style.padding='18px';nav.style.borderRadius='10px';nav.style.boxShadow='0 10px 30px rgba(0,0,0,.12)'});
document.getElementById('inquiryForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name=this.querySelector('input[type=text]').value;
  const email=this.querySelector('input[type=email]').value;
  const company=this.querySelectorAll('input[type=text]')[1].value;
  const type=this.querySelector('select').value;
  const message=this.querySelector('textarea').value;
  const subject=encodeURIComponent('GRAFIQON Business Inquiry');
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRequirement: ${type}\n\nMessage:\n${message}`);
  window.location.href=`mailto:your-email@example.com?subject=${subject}&body=${body}`;
});