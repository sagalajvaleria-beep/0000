(function(){
  const languageButtons=document.querySelectorAll('.lang-switch');
  let language=localStorage.getItem('wrapt-language')||'uk';
  function setLanguage(next){
    language=next; localStorage.setItem('wrapt-language',language);
    document.documentElement.lang=language;
    document.querySelectorAll('[data-uk][data-en]').forEach(el=>{
      const value=el.getAttribute('data-'+language);
      if(value!==null){ if(el.tagName==='OPTION') el.textContent=value; else el.innerHTML=value; }
    });
    languageButtons.forEach(btn=>btn.textContent=language==='uk'?'EN':'UA');
    if(document.getElementById('selector-title')) updateSelector();
    if(document.getElementById('material-result-title')) updateMaterial();
  }
  languageButtons.forEach(btn=>btn.addEventListener('click',()=>setLanguage(language==='uk'?'en':'uk')));

  const menuButton=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(menuButton&&nav) menuButton.addEventListener('click',()=>nav.classList.toggle('open'));

  const filters=document.querySelectorAll('.filter-button');
  const items=document.querySelectorAll('.gallery-item');
  filters.forEach(button=>button.addEventListener('click',()=>{
    filters.forEach(item=>item.classList.remove('selected'));
    button.classList.add('selected');
    const filter=button.dataset.filter;
    items.forEach(item=>{item.hidden=filter!=='all'&&!item.dataset.category.split(' ').includes(filter);});
  }));

  const select=document.getElementById('product-select');
  const options={
    beauty:{uk:['Структурована коробка з індивідуальним ложементом','Можливе рішення: коробка з картону або комбінованих матеріалів, внутрішня фіксація продукту, брендовий друк та делікатне оздоблення.'],en:['A structured box with a custom insert','Possible direction: a cardboard or mixed-material box, a product insert, branded printing and refined finishing.']},
    fashion:{uk:['Пакет або текстильний чохол із брендовою деталлю','Можливе рішення: паперовий пакет, текстильний мішечок або чохол, бірки, вкладення та стрічка в стилі бренду.'],en:['A branded bag or textile cover','Possible direction: a paper bag, textile pouch or cover, tags, inserts and a ribbon aligned with the brand.']},
    gift:{uk:['Подарункова коробка з багатошаровою конструкцією','Можливе рішення: жорстка коробка, декоративне оздоблення, ложемент, стрічка або комбінування картону й текстилю.'],en:['A gift box with a layered structure','Possible direction: a rigid box, decorative finishing, insert, ribbon or a combination of cardboard and textiles.']},
    lifestyle:{uk:['Комбіноване пакування для предметного продукту','Можливе рішення: коробка або футляр із картону, деревини чи текстилю з урахуванням ваги, форми та способу використання продукту.'],en:['Combined packaging for a lifestyle object','Possible direction: a box or case made from cardboard, wood or textiles, considering the product weight, shape and use.']}
  };
  function updateSelector(){if(!select)return;const item=options[select.value];const copy=item[language];document.getElementById('selector-title').textContent=copy[0];document.getElementById('selector-desc').textContent=copy[1];}
  if(select){select.addEventListener('change',updateSelector);updateSelector();}

  const materialSelect=document.getElementById('material-select');
  const materialOptions={
    paper:{uk:['Обгортки, пакети та вкладення','Папір підходить для легких обгорток, пакетів, внутрішніх вкладень і декоративних елементів.'],en:['Wraps, bags and inserts','Paper can be used for light wraps, bags, inner inserts and decorative details.']},
    cardboard:{uk:['Коробки, футляри та ложементи','Картон і гофрокартон допомагають створювати конструкції, де важливі форма, жорсткість і захист продукту.'],en:['Boxes, cases and inserts','Cardboard and corrugated board help create structures where shape, rigidity and product protection matter.']},
    wood:{uk:['Подарункові коробки та багаторазові футляри','Деревина може використовуватися для виразних подарункових рішень і пакування, розрахованого на повторне використання.'],en:['Gift boxes and reusable cases','Wood can be used for distinctive gift solutions and packaging designed for repeated use.']},
    textile:{uk:['Мішечки, чохли та стрічки','Текстиль додає м’якості й тактильності; його можна застосовувати як самостійний елемент або частину комбінованої конструкції.'],en:['Pouches, covers and ribbons','Textiles add softness and tactility; they can be used on their own or as part of a combined structure.']},
    mixed:{uk:['Багатоматеріальні конструкції','Поєднання матеріалів дає змогу працювати з контрастом фактур, функціями та нестандартною геометрією.'],en:['Multi-material structures','Combining materials makes it possible to explore contrasting textures, functions and unexpected geometry.']}
  };
  function updateMaterial(){if(!materialSelect)return;const pair=materialOptions[materialSelect.value][language];document.getElementById('material-result-title').textContent=pair[0];document.getElementById('material-result-desc').textContent=pair[1];}
  if(materialSelect){materialSelect.addEventListener('change',updateMaterial);updateMaterial();}

  const revealTargets=document.querySelectorAll('.section,.service-card,.product-card,.material-card,.gallery-item,.timeline-step,.service-row,.package-card,.material-note,.material-explorer,.selector-section');
  revealTargets.forEach(el=>el.classList.add('scroll-reveal'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.12});
    revealTargets.forEach(el=>observer.observe(el));
  }else{revealTargets.forEach(el=>el.classList.add('is-visible'));}

  const form=document.getElementById('brief-form');
  if(form) form.addEventListener('submit',event=>{
    event.preventDefault();
    const message=language==='uk'?'Дякуємо! Демонстрацію форми успішно пройдено. Дані нікуди не надсилалися.':'Thank you! The form demo was completed. No data has been sent.';
    document.getElementById('form-success').textContent=message;
    form.reset();
  });

  setLanguage(language);
})();
