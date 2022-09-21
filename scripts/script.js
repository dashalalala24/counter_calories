
const form = document.querySelector('form');
const sex = form.querySelector('.switcher');
const male = sex.querySelector('#gender-male');
const female = sex.querySelector('#gender-female');

const parameters = form.querySelector('.form__parameters');
const age = parameters.querySelector('#age');
const height = parameters.querySelector('#height');
const weight = parameters.querySelector('#weight');

const checkboxActivity = document.querySelector('.radios-group');
// const pseudoCheckboxActivity = document.querySelectorAll('.radios-group');
const minActivity = checkboxActivity.querySelector('#activity-minimal');
const lowActivity = checkboxActivity.querySelector('#activity-low');
const mediumActivity = checkboxActivity.querySelector('#activity-medium');
const highActivity = checkboxActivity.querySelector('#activity-high');
const maxActivity = checkboxActivity.querySelector('#activity-maximal');

// const buttonSubmitForm = form.querySelector('.form__submit-button');
const buttonResetForm = form.querySelector('.form__reset-button');

const resultSection = document.querySelector('.counter__result');
const normCaloriesResult = resultSection.querySelector('#calories-norm');
const minCaloriesResult = resultSection.querySelector('#calories-minimal');
const maxCaloriesResult = resultSection.querySelector('#calories-maximal');


function checkMale() {
  male.setAttribute('checked', '');
  female.removeAttribute('checked');
  // console.log('male')
}

function checkMinActivity() {
  minActivity.setAttribute('checked', '');
  lowActivity.removeAttribute('checked');
  mediumActivity.removeAttribute('checked');
  highActivity.removeAttribute('checked');
  maxActivity.removeAttribute('checked');
  // console.log(coefficient());
}

const coefficient = () => {
  if (minActivity.hasAttribute('checked')) {
    return 1.2;
  } else {
    if (lowActivity.hasAttribute('checked')) {
      return 1.375;
    } else {
      if (mediumActivity.hasAttribute('checked')) {
        return 1.55;
      } else {
        if (highActivity.hasAttribute('checked')) {
          return 1.725;
        } else return 1.9;
      }
    }
  }
};

function result(event) {
  event.preventDefault();
  if (female.hasAttribute('checked')) {
    let normCalories = Math.round(((10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161) * coefficient());
    let minCalories = Math.round(normCalories * 0.85);
    let maxCalories = Math.round(normCalories * 1.15);
    normCaloriesResult.textContent = normCalories;
    minCaloriesResult.textContent = minCalories;
    maxCaloriesResult.textContent = maxCalories;

    // console.log('Поддержание веса: ' + normCalories + ' ккал, снижение веса: ' + minCalories + ' ккал, набор веса: ' + maxCalories + ' ккал');
  } else {
    normCalories = Math.round(((10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5) * coefficient());
    minCalories = Math.round(normCalories * 0.85);
    maxCalories = Math.round(normCalories * 1.15);
    normCaloriesResult.textContent = normCalories;
    minCaloriesResult.textContent = minCalories;
    maxCaloriesResult.textContent = maxCalories;
    // console.log('Поддержание веса: ' + normCalories + ' ккал, снижение веса: ' + minCalories + ' ккал, набор веса: ' + maxCalories + ' ккал');
  }
  resultSection.classList.remove('counter__result--hidden');
  buttonResetForm.removeAttribute('disabled');
}


minActivity.addEventListener('click', checkMinActivity);

lowActivity.addEventListener('click', () => {
  lowActivity.setAttribute('checked', '');
  minActivity.removeAttribute('checked');
  mediumActivity.removeAttribute('checked');
  highActivity.removeAttribute('checked');
  maxActivity.removeAttribute('checked');
  // console.log(coefficient());
});

mediumActivity.addEventListener('click', () => {
  mediumActivity.setAttribute('checked', '');
  minActivity.removeAttribute('checked');
  lowActivity.removeAttribute('checked');
  highActivity.removeAttribute('checked');
  maxActivity.removeAttribute('checked');
  // console.log(coefficient());
});

highActivity.addEventListener('click', () => {
  highActivity.setAttribute('checked', '');
  minActivity.removeAttribute('checked');
  lowActivity.removeAttribute('checked');
  mediumActivity.removeAttribute('checked');
  maxActivity.removeAttribute('checked');
  // console.log(coefficient());
});

maxActivity.addEventListener('click', () => {
  maxActivity.setAttribute('checked', '');
  minActivity.removeAttribute('checked');
  lowActivity.removeAttribute('checked');
  mediumActivity.removeAttribute('checked');
  highActivity.removeAttribute('checked');
  // console.log(coefficient());
});


// checkboxActivity.addEventListener('click', () => {
//   console.log(getCoefficient())
// })

// const activityArray = Array.from(pseudoCheckboxActivity);
// activityArray.forEach(function (el) {
//   console.log(el.hasAttribute('checked'))
// })

form.addEventListener('submit', result);

form.addEventListener('reset', () => {
  age.value = '';
  weight.value = '';
  height.value = '';
  checkMale();
  checkMinActivity();
  resultSection.classList.add('counter__result--hidden');
});





female.addEventListener('click', () => {
  female.setAttribute('checked', '');
  male.removeAttribute('checked');
  // console.log('female')
});

male.addEventListener('click', checkMale);

// Поддержание веса
// Для женщин:
// N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в
// годах) − 161
// Для мужчин:
// N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в
// годах) + 5
// Полученное значение (N) умножаем на коэффициент активности. Результат и будет
// нормой калорий для поддержания веса.
// Коэффициенты активности
// • Минимальная: 1.2.
// • Низкая: 1.375.
// • Средняя: 1.55
// • Средняя: 1.55.
// • Высокая: 1.725.
// • Очень высокая: 1.9.
// Формулы для набора и сброса веса
// • Набор веса: прибавляем 15% от нормы к этой норме.
// • Сброс веса: вычитаем 15% от нормы из этой нормы.