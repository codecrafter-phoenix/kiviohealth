/* NAVBAR */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>40);
  document.getElementById('scrollTop').classList.toggle('visible',window.scrollY>400);
});

/* HAMBURGER */
const hamburger=document.getElementById('hamburger');
const mobileNav=document.getElementById('mobileNav');
hamburger.addEventListener('click',()=>{
  const isOpen=mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open',isOpen);
});
function closeMobileNav(){mobileNav.classList.remove('open');hamburger.classList.remove('open');}
document.addEventListener('click',e=>{
  if(!navbar.contains(e.target)&&!mobileNav.contains(e.target))closeMobileNav();
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

/* REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:0.1,rootMargin:'0px 0px -32px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* PROCESS HOVER */
document.querySelectorAll('.process-step').forEach(s=>{
  s.addEventListener('mouseenter',()=>{
    document.querySelectorAll('.process-step').forEach(x=>x.classList.remove('active'));
    s.classList.add('active');
  });
});

/* ARTICLES */
const articles=[
  {tag:'Denial Management',date:'March 10, 2025',title:'Top 10 Strategies to Reduce Claim Denials in 2025',
   body:`<p>Claim denials remain one of the most costly challenges facing healthcare providers today. With the average denial rate hovering between 5–10%, even a modest improvement translates into millions in recovered revenue.</p>
   <h3>1. Invest in Front-End Eligibility Verification</h3>
   <p>Nearly 23% of all denials originate from eligibility and coverage issues. Real-time eligibility checks at scheduling and day-of-service dramatically reduce these front-end denials.</p>
   <h3>2. Implement AI-Powered Claim Scrubbing</h3>
   <p>Modern scrubbing engines check thousands of edits across coding, coverage, and payer-specific rules before submission. AI-enhanced scrubbers learn from historical denial patterns to flag high-risk claims proactively.</p>
   <h3>3. Conduct Root-Cause Denial Analysis</h3>
   <p>Categorize denials by type, payer, provider, and procedure code. A monthly denial dashboard makes recurring patterns visible — what's measured gets fixed.</p>
   <h3>4–10: Additional Proven Strategies</h3>
   <p><strong>4. Standardize prior authorization workflows.</strong><br><br><strong>5. Train coders on payer-specific guidelines</strong> — reduces coding denials by up to 40%.<br><br><strong>6. Automate claim status follow-up.</strong><br><br><strong>7. Ensure timely filing compliance.</strong><br><br><strong>8. Improve documentation quality at point of care.</strong><br><br><strong>9. Use denial benchmarking</strong> against MGMA and HFMA standards.<br><br><strong>10. Partner with a specialist RCM team</strong> — organizations that outsource see 50–65% reduction in denial rates within 90 days.</p>
   <p style="margin-top:24px;padding:16px;background:#f0f4f8;border-radius:10px;border-left:4px solid #005EB8"><strong>Ready to reduce your denial rate?</strong> KivioHealth offers a free denial audit. <a href="#contact" onclick="closeArticle()" style="color:#005EB8;font-weight:600">Request your free audit →</a></p>`},
  {tag:'Technology',date:'February 28, 2025',title:'How AI is Transforming Revenue Cycle Management in Healthcare',
   body:`<p>Artificial intelligence is delivering measurable financial results for forward-thinking healthcare organizations. From predictive denial prevention to intelligent payment posting, AI-powered RCM tools are reshaping what's possible.</p>
   <h3>Predictive Denial Prevention</h3>
   <p>AI-powered systems analyze patterns across millions of historical claims to predict which submissions are most likely to be denied. Leading organizations see first-pass acceptance rates increase from 85–88% to above 97–99%.</p>
   <h3>Robotic Process Automation (RPA)</h3>
   <p>RPA bots handle high-volume repetitive tasks — eligibility checks, claim status queries, payment posting, and ERA reconciliation — at hundreds of verifications per hour with perfect accuracy.</p>
   <h3>NLP for Documentation</h3>
   <p>NLP models analyze clinical documentation and suggest appropriate diagnosis and procedure codes, reducing coder burden while improving accuracy.</p>
   <h3>AI-Driven AR Prioritization</h3>
   <p>Machine learning scores outstanding AR balances by likelihood of collection and optimal contact timing — ensuring your team focuses on accounts most likely to yield revenue.</p>
   <p style="margin-top:24px;padding:16px;background:#f0f4f8;border-radius:10px;border-left:4px solid #28A745"><strong>KivioHealth's AI-Enabled Platform</strong> combines all these capabilities in one integrated workflow. <a href="#contact" onclick="closeArticle()" style="color:#005EB8;font-weight:600">Schedule a technology demo →</a></p>`},
  {tag:'Compliance',date:'February 15, 2025',title:'ICD-11 Transition: What Healthcare Providers Need to Know Now',
   body:`<p>ICD-11 represents the most significant overhaul of clinical coding in over two decades. Healthcare organizations that prepare now will be far better positioned to maintain revenue continuity.</p>
   <h3>What Changes with ICD-11?</h3>
   <p>ICD-11 introduces over 55,000 unique codes — nearly double ICD-10-CM — built on a digital-first foundation. Key changes include new chapters for immune system diseases, sleep-wake disorders, extension codes for additional clinical detail, and redesigned coding guidelines.</p>
   <h3>Financial Implications</h3>
   <p>Every major coding transition brings elevated denial rates and reimbursement delays. Organizations that invested early in ICD-10 preparation experienced significantly less financial disruption — the same principle applies to ICD-11.</p>
   <h3>Action Steps to Take Now</h3>
   <p><strong>1. Assess your EHR vendor's ICD-11 readiness roadmap.</strong><br><br><strong>2. Begin coder education.</strong> AAPC and AHIMA are developing ICD-11 training curricula.<br><br><strong>3. Audit your highest-volume diagnoses</strong> and research ICD-11 equivalents for your top 50 codes.<br><br><strong>4. Review payer contracts</strong> for code-set agnostic language or update provisions.</p>
   <p style="margin-top:24px;padding:16px;background:#f0f4f8;border-radius:10px;border-left:4px solid #005EB8"><strong>KivioHealth's compliance team</strong> monitors all CMS and AMA guidance on ICD-11. <a href="#contact" onclick="closeArticle()" style="color:#005EB8;font-weight:600">Talk to a compliance specialist →</a></p>`}
];

function openArticle(i){
  const a=articles[i];
  document.getElementById('articleTag').textContent=a.tag;
  document.getElementById('articleDate').textContent=a.date;
  document.getElementById('articleTitle').textContent=a.title;
  document.getElementById('articleBody').innerHTML=a.body;
  const o=document.getElementById('articleOverlay');
  o.style.display='block';o.scrollTop=0;document.body.style.overflow='hidden';
}
function closeArticle(){document.getElementById('articleOverlay').style.display='none';document.body.style.overflow='';}
function closeArticleOutside(e){if(e.target===document.getElementById('articleOverlay'))closeArticle();}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeArticle();});

/* FORM */
function resetForm(){
  ['rcmFirstName','rcmLastName','rcmEmail','rcmPhone','rcmPractice','rcmChallenge'].forEach(id=>document.getElementById(id).value='');
  ['rcmSpecialty','rcmProviders','rcmClaimVol'].forEach(id=>document.getElementById(id).selectedIndex=0);
}
function setStatus(type,msg){
  let el=document.getElementById('formStatusMsg');
  if(!el){el=document.createElement('p');el.id='formStatusMsg';el.className='form-status-msg';document.getElementById('submitBtn').insertAdjacentElement('afterend',el);}
  el.className='form-status-msg '+type;
  el.textContent=(type==='error'?'⚠️ ':'✅ ')+msg;
  setTimeout(()=>{el.textContent='';el.className='form-status-msg';},7000);
}
async function submitForm(){
  const f=id=>document.getElementById(id).value.trim();
  const firstName=f('rcmFirstName'),lastName=f('rcmLastName'),email=f('rcmEmail'),phone=f('rcmPhone'),practice=f('rcmPractice');
  const specialty=document.getElementById('rcmSpecialty').value,providers=document.getElementById('rcmProviders').value,claimVol=document.getElementById('rcmClaimVol').value,challenge=f('rcmChallenge');
  if(!firstName||!lastName||!email||!phone||!practice){setStatus('error','Please fill in all required fields marked with *');return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setStatus('error','Please enter a valid email address.');return;}
  const btn=document.getElementById('submitBtn'),loader=document.getElementById('formLoader');
  btn.disabled=true;loader.style.display='flex';
  const GAS_URL='YOUR_GOOGLE_APPS_SCRIPT_URL'; // Paste your Google Apps Script URL here
  try{
    await fetch(GAS_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify({firstName,lastName,email,phone,practice,specialty:specialty||'Not specified',providers:providers||'Not specified',claimVol:claimVol||'Not specified',challenge:challenge||'Not provided'})});
    loader.style.display='none';resetForm();
    btn.textContent="✅ Request Sent! We'll be in touch shortly.";btn.classList.add('success-state');btn.disabled=true;
    setTimeout(()=>{btn.textContent='🚀 Request Free RCM Audit — No Obligation';btn.classList.remove('success-state');btn.disabled=false;},6000);
  }catch(err){
    loader.style.display='none';btn.disabled=false;
    setStatus('error','Network error. Please email us at info@kiviohealth.com');console.error(err);
  }
}

/* FormSubmit.co: AJAX avoids their hosted “Thanks!” page entirely (stays on your site). */
(function(){
  const form=document.getElementById('rcmForm');
  if(!form)return;
  const AJAX_URL='https://formsubmit.co/ajax/mananpatel.phoenix@gmail.com';
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=document.getElementById('submitBtn'),loader=document.getElementById('formLoader');
    btn.disabled=true;loader.style.display='flex';
    try{
      const res=await fetch(AJAX_URL,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      let data={};
      try{data=await res.json();}catch{/* non-JSON */}
      loader.style.display='none';
      const failed=data&&(data.success===false||data.success==='false');
      if(res.ok&&!failed){
        resetForm();
        btn.textContent="✅ Request Sent! We'll be in touch shortly.";
        btn.classList.add('success-state');
        btn.disabled=true;
        setTimeout(()=>{btn.textContent='🚀 Request Free RCM Audit — No Obligation';btn.classList.remove('success-state');btn.disabled=false;},6000);
      }else{
        btn.disabled=false;
        setStatus('error',(data&&data.message)||'Something went wrong. Please email info@kiviohealth.com');
      }
    }catch(err){
      loader.style.display='none';btn.disabled=false;
      setStatus('error','Network error. Please email us at info@kiviohealth.com');console.error(err);
    }
  });
})();
