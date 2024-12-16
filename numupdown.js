const hint = document.querySelector('.hint');
const count = document.querySelector('.count');
const guessInput = document.querySelector('#guessInput');
const checkButton = document.querySelector('#checkButton');

let correct = Math.floor(Math.random() * 100);

console.log(correct);

// 게스트가 숫자를 잘못 입력했을 때
checkButton.addEventListener('click', function () {
  //textContent는 html 요소의 텍스트를 읽는 거고, 입력값에 접근하려면 value를 써야한다.
  if (guessInput.value === '') {
    alert('숫자를 입력해주세요.');
  }

  if (Number(guessInput.value) < 0 || Number(guessInput.value) > 100) {
    alert('0부터 100까지의 숫자를 입력해주세요.');
  } else if (Number(guessInput.value) < correct) {
    hint.textContent = `${Number(guessInput.value)}는(은) 정답보다 작아요🤭`;
    countDeducted();
    guessInput.value = '';
  } else if (Number(guessInput.value) > correct) {
    hint.textContent = `${Number(guessInput.value)}는(은) 정답보다 커요😧`;
    countDeducted();
    guessInput.value = '';
  } else if (Number(guessInput.value) === correct) {
    hint.textContent = '정답입니다!🥳';
    countDeducted();
    guessInput.value = '다시 하려면 새로고침해주세요';
    checkButton.disabled = true; // 버튼 클릭 비활성화
  }
  guessInput.textContent = '';
});

let attempts = 10;
function countDeducted() {
  attempts--;
  count.textContent = `남은 시도 : ${attempts}`;

  if (attempts === 0) {
    alert('GAME OVER \n다시 시도하시려면 새로고침 해주세요');
    guessInput.value = '다시 하려면 새로고침해주세요';
    checkButton.disabled = true;
  }
}
