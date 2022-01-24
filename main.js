let $test = $('.test');
$test.css({
  color: 'red',
});

let $test_h2 = $('h2.test');
$test_h2.css({
  color: 'red',
});

let $paragraph = $('p ~ p');
$paragraph.css({
  color: 'red',
});

let $liWWW = $('li.www + li');
$liWWW.css({
  color: 'red',
});

let $iH2 = $('h2').find('i');
$iH2.css({
  color: 'red',
});

let $iH2i = $('h2 > i');
$iH2i.css({
  color: 'red',
});

let $h2notTest = $('h2').not('.test');
$h2notTest.css({
  color: 'red',
});
let $hnotTest = $(':header').not('.test');
$hnotTest.css({
  color: 'red',
});

let $headerWithHeader = $(':header + :header');
$headerWithHeader.css({
  color: 'red',
});

let $headerAndTest = $(':header.test + :header.test');
$headerAndTest.css({
  color: 'red',
});
