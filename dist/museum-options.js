const works=[
  ['GIN SOAK','BRAND BUILDING','assets/cases/ginsoak/all/DPyVJRrE6aV.jpg'],
  ['DRACONIC','BRAND BUILDING','assets/cases/draconic/all/DVdw8fsiogc.jpg'],
  ['GLACIR','BRAND COMMUNICATION','assets/official/glacir/hero-cover.webp'],
  ['PHQ','SOCIAL IDENTITY','assets/phq/post-6.png']
];

const directions=[
  ['01','THE REGISTRY','A disciplined seven-column catalogue. Everything is visible at once.'],
  ['02','THE EDITORIAL INDEX','Typography leads; one image interrupts each row.'],
  ['03','THE CONTACT SHEET','Small, precise and archival—like a photographer’s working index.'],
  ['04','THE OFFSET CATALOGUE','A controlled asymmetry with one larger feature in every row.'],
  ['05','THE FILM STRIP','Work moves horizontally in two compact rails.'],
  ['06','THE LEDGER','A text-first index with imagery revealed on hover.'],
  ['07','THE POSTER ROOM','A quiet wall of framed work with generous black space.'],
  ['08','THE LIBRARY SHELF','Projects sit edge-to-edge like books or records.'],
  ['09','THE SPLIT ARCHIVE','A numbered index beside a live visual wall.'],
  ['10','THE DENSE MATRIX','The smallest footprint: an information-rich grid with quick scanning.']
];

const card=(work,index)=>`<article class="sample-card" tabindex="0"><figure><img loading="lazy" src="${work[2]}" alt="${work[0]} project"></figure><div><small>${String(index+1).padStart(2,'0')} · ${work[1]}</small><strong>${work[0]}</strong></div></article>`;

document.querySelector('#options').innerHTML=directions.map(([number,name,note],directionIndex)=>{
  const items=works.map(card).join('');
  return `<section class="direction direction-${directionIndex+1}" id="option-${directionIndex+1}"><header><span>${number} / 10</span><h2>${name}</h2><p>${note}</p><a href="#option-${directionIndex===9?1:directionIndex+2}">NEXT DIRECTION ↓</a></header><div class="direction-stage">${items}</div></section>`;
}).join('');
