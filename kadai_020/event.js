const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('クリックされました！');

  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
});
