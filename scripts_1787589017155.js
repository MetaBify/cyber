
    function toggleSec(id) {
      const el = document.getElementById('sec-' + id);
      const btn = document.getElementById('btn-' + id);
      document.querySelectorAll('.sec-drop').forEach(s => s.id !== 'sec-' + id && s.classList.remove('visible'));
      document.querySelectorAll('.topbar-btn').forEach(b => b.id !== 'btn-' + id && b.classList.remove('active'));
      
      const wrapper = document.querySelector('.wrapper');
      if (el.classList.contains('visible')) {
        el.classList.remove('visible');
        if (btn) btn.classList.remove('active');
        document.getElementById('btn-main').classList.add('active');
        wrapper.classList.remove('cards-hidden');
      } else {
        el.classList.add('visible');
        if (btn) btn.classList.add('active');
        wrapper.classList.add('cards-hidden');
      }
    }
    document.getElementById('btn-about').onclick = () => toggleSec('about');
    document.getElementById('btn-contact').onclick = () => toggleSec('contact');
    document.getElementById('btn-faq').onclick = () => toggleSec('faq');
    document.getElementById('btn-main').onclick = () => {
    document.querySelectorAll('.sec-drop').forEach(s => s.classList.remove('visible'));
    document.querySelectorAll('.topbar-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-main').classList.add('active');
    document.querySelector('.wrapper').classList.remove('cards-hidden');
    };
    function toggleCard(id) { 
      const el = document.getElementById('card-' + id); 
      if (el) el.classList.toggle('collapsed'); 
    }
  
/* https://cyberleek.gatewaypie.com/assets/index-B5VI5ckO.js */
/* chrome-extension://dfablgdffinpaeiilgjpebchbacimpoa/eparaksts-page.js */
