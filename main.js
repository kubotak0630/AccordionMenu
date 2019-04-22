/// <reference path="JQuery.d.ts"/>


$(function () {


  //32bitレジスタから[msb:lsb] で指定した値を抜き出す
  //data32が数字でない場合は '-' を返す
  function pick_reg32_slice(data32, msb, lsb) {
    if (!isNaN(data32)) {
      return (data32 << (31-msb)) >>> (31-msb+lsb);
    }
    else {
      return '-';
    }
  }

  //引数はl2p_idx, reg32_valはInt, 
  function create_data(l2p_idx, reg32_val) {
    
    const ret_obj_ary = [];

    for (let obj of l2p_define) {
      if (obj.l2p_idx == l2p_idx) {
        for (let elem of obj.content.bit_reg) {
          //リターンするオブジェクトを作成
          const temp_obj = {};      
          temp_obj['name'] = elem.name;
          temp_obj['bit'] = `[${elem.bit_msb}:${elem.bit_lsb}]`;
          temp_obj['value'] = pick_reg32_slice(reg32_val, elem.bit_msb, elem.bit_lsb);
          temp_obj['description'] = elem.description;
          ret_obj_ary.push(temp_obj);

        }
        break;
      }
    }
    return ret_obj_ary;
  }


  // $('.tbl_wrapper').hide();

  //.accordion1の中のp要素がクリックされたら
  //$('.accordion p').click(function () {
  //$('.ac1').click(function () {
  //.accordionクラスの中のac1クラス(P要素)がクリックされたら
  //$('.accordion .ac1').click(function () {
  $('.accordion .ac1').click(function() {
    
    const l2p_str = $(this).children('.idx').text();
    
    const matchOB = l2p_str.match(/^\[(\d+)\]/);
    const l2p_idx = parseInt(matchOB[1],10);
    
    const data_str = $(this).children('.data').text();
    console.log(`idx=${l2p_idx}, ${data_str}`);
    const tbl_row_ary = create_data(l2p_idx, parseInt(data_str, 16));

   

    let str_jq = $(this).children('.arrow');
    if (str_jq.text() == '+') {
      str_jq.text('-');

      let html_str = '<div class="tbl_wrapper">';  //ここでdisplay="none"としてもなぜかダメ。
      html_str += '<table class="tbl">';
      html_str += '<tr>';
      html_str += '<th>name</th>';
      html_str += '<th>bit</th>';
      html_str += '<th>value</th>';
      html_str += '<th>description</th>';
      html_str += '</tr>';

      for (let obj of tbl_row_ary) {
        html_str += '<tr>';
        html_str += `<td>${obj.name}</td>`;
        html_str += `<td>${obj.bit}</td>`;
        html_str += `<td>${obj.value}</td>`;
        html_str += `<td>${obj.description}</td>`;
        html_str += '</tr>';
      }


      html_str += '</table>';
      html_str += '</div>';

      //詳細テーブルがすでに挿入されていた場合は削除
      $(this).next('.tbl_wrapper').remove();

      //詳細テーブルの挿入
      $(this).after($(html_str).css('display', 'none'));
      //$(this).after($(html_str));

      //クリックされた.accordion1の中のp要素に隣接する要素が開いたり閉じたりする。
      $(this).next().slideToggle();
     
    }
    else if (str_jq.text() == '-'){
      str_jq.text('+');
      
      //クリックされた.accordion1の中のp要素に隣接する要素が開いたり閉じたりする。
      $(this).next().slideToggle();
     
    }

  });
});