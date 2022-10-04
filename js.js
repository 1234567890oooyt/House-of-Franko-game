var obj_counter1
obj_counter1=0
var obj_counter2
obj_counter2=0
var obj_counter3
obj_counter3=0
var obj_counter4
obj_counter4=0
var obj_counter5
obj_counter5=0
var obj_counter6
obj_counter6=0
var obj_counter7
obj_counter7=0
var obj_counter8
obj_counter8=0
var obj_counter9
obj_counter9=0
var obj_counter10
obj_counter10=0
var life_counter
life_counter=1000-7




var board_ex
board_ex=0
var now_time
now_time=0
var saved_time
saved_time=0
var OFF_timer
OFF_timer=0






function Click_obj1(el) {
    el.style.display = 'none';
    obj_counter1=1;
    document.getElementById('serch_obj_1' ).style.display = 'none';
    victory();
};


function Click_obj2(el) {
    el.style.display = 'none';
    obj_counter2=1;
    document.getElementById('serch_obj_2' ).style.display = 'none';
    victory();
  };

function Click_obj3(el) {
    el.style.display = 'none';
    obj_counter3=1;
    document.getElementById('serch_obj_3' ).style.display = 'none';
    victory();
};

function Click_obj4(el) {
  el.style.display = 'none';
  obj_counter4=1;
  document.getElementById('serch_obj_4' ).style.display = 'none';
  victory();
};
function Click_obj5(el) {
  el.style.display = 'none';
  obj_counter5=1;
  document.getElementById('serch_obj_5' ).style.display = 'none';
  victory();
};
function Click_obj6(el) {
  el.style.display = 'none';
  obj_counter6=1;
  document.getElementById('serch_obj_6' ).style.display = 'none';
  victory();
};
function Click_obj7(el) {
  el.style.display = 'none';
  obj_counter7=1;
  document.getElementById('serch_obj_7' ).style.display = 'none';
  victory();
};
function Click_obj8(el) {
  el.style.display = 'none';
  obj_counter8=1;
  document.getElementById('serch_obj_8' ).style.display = 'none';
  victory();
};
function Click_obj9(el) {
  el.style.display = 'none';
  obj_counter9=1;
  document.getElementById('serch_obj_9' ).style.display = 'none';
  victory();
};
function Click_obj10(el) {
  el.style.display = 'none';
  obj_counter10=1;
  document.getElementById('serch_obj_10' ).style.display = 'none';
  victory();
};











function victory() {
  if (obj_counter1==1 && obj_counter2==1 && obj_counter3==1  && obj_counter4==1  && obj_counter5==1  && obj_counter6==1  && obj_counter7==1 && obj_counter8==1  && obj_counter9==1 && obj_counter10==1 && board_ex!=1) {
    document.location.href = "Victory_page.html";
  };
};   





function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      now_time=--timer
      
      if(OFF_timer==1){
        timer=saved_time
      }



      if (timer < 0) {
          timer = duration;
          document.location.href = "Lose_page.html";
      }
  }, 1000);
}




window.onload = function Set_time() {
  var Minutes = 600 * 0.5,
      display = document.querySelector('#time');
  startTimer(Minutes, display);
};

function Stop_time(){
saved_time=now_time
OFF_timer=1
}

function Con_time(){
display = document.querySelector('#time')
startTimer(saved_time,display)  
OFF_timer=0
}



 function Animation_down() {
  board_ex=1
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    board.style.top = timePassed / 1.2 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 20);
}







function Animation_up() {

  board_ex=0
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    board.style.top = 1668-timePassed / 1.2 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 20);}



  function Descr_Text_net(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " «Ловля риб – це моя пристрасть», – писав Франко. Рибалити ходив з друзями, знайомими, колегами з редакції і по перу, місцевими селянами, а також зі своєю сім’єю. Найбільше любив ловити рибу сітями і саком. На вудку ловити не любив. Часто лапав її просто руками. Рибальський кошик Франка був багатий і різноманітний: раки, пструги (річкова форель), слижі, бабки, клени, окуні, карасі, плотиці, пересипці, щупаки (щуки), коропи, в’юни-мнюхи, карасі, піскарі, яльці, лящі і навіть головатиці (велика риба з родини лососевих) ";
  }
   function Descr_Text_liz(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Під час мандрів Франко дуже цікавився природою, особливо рослинним і тваринним світом. Ще в час навчання в Дрогобицькій гімназії він разом зі своїми вчителями Емериком Турчинським та Іваном Верхратським радо їздив на екскурсії, де ловив хрущів та лиликів (кажанів), збирав гадюк та вужів для зоологічної колекції проф. Верхратського. До речі, в Музеї Франка у Львові збереглися скляні посудини з різними заспиртованими тваринками (комахами, плазунами та земноводними), що їх препарував сам Іван Франко!  ";
  }
  function Descr_Text_bike(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Франко дуже хотів придбати велосипеда для своїх мандрівок, та цю мрію йому, на жаль, не судилося здійснити: дбаючи про родину, письменник шкодував коштів для себе. Та Франко-поет свого часу переклав оригінального вірша про ровера – латинську оду до велосипеда, автором якої, між іншим, був… Папа Римський Лев ХІІІ (під псевдо Мавро Річчі)! ";
  }






  function Descr_Text_Miron(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Уже в ранньому дитинстві Іван Франко (тоді ще «малий Мирон», як називала його мама, Марія з шляхетного роду Кульчицьких) відчував нестримний потяг до мандрів. Одного разу, зовсім маленьким, він рушив ген далеко за рідне село у пошуках залізних стовпів, що підпирають небо – «навстрічу сонцю золотому». А на далеку мандрівку життя взяв із собою, як найдорожчий скарб, мамині пісні і вогонь із кузні свого батька – Якова-коваля. ";
  }
  function Descr_Text_shishka(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Франко з дитинства найбільше любив мандрувати та відпочивати на лоні природи. Особливо він любив гуляти по лісу. Під могутніми Радичевим та Панщизняним лісами у Нагуєвицькій Слободі він народився і зростав: дихав свіжим подихом лісу, зазирав у таємничі хащі, блукав лісовими стежками. Він жив лісом і – принаймні чималу частку свого життя – жив у лісі, був його органічною частинкою. Франко писав, що ліс – це його «церква», де він почував присутність Бога, тож невипадково його називали «лісова душа». ";
  }
  function Descr_Text_leleka(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Іван Франко не лише любив розповідати про тварин, а й мав дуже добре і чуле серце до усіляких скривджених звірят. «Особливо користалися його опікою бідні сирітки, звірята без дому й захисту, немічні й каліки, –згадувала донька Анна. – У нас, немов у звірячій клініці, постійно перебували: або голодна задрипана кицька…, або цуценя напівзамерзле, або пташеня з перебитим крильцем». Так, буська (лелеку) зі зламаним крилом Франко купив у хлопців, коли ловив рибу в околицях Болехова. ";
  }
  function Descr_Text_grib(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Відмалку улюбленим заняттям Франка було збирання грибів. Письменник добре на них розумівся, розрізняв їстівні, умовно їстівні та отруйні, знав навіть латинські назви (ще з гімназії). «У ліс ходив Іван Якович босоніж, з кошелем в руці, рідко з ціпком», – згадував син Тарас. «Грибів Франко завжди найбільше набирав, бо він завжди пильно дивився в землю», – захоплено твердив Іван Яцуляк, шкільний товариш письменника. ";
  }
  function Descr_Text_gori(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Яскраві карпатські враження від суворої краси гір та їхніх мешканців (гуцулів і бойків) подарували Франкові натхнення до написання багатьох чудових творів – від повісті «Захар Беркут», дія якої відбувається у Тухольській долині, до численних «гуцульських» текстів – «Гуцульський король», «Терен у нозі», «Як Юра Шикманюк брів Черемош». Сучасний український гірський туризм має в особі Франка свого великого предтечу! ";
  }
  function Descr_Text_compas(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " Франко мандрував не тільки сам чи з родиною, а й був організатором цілої низки туристично-краєзнавчих мандрівок галицької молоді. Ще 1883 року за сприянням Франка було створено «Кружок етнографічно-статистичний для студіювання життя і світогляду народу», а згодом – краєзнавчо-туристичний «Кружок для устроювання мандрівок по нашім краю». Саме Франко зініціював та організував багатоденну Українсько-руську студентську мандрівку влітку 1884 р. Була ця подорож, за свідченням самого Франка, «коли не першою взагалі, то першою свідомо зорганізованою пробою товариської мандрівки українсько-руської молодіжі». ";
  }
  function Descr_Text_korobka(){
    description_text = document.querySelector('#text_description');
    description_text.textContent = " З далеких і близьких подорожей Франко привозив рідним і друзям усілякі приємні дрібнички. Найстаршого сина Андрія, який був затятим філателістом, батько любив потішити поштовими марками. Донечці Анні надсилав картки-поштівки з краєвидами з різних місцевостей, які якраз тоді входили в моду. Перебуваючи на лікуванні у «хорошій та тихій» Ловрані на узбережжі Адріатичного моря (сучасна Хорватія), Іван Франко з сином Андрієм полюбляли збирати на березі мушлі і морські зірки, декілька з яких узяли з собою на згадку додому. З Києва Іван Франко повернувся із цілою торбою рідкісних книг, які придбав у букініста. А з Одеси привіз самовара, який став важливим атрибутом родинного чаювання. З Гуцульщини Франки привозили на згадку красивий керамічний чи різьблений дерев’яний посуд. З літніх сільських вакацій –чимало усіляких смакот: ягоди, фрукти, сушені гриби, мед, та ін. «Викупані й обгорілі сонцем, з порепаними ногами і відсвіженим умом, обвантажені всякими сушами й конфітурами вертали ми з вакацій до міста», – згадував Тарас Франко. Для кумів Володимира і Велерії Коцовських дружина письменника Ольга Франко на гостинець купувала сушені гриби. ";
  }
