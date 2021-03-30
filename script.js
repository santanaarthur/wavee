/*musicas = [
 "Dancing in my room", "Get Stupid", 
 "Molchat Doma Sudno", "Poesia Loud", 
 "Rap da Akatsuki", "Rap dos Hokages", 
 "Wolves"];

t = ""

/*for (i in musicas){
  t += "<div>"+musicas[0]+"</div>"
}

lista.innerHTML = t 

pesquisa.onkeyup=function(e){
  t = this.value
  r = new RegExp(t, "g")
  for (i in musicas){
    if ( musicas[i].match(r) ){
      lista.children[i].removeAttribute("style")
    } else {
      lista.children[i].style.display="none"
    }
  }
}
*/




let musicas = [{
  nome: 'Dancing in my room',
  artistas: '347aidan',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826200305091477524/capa_dancing.jpg'
}, {
  nome: 'Get Stupid',
  artistas: 'bülow',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826200303648768030/capa_get_stupid.jpg'
}, {
  nome: 'Sudno',
  artistas: 'Molchat Doma',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826194564976082954/unknown.png'
}, {
  nome: 'Wolves',
  artistas: 'Kanye West',
  capa:'https://cdn.discordapp.com/attachments/768102450979667978/826197802865524746/ab67616d00001e029ed8102dfbdf3a9a82857d3a.png'
}, {
  nome: 'Rap da Akatsuki',
  artistas: '7Mz',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826194831931867146/unknown.png'
}, {
  nome: 'Rap dos Hokages',
  artistas: '7Mz',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826197628952903700/unknown.png'
}, {
  nome: 'Inabalável',
  artistas: 'VMZ',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826198241338982420/unknown.png'
}, {
  nome: 'chuva passageira',
  artistas: 'GabrielMzero',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826202992155688970/unknown.png'
}, {
  nome: 'falador',
  artistas: 'GabrielMzero',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826202821690261624/unknown.png'
}, {
  nome: 'Bad Girl',
  artistas: 'VMZ',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826197787040415744/unknown.png'
}, {
  nome: 'Sem Ela',
  artistas: 'VMZ feat. Lucas A.R.T.',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826197952267419688/unknown.png'
}, {
  nome: 'Say So japanese Cover',
  artistas: 'Doja cat - Rainych',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826201411536683018/unknown.png'
}, {
  nome: 'Rap do Sanji',
  artistas: '7Mz',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826236590954643497/unknown.png'
}, {
  nome: 'tanto tempo que eu não te vejo',
  artistas: 'GabrielMzero',
  capa: 'https://cdn.discordapp.com/attachments/768102450979667978/826203273420865606/unknown.png'
}];


function insereMusicasNaPagina(musicas) {
  let containerEl = document.querySelector('main');

  let musicasDivEl = document.querySelector('.musicas');
  let musicasDiv2El = document.querySelector('.tanto-tempo');
  let downloadEl = musicasDiv2El.querySelector(':first-child');
  let download1El = musicasDivEl.querySelector(':first-child');
  let capaImgEl = document.createElement('img');
  let nomeSpanEl = document.createElement('span');

  capaImgEl.src = musicas.capa;
  nomeSpanEl.innerHTML = musicas.nome + ' - ' + musicas.artistas;

  musicasDivEl.insertBefore(capaImgEl, download1El);
  //musicasDivEl.insertBefore(nomeSpanEl, downloadEl);
  

  musicasDiv2El.insertBefore(nomeSpanEl, downloadEl);
  
  containerEl.appendChild(musicasDivEl);
}


musicas.forEach(insereMusicasNaPagina);









