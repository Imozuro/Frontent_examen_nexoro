const radios = document.querySelectorAll('input[name="option"]');
const contents = document.querySelectorAll('.info_page_content');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    contents.forEach(content => content.classList.remove('active'));
    const selectedContent = document.querySelector(`#info_page_content${radio.id.slice(-1)}`);
    selectedContent.classList.add('active');
  });
});

// Set initial active content
document.querySelector('#info_page_content1').classList.add('active');