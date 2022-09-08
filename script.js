const select = document.getElementById('cars');
const carOption = document.querySelector('.car');

const getData = () => {
  return fetch('./carsData.json').then((response) => response.json());
};

select.addEventListener('click', (e) => {
  const selectIndexCar = e.target.selectedIndex;

  const render = () => {
    getData().then((json) => {
      carOption.innerHTML = '';

      if (selectIndexCar > 0) {
        carOption.insertAdjacentHTML(
          'afterbegin',  `
            <p>Тачка ${json.cars[selectIndexCar - 1].brand} 
            ${json.cars[selectIndexCar - 1].model}</p>
            <p>Цена: ${json.cars[selectIndexCar - 1].price}$</p>
                `
        );
      } else if (selectIndexCar === 0) {
        carOption.textContent = 'Выберите автомобиль';
      }
    });
  };

  render();
});
