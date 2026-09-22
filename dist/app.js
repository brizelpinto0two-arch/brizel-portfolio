const projects = [
  {id:'gin-soak',category:'Brand',name:'GIN SOAK',type:'Brand Building',idea:'Soaked in Obsession',preview:'assets/official/gin-soak/hero.webp',roles:['Brand Strategy','Copy','Film','Social Strategy','Design'],brief:'Build a distinctive communication platform for a gin shaped by the Altai region, nine botanicals and the rare Sagan Dali flower.',response:'“Soaked in Obsession” became the central brand thought, connecting the product story to launch communication, social content and retail.',contribution:'Worked with the team on developing the brand thought and copy direction, assisted in writing the brand film and helped plan how the idea would move across launch communication, social content and retail.',videos:['assets/official/gin-soak/brand-film.mp4','assets/official/gin-soak/7.mp4','assets/official/gin-soak/12.mp4'],items:['assets/official/gin-soak/1.webp','assets/official/gin-soak/2.webp','assets/official/gin-soak/3.webp','assets/official/gin-soak/5.webp','assets/official/gin-soak/6.webp','assets/official/gin-soak/8.webp','assets/official/gin-soak/10.webp','assets/official/gin-soak/11.webp','assets/official/gin-soak/13.webp','assets/official/gin-soak/14.webp']},
  {id:'draconic',category:'Brand',name:'DRACONIC',type:'Brand Building',idea:'A Voice for AI-led Trading',preview:'assets/cases/draconic/all/DVdw8fsiogc.jpg',roles:['Positioning','Tone of Voice','Social Strategy','Creative Direction'],brief:'Define how an AI-powered trading product should position itself and communicate on social media.',response:'The positioning and social system gave the product a clear point of view around the judgement, pressure and discipline of trading.',contribution:'Led the creative planning, positioning, tone of voice and social strategy. I set the direction for the visual and verbal system, working with art directors and video editors to produce the final content.',items:[['DUimAYhkW22','local'],['DU-3iuKkWnp','local'],['DU5rh2MEthR','local'],['DVGgjFACvMV','local'],['DVLbOSgigir','local'],['DVQnJqUCv7F','local'],['DVdw8fsiogc','local']]},
  {id:'glacir',category:'Campaign',name:'GLACIR',type:'Brand Communication',idea:'Pure Madness',preview:'assets/official/glacir/hero-cover.webp',previewVideo:'assets/official/glacir/brand-film.mp4',roles:['Copy','Film Writing','Creative Direction','Social Strategy'],brief:'Develop communication around “Pure Madness” and establish how the positioning should behave across film and social.',response:'The communication connected Lake Baikal purity with a sharper, more unpredictable attitude across social, film and retail.',contribution:'Worked with the team on developing the copy direction, assisted in writing the brand film and helped shape the creative treatment across social, film and retail communication.',videos:['assets/official/glacir/brand-film.mp4','assets/official/glacir/pos4.mp4','assets/official/glacir/pos5.mp4','assets/official/glacir/pos9.mp4','assets/official/glacir/pos12.mp4','assets/official/glacir/pos14.mp4'],items:['assets/official/glacir/pos2.webp','assets/official/glacir/pos3.webp','assets/official/glacir/pos6.webp','assets/official/glacir/pos7.webp','assets/official/glacir/pos8.webp','assets/official/glacir/pos10.webp','assets/official/glacir/pos11.webp','assets/official/glacir/pos13.webp']},
  {id:'phq',category:'Identity',name:'PHQ',type:'Social Identity',idea:'A Younger Brand Presence',preview:'assets/phq/post-6.png',previewVideo:'assets/phq/phq-cover.m4v',roles:['Social Strategy','Art Direction','Design'],brief:'Refresh PHQ’s social presence and make the brand feel younger, more current and more relevant to its community.',response:'A flexible visual language gave performance, recovery, nutrition, community and membership stories one recognisable social identity.',contribution:'Led the content plan, creative direction and social art direction. I built the design system and worked with production support to carry it across the final posts and motion pieces.',videos:['assets/phq/phq-cover.m4v','assets/phq/phq-video-2.m4v'],items:[...Array.from({length:5},(_,i)=>`assets/phq/full/unpacked/Post 1/Slide ${i+1}.png`),...Array.from({length:6},(_,i)=>`assets/phq/full/unpacked/Post 3/Slide ${i+1}.png`),...Array.from({length:4},(_,i)=>`assets/phq/full/unpacked/Post 4/Slide ${i+1}.png`),...Array.from({length:4},(_,i)=>`assets/phq/full/unpacked/Post 7/Slide ${i+1}.png`),'assets/phq/post-2.png','assets/phq/post-5.png','assets/phq/post-6.png','assets/phq/founding-01.png','assets/phq/founding-02.png']},
];

const gallery = document.querySelector('#work-gallery');
const dialog = document.querySelector('#case-view');
const caseContent = document.querySelector('#case-content');
const instagram = (code,type) => `https://www.instagram.com/${type==='reel'?'reel':'p'}/${code}/`;

const campaignCases = [
  {
    id:'bite-of-tn', index:'01', brand:'Britannia Milk Bikis', year:'2025', title:'A Bite of TN',
    discipline:'Hyperlocal campaign · Film · OOH · Print', role:'Designer · Cultural research · Craft development',
    hero:'assets/campaigns/bite-of-tn/01.jpg', film:'https://www.youtube.com/embed/JMbFaDeSD2I',
    brief:'Celebrate Tamil Nadu Day through a campaign that could only belong to Milk Bikis and the state that has made the biscuit part of everyday culture.',
    idea:'The campaign began with a local ritual: biting around the biscuit’s flower border and logo. That behaviour became a visual system in which Milk Bikis were shaped into cultural icons and used as guides to places across Tamil Nadu.',
    contribution:'I researched landmarks and cultural references across the state, developed more than 100 silhouettes and manually cut the proposed biscuit shapes in design before they were produced physically. The work informed the outdoor, print and film language.',
    result:'80 directional billboards across 19 districts, supported by 13 district-specific print creatives and a stop-motion campaign film.',
    images:['assets/campaigns/bite-of-tn/01.jpg','assets/campaigns/bite-of-tn/02.jpg','assets/campaigns/bite-of-tn/03.jpg','assets/campaigns/bite-of-tn/04.jpg','assets/campaigns/bite-of-tn/05.png','assets/campaigns/bite-of-tn/06.jpg'],
    links:[['OFFICIAL CASE STUDY','https://www.britannia.co.in/article/britannia-milk-bikis-redefine-bite-sized-content-with-their-new-campaign-for-tamil-nadu-day'],['WATCH FILM','https://youtu.be/JMbFaDeSD2I'],['VIEW CAMPAIGN POST','https://www.linkedin.com/posts/siddharth-gupta-65609214_britannia-milk-bikis-has-grown-with-tamil-activity-7351990417665515520-LlP7']]
  },
  {
    id:'snore-store', index:'02', brand:'Flipkart', year:'2025', title:'The Snore Store',
    discipline:'Interactive commerce · AI/ML · Valentine’s Day', role:'Designer · UI/UX · Collateral · Social',
    hero:'assets/campaigns/snore-store/hero.jpg', film:'https://www.youtube.com/embed/fOBMI0JdsJM',
    brief:'Turn Valentine’s Day gifting into a useful, playful experience for couples living with one very familiar relationship problem: snoring.',
    idea:'An AI-powered experience measured the volume, frequency and rate of a partner’s snores, then translated those sounds into live shopping offers. Louder snores earned bigger discounts.',
    contribution:'I helped design the end-to-end interface and customer journey, along with campaign collateral and social communication. The system had to make an unusual audio mechanic immediate, legible and easy to use.',
    result:'The campaign drove 62 million visits and 5% growth in new-user traffic during Flipkart’s Valentine’s Day sale. The work was selected for Kyoorius Creative Awards’ First List.',
    images:['assets/campaigns/snore-store/hero.jpg'],
    links:[['WATCH OFFICIAL FILM','https://www.youtube.com/watch?v=fOBMI0JdsJM'],['VIEW AWARD CASE','https://kyooriuscreative2025.awardsengine.com/?action=ows%3Aentries.details&e=183721&project_year=2025'],['READ FLIPKART RELEASE','https://stories.flipkart.com/announcement/flipkart-celebrates-finding-joy-in-the-imperfections-turns-snores-into-stunning-offers-to-celebrate-valentine-s-day']]
  },
  {
    id:'northstar-kp', index:'03', brand:'Dram Bell', year:'2026', title:'The Hack That Wasn’t',
    discipline:'#NorthStarKP · Earned-media launch · Social · Celebrity collaboration', role:'Idea · Planning · Execution',
    hero:'assets/campaigns/northstar-kp/hero-fullbleed.jpg', film:'https://drive.google.com/file/d/1RnpDYINuqfZg_gDatcHHHBfJEsNimzYQ/preview',
    brief:'Launch Dram Bell in North India without the media budget or conventional advertising routes available to most brands.',
    idea:'Kevin Pietersen’s unexplained switch to Bollywood memes and the hashtag #NorthStarKP made the market investigate the story before the brand reveal. Curiosity became the media plan.',
    contribution:'I worked across the idea, planning and execution, shaping how the cryptic posts built momentum, how the conversation unfolded and how the reveal connected the behaviour back to Dram Bell’s North India launch.',
    result:'ABBY Gold 2026 in Small Budget, Big Impact, with five shortlists and two merits. The campaign earned 4M+ organic impressions, reached 2.9M+ people, performed 11× above the industry engagement benchmark and trended at #1 in North India for 11 hours.',
    images:['assets/campaigns/northstar-kp/caseboard.jpg'],
    links:[['WATCH THE CASE FILM','https://drive.google.com/file/d/1RnpDYINuqfZg_gDatcHHHBfJEsNimzYQ/view'],['READ THE CASE STUDY','https://www.adgully.com/post/17665/how-dram-bell-used-kevin-pietersen-and-zero-media-spend-to-win-gold-at-indias-biggest-advertising-festival'],['DRAM BELL ON INSTAGRAM','https://www.instagram.com/drambellscotch/']]
  },
  {
    id:'dear-monk', index:'04', brand:'Alpha Bull Rum', year:'2026', title:'Dear Monk',
    discipline:'Reactive brand campaign · Long-copy · Social', role:'Strategy · Extended social copy',
    hero:'assets/campaigns/dear-monk/hero.webp',
    brief:'Old Monk had left shelves following regulatory action, creating a clear competitive opening for Alpha Bull Rum. The brief was to determine how the brand could make the most of that moment without turning the response into an opportunistic attack.',
    idea:'The strategic deep-dive showed that Old Monk’s absence carried cultural weight. Alpha Bull responded with a long-copy open letter that acknowledged the rituals, memories and loyalty surrounding the brand. It ended with: “Even a Bull bows to a Monk.”',
    contribution:'I was part of the campaign team and worked on the strategy, recognising Old Monk as a cult favourite with a deeply loyal community. That insight shaped a response built around memory and respect. I also wrote the extended social copy, carrying the central thought into six additional posts about the rituals and communities surrounding the brand.',
    result:'The letter travelled through industry press, LinkedIn and social commentary, giving Alpha Bull a clear point of view without turning another brand’s setback into a sales message.',
    images:['assets/campaigns/dear-monk/hero.webp','assets/campaigns/dear-monk/letter.webp','assets/campaigns/dear-monk/social-whatsapp-groups.jpg','assets/campaigns/dear-monk/social-dads.jpg','assets/campaigns/dear-monk/social-coke-lime.jpg'],
    links:[['READ THE CAMPAIGN STORY','https://adtribe.world/alpha-bull-rum-dear-monk-open-letter-old-monk'],['READ PRESS COVERAGE','https://www.exchange4media.com/marketing-news/when-a-rum-brand-chose-respect-over-rivalry-157893.html'],['VIEW SOCIAL COVERAGE','https://www.linkedin.com/posts/ad-tribe_alpha-bull-rum-has-taken-an-unconventional-activity-7492851762463236096-kQBK']]
  },
  {
    id:'pauseboards', index:'05', brand:'Continental Speciale', year:'2026', title:'PauseBoards',
    discipline:'Outdoor campaign · Brand platform · Copy-led design', role:'Creative Direction · Ideation · Copywriting · Design Collaboration',
    hero:'assets/campaigns/pauseboards/hero.jpg',
    brief:'In an always-on culture, spare minutes are filled, delays become catch-up time and pauses are treated as time lost. Continental Speciale needed an outdoor idea that made people notice the quiet moments they usually rush past.',
    idea:'We turned two vertical billboards into the universal pause symbol. Across each pair, one uninterrupted slice-of-life story unfolded, allowing the medium to communicate the thought before a line of copy was read.',
    contribution:'I led the concept from ideation through creative direction and wrote the campaign copy. I worked with an art director to develop the final visual design and carry the pause-symbol system across each execution.',
    result:'The campaign won Young OAC 2026 and gave Continental Speciale an ownable outdoor format for its “Worth Pausing For” platform.',
    images:['assets/campaigns/pauseboards/caseboard.jpg','assets/campaigns/pauseboards/copy-execution.jpg'],
    links:[]
  },
  {
    id:'flipkart-aadi', index:'06', brand:'Flipkart', year:'2025', title:'Aadi Thallaadhabadi Sale',
    discipline:'Regional retail campaign · Key visuals · Website', role:'Designer · Key Visuals · Website Creatives',
    hero:'assets/museum/flipkart-aadi/03.jpg', film:'https://www.youtube.com/embed/cxYiM6ngy88',
    brief:'Carry Flipkart’s Aadi sale into a distinct campaign for Tamil Nadu, with a visual system that could hold local humour and the urgency of a large retail event.',
    idea:'“No Thallings, Only Offer Allings” turned the familiar language of bargaining into the campaign’s sales hook. Marquee lettering, Flipkart blue and yellow, and the fist-bump device gave the sale a loud, recognisable identity.',
    contribution:'I worked on the website creatives and key visuals, extending the campaign language across sale announcements, product-led communication and digital placements.',
    result:'The campaign identity carried consistently across the website, key visuals and sale communication, giving the regional event a clear visual signature.',
    images:['assets/museum/flipkart-aadi/01.png','assets/museum/flipkart-aadi/02.jpg','assets/museum/flipkart-aadi/03.jpg','assets/museum/flipkart-aadi/04.png','assets/museum/flipkart-aadi/05.png'],
    links:[['WATCH THE CAMPAIGN FILM','https://www.youtube.com/watch?v=cxYiM6ngy88']]
  },
  {
    id:'netflix-test', index:'07', brand:'Netflix', year:'2025', title:'TEST — Film Launch',
    discipline:'Film launch · Print · Digital · Regional communication', role:'Assistant Art Director · Design · Launch Concepts',
    hero:'assets/campaigns/test-launch/interview-kv.png',
    brief:'Launch Netflix’s first Tamil original film of 2025 across India. TEST brought together R. Madhavan, Nayanthara and Siddharth in a drama where a historic cricket match forces three people into life-changing decisions.',
    idea:'The release work used the film’s moral tension—who is good, who is bad, and how quickly that judgement can turn—as the campaign’s central provocation. The question moved across newspaper, key visuals, regional communication and cast-led launch content.',
    contribution:'As Assistant Art Director at Talented, I worked with the team on launch concepts and ideas, then helped design the release campaign across print and digital executions. My role focused on translating the film’s dual perspectives and cricket setting into clear, high-impact launch communication.',
    result:'TEST premiered on Netflix on 4 April 2025 in Tamil, Hindi, Telugu, Malayalam and Kannada. The launch introduced Netflix’s first Tamil original film of the year through a multilingual campaign built around its ensemble cast and central moral dilemma.',
    images:['assets/campaigns/test-launch/newspaper.jpg','assets/campaigns/test-launch/character-kv.jpg','assets/campaigns/test-launch/tamil-slate-cropped.jpg','assets/campaigns/test-launch/interview-kv.png','assets/campaigns/test-launch/poster.jpg'],
    links:[['WATCH ON NETFLIX','https://www.netflix.com/in/title/81775792'],['WATCH THE OFFICIAL TRAILER','https://www.youtube.com/watch?v=ryR2-jVjoeA'],['READ THE NETFLIX ANNOUNCEMENT','https://about.netflix.com/en/news/a-cricketer-a-scientist-a-teacher-in-netflix-film-test']]
  },
  {
    id:'pizza-express', index:'08', brand:'PizzaExpress', year:'2025', title:'Deliver Yourself to PizzaExpress',
    discipline:'Bengaluru launch · Key visuals · Design', role:'Designer · Campaign Design · Key Visuals',
    hero:'assets/museum/pizza-express/02.jpg',
    brief:'Introduce PizzaExpress to Bengaluru with a campaign world that made the new restaurant feel immediate, social and worth crossing the city for.',
    idea:'The work treated the journey to PizzaExpress as part of the appetite. Bold type, playful lines and close-up food imagery made every route end at the table.',
    contribution:'Working with the wider creative team, I developed the campaign designs and key visuals for the Bengaluru launch, carrying the idea across food-led and lifestyle executions.',
    result:'The campaign created a flexible launch language that could move between city communication, digital placements and restaurant-led creative.',
    images:['assets/museum/pizza-express/02.jpg','assets/museum/pizza-express/01.jpg','assets/museum/pizza-express/03.png'],
    links:[]
  },
  {
    id:'meta-growth', index:'09', brand:'Meta', year:'2025', title:'Kyunki Badhna Abhi Baaki Hai',
    discipline:'Performance campaign · Key visuals · Modular design', role:'Creative Direction · Key Visual Design · Layout System',
    hero:'assets/meta/meta-jaysart-01.jpg',
    brief:'Show small businesses how Meta advertising could support the next stage of their growth through communication grounded in real entrepreneurial stories.',
    idea:'“Kyunki Badhna Abhi Baaki Hai” framed growth as a continuing journey. Each visual paired a distinct business story with recognisable Meta product cues inside one modular campaign system.',
    contribution:'I worked on the creative direction and key visual design, building a repeatable layout system for different founders, products and paid-media formats.',
    result:'The system gave individual business stories their own character while keeping the campaign recognisable across every execution.',
    images:['assets/meta/meta-jaysart-01.jpg','assets/meta/meta-jaysart-02.jpg','assets/meta/meta-priyassarees-clean.png','assets/meta/meta-zoyapaints-clean.png'],
    links:[]
  },
  {
    id:'duolingo-vaathi', index:'10', brand:'Duolingo', year:'2025', title:'English Vaathi Coming',
    discipline:'Social-first launch campaign · Regional identity', role:'Design · Social Content · Look & Feel',
    hero:'assets/campaigns/duolingo-vaathi/hero.jpg',
    brief:'Launch Duolingo’s fourth Indic course, “Learn English from Tamil,” for a Tamil Nadu audience in a way that felt native to the region rather than a translated import.',
    idea:'“English Vaathi Coming” reimagined Duo as a Kollywood-style mass entry, channelling the swagger, kuthu beats and fan-theatrics of Tamil cinema into a moniker-led social launch.',
    contribution:'Worked on the designs and social content, shaping the look and feel of the campaign across social media.',
    result:'The launch found its way into Tamil Nadu’s own pop-culture conversation online, introducing Duolingo’s fourth Indic language course on the region’s own cinematic terms.',
    images:['assets/campaigns/duolingo-vaathi/hero.jpg'],
    links:[['CAMPAIGN COVERAGE','https://campaignbriefasia.com/2025/01/14/talented-india-infuses-tamil-pop-culture-into-duolingos-learn-english-from-tamil-campaign/'],['WATCH FILM','https://www.instagram.com/p/DEohYRSShYV/']]
  }
];

function openCampaign(campaign) {
  const links=campaign.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`).join('');
  const film=campaign.film ? `<div class="campaign-film"><iframe src="${campaign.film}" title="${campaign.title} campaign film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : '';
  const images=campaign.images.map(src=>`<figure><img loading="lazy" src="${src}" alt="${campaign.title} campaign asset"></figure>`).join('');
  const videos=(campaign.videos||[]).map(src=>`<figure><video muted loop autoplay playsinline preload="metadata" src="${src}" aria-label="${campaign.title} campaign film"></video></figure>`).join('');
  caseContent.innerHTML=`<article class="campaign-case campaign-${campaign.id}"><header class="campaign-case-cover"><img src="${campaign.hero}" alt="${campaign.title} key visual"></header><section class="campaign-case-heading"><p>${campaign.index} / ${String(campaignCases.length).padStart(2,'0')} · ${campaign.brand} · ${campaign.year}</p><h2>${campaign.title}</h2><h3>${campaign.discipline}</h3></section>${film}<section class="campaign-case-story"><div><small>THE BRIEF</small><p>${campaign.brief}</p></div><div><small>THE IDEA</small><p>${campaign.idea}</p></div><div><small>MY CONTRIBUTION</small><p>${campaign.contribution}</p><strong>${campaign.role}</strong></div><div><small>OUTCOME</small><p>${campaign.result}</p></div></section><nav class="campaign-case-links" aria-label="Campaign sources">${links}</nav><div class="campaign-notes-label">CASE NOTES / CAMPAIGN ASSETS</div><div class="campaign-case-gallery">${videos}${images}</div></article>`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('case-open');
  dialog.scrollTop=0;
  history.replaceState(null,'',`#campaign-${campaign.id}`);
}

document.querySelectorAll('[data-campaign-id]').forEach(button=>button.addEventListener('click',()=>openCampaign(campaignCases.find(item=>item.id===button.dataset.campaignId))));

function mediaMarkup(project) {
  return (project.items || []).map(item => {
    const isInstagram = Array.isArray(item);
    const src = isInstagram ? `assets/cases/${project.id.replace('-','')}/all/${item[0]}.jpg` : item;
    const url = isInstagram && item[1] !== 'local' ? (item[2] || instagram(item[0],item[1])) : '';
    const isReel = isInstagram && item[1] === 'reel';
    if (isReel) return `<figure class="media motion instagram-reel"><iframe src="https://www.instagram.com/reel/${item[0]}/embed" title="${project.name} reel" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></figure>`;
    return `<figure class="media">${url?`<a href="${url}" target="_blank" rel="noreferrer">`:''}<img loading="lazy" src="${src}" alt="${project.name} project artwork">${url?'</a>':''}</figure>`;
  }).join('');
}

function openProject(project) {
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const films = project.videos ? `<div class="film-pair">${project.videos.map(src => `<video muted loop autoplay playsinline src="${src}"></video>`).join('')}</div>` : '';
  const caseFilm = project.film ? `<div class="campaign-film project-film"><iframe src="${project.film}" title="${project.name} campaign film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>` : '';
  const sourceLinks = project.links ? `<nav class="campaign-case-links project-links" aria-label="Project links">${project.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`).join('')}</nav>` : '';
  const coverVideo = project.previewVideo || (project.id === 'gin-soak' ? project.videos?.[0] : '');
  const heroMedia = coverVideo ? `<video class="case-hero-media" muted loop autoplay playsinline src="${coverVideo}"></video>` : `<img class="case-hero-media" src="${project.preview}" alt="${project.name} key visual">`;
  caseContent.innerHTML = `<article class="case-article"><header class="case-cover">${heroMedia}</header><section class="case-heading"><div class="case-heading-meta"><span>${String(index+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span><span>${project.type}</span></div><h2>${project.name}</h2><h3>${project.idea}</h3><div class="case-accordions"><details open><summary>PROJECT STORY <span>+</span></summary><div><p><b>THE BRIEF</b>${project.brief}</p><p><b>THE RESPONSE</b>${project.response}</p></div></details><details open><summary>MY CONTRIBUTION <span>+</span></summary><div class="project-contribution"><p>${project.contribution}</p></div></details></div>${sourceLinks}</section>${caseFilm}${films}<div class="masonry">${mediaMarkup(project)}</div><button class="next-case" type="button"><span>NEXT PROJECT</span><strong>${next.name} →</strong></button></article>`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('case-open');
  dialog.scrollTop = 0;
  history.replaceState(null,'',`#project-${project.id}`);
  caseContent.querySelector('.next-case').addEventListener('click',()=>openProject(next));
}

function projectImage(project,itemIndex=1) {
  const item=(project.items||[])[itemIndex] || project.preview;
  return Array.isArray(item) ? `assets/cases/${project.id.replace('-','')}/all/${item[0]}.jpg` : item;
}

function renderProjects(filter='all') {
  const visible=filter==='all' ? projects : projects.filter(project=>project.category===filter);
  gallery.innerHTML='';
  const workCount=document.querySelector('#work-count');
  if(workCount) workCount.textContent=`[${String(visible.length).padStart(2,'0')}]`;
  visible.forEach(project=>{
    const index=projects.indexOf(project);
    const card=document.createElement('button');
    card.type='button';
    card.className='work-card';
    card.dataset.category=project.category;
    const coverVideo=project.previewVideo || (project.id === 'gin-soak' ? project.videos?.[0] : '');
    const primary=coverVideo ? `<video muted loop autoplay playsinline preload="metadata" poster="${project.preview}" src="${coverVideo}"></video>` : `<img loading="lazy" src="${project.preview}" alt="${project.name} project">`;
    card.innerHTML=`<span class="card-media">${primary}<img class="card-secondary" loading="lazy" src="${projectImage(project)}" alt=""></span><span class="card-meta"><b>${project.type}</b><strong>${project.name}</strong><em>(${String(index+1).padStart(2,'0')})</em></span>`;
    const video=card.querySelector('video');
    if(video) video.play().catch(()=>{});
    card.addEventListener('pointermove',event=>{const box=card.getBoundingClientRect();const x=(event.clientX-box.left)/box.width-.5;const y=(event.clientY-box.top)/box.height-.5;card.style.setProperty('--tilt-x',`${(-y*7).toFixed(2)}deg`);card.style.setProperty('--tilt-y',`${(x*9).toFixed(2)}deg`);card.style.setProperty('--shift-x',`${(x*10).toFixed(1)}px`);card.style.setProperty('--shift-y',`${(y*8).toFixed(1)}px`)});
    card.addEventListener('pointerleave',()=>{card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg');card.style.setProperty('--shift-x','0px');card.style.setProperty('--shift-y','0px')});
    card.addEventListener('click',()=>{gallery.querySelectorAll('.work-card').forEach(item=>item.classList.remove('selected'));card.classList.add('selected');openProject(project)});
    gallery.appendChild(card);
  });
}

if (gallery) {
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>item.classList.remove('active'));button.classList.add('active');renderProjects(button.dataset.filter)}));
  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-view]').forEach(item=>item.classList.remove('active'));button.classList.add('active');gallery.classList.toggle('list-view',button.dataset.view==='list')}));
  renderProjects();
}

document.querySelector('.case-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{ if(event.target===dialog) dialog.close(); });
dialog.addEventListener('close',()=>{ document.body.classList.remove('case-open'); history.replaceState(null,'', '#work'); });
document.addEventListener('keydown',event=>{ if(event.key==='Escape' && dialog.open) dialog.close(); });
const hashProject = location.hash.match(/^#project-(.+)$/);
if (hashProject) {
  const project = projects.find(item=>item.id===hashProject[1]);
  if (project) openProject(project);
}
const hashCampaign = location.hash.match(/^#campaign-(.+)$/);
if (hashCampaign) {
  const campaign = campaignCases.find(item=>item.id===hashCampaign[1]);
  if (campaign) openCampaign(campaign);
}

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('is-visible')),{threshold:.08});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
const videoObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.play().catch(()=>{});else entry.target.pause()}),{threshold:.25});
document.querySelectorAll('video').forEach(video=>{video.muted=true;video.defaultMuted=true;video.volume=0;videoObserver.observe(video)});

const menuToggle=document.querySelector('.menu-toggle');
const siteMenu=document.querySelector('#site-menu');
if(menuToggle&&siteMenu){
  const closeMenu=()=>{document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation')};
  menuToggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
  siteMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
}

const cursor = document.querySelector('.cursor');
window.addEventListener('pointermove',event=>{cursor.style.left=`${event.clientX}px`;cursor.style.top=`${event.clientY}px`});
document.addEventListener('mouseover',event=>{if(event.target.closest('a,button,.media'))cursor.classList.add('cursor-active')});
document.addEventListener('mouseout',event=>{if(event.target.closest('a,button,.media'))cursor.classList.remove('cursor-active')});

document.querySelectorAll('.carousel-shell').forEach(shell=>{
  const scroller=shell.querySelector('[data-carousel]');
  const prev=shell.querySelector('.carousel-nav.prev');
  const next=shell.querySelector('.carousel-nav.next');
  if(!scroller||!prev||!next) return;
  const update=()=>{
    const max=scroller.scrollWidth-scroller.clientWidth;
    prev.disabled=scroller.scrollLeft<=4;
    next.disabled=max<=4||scroller.scrollLeft>=max-4;
  };
  const step=()=>Math.max(scroller.clientWidth*0.85,220);
  prev.addEventListener('click',()=>scroller.scrollBy({left:-step(),behavior:'smooth'}));
  next.addEventListener('click',()=>scroller.scrollBy({left:step(),behavior:'smooth'}));
  scroller.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
  window.addEventListener('resize',update);
  update();
});
