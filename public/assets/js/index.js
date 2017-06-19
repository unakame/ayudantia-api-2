'use strict';

//primera manera
/*const render = (data, root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
//  wrapper.text(data.results[0].gender);

  root.append(wrapper);
}*/



const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
//  wrapper.text(data.results[0].gender);
  wrapper.text(state.datos[0].gender)
  root.append(wrapper);
}

//funcion anónima esencial para que se ejecute en jQuery

const state = {
  datos: null
};

$(_ => {


$.getJSON({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    state.datos = data.results;
    const root = $('#root');
    render(root);
  }
});


});
