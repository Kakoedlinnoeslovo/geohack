cur = -1;

var pages = {
  0 : 0,
  1 : 0,
  2 : 0,
}

var names = {
  0 : "head",
  1 : "body",
  2 : "legs",
}

chosen = []

cur_images = {
  'img11' : -1,
  'img12' : -1,
  'img13' : -1,
  'img14' : -1,
  'img21' : -1,
  'img22' : -1,
  'img23' : -1,
  'img24' : -1,
}

function refresh_images() {
  var ajax_url = "/ajax/get_page_for_category?page=" + pages[cur] + "&category=" + names[cur];
  $.ajax({ url : ajax_url, 
    error : function(result) {
      alert("Server error");
    }
  }).done(
    function(data) {
      if (data.length >= 1) {
        cur_images['img11'] = data[0];
      }
      if (data.length >= 2) {
        cur_images['img12'] = data[1];
      }
      if (data.length >= 3) {
        cur_images['img13'] = data[2];
      }
      if (data.length >= 4) {
        cur_images['img14'] = data[3];
      }
      if (data.length >= 5) {
        cur_images['img21'] = data[4];
      }
      if (data.length >= 6) {
        cur_images['img22'] = data[5];
      }
      if (data.length >= 7) {
        cur_images['img23'] = data[6];
      }
      if (data.length >= 8) {
        cur_images['img24'] = data[7];
      }
    }, 
  );
  return true;
}

function curpage(category) {
  refresh_images();
  img11 = document.getElementById('img11');
  img12 = document.getElementById('img12');
  img13 = document.getElementById('img13');
  img14 = document.getElementById('img14');
  img21 = document.getElementById('img21');
  img22 = document.getElementById('img22');
  img23 = document.getElementById('img23');
  img24 = document.getElementById('img24');
  load_image(img11, cur_images['img11']);
  load_image(img12, cur_images['img12']);
  load_image(img13, cur_images['img13']);
  load_image(img14, cur_images['img14']);
  load_image(img21, cur_images['img21']);
  load_image(img22, cur_images['img22']);
  load_image(img23, cur_images['img23']);
  load_image(img24, cur_images['img24']);
}

function nextpage(category) {
  pages[category] += 1;
}

function prevpage(category) {
  pages[category] -= 1;
}


function load_image(img, id) {
  ajax_url = "/ajax/get_image?id=" + id;
  $.ajax({ url : ajax_url, 
    contentType: "image/jpeg",
    error : function(result) {
      alert("Server error");
    }
  }).done(
    function(data) {
      img.src = 'data:image/jpeg;base64,' + data;
    }, 
  );
  return true;
}

function render_image(img, ids) {
  var ajax_url = "/ajax/render_image?";
  for (var i = 0, l=ids.length; i < l; i++) {
    ajax_url += "id" + i + "=" + ids[i] + "&";
  }
  ajax_url = ajax_url.substring(0, ajax_url.length - 1);
  $.ajax({ url : ajax_url, 
    contentType: "image/jpeg",
    error : function(result) {
      alert("Server error");
    }
  }).done(
    function(data) {
      img.src = 'data:image/jpeg;base64,' + data;
    }, 
  );
  return true;
}

function getmaneken() {
  var img = document.getElementById('maneken');
  render_image(img, []);
}

function createmaneken(lst) {
  var filtered = lst.filter(function(x) {return x > 0;});
  var img = document.getElementById('maneken');
  render_image(img, filtered);
}

