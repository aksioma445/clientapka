// Функція для генерації випадкового коду капчі
function generateCaptchaCode() {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
    let captchaCode = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captchaCode += characters[randomIndex];
    }
    return captchaCode;
}

const translations = {
    uk: {
        captchaTitle: 'Перевірка на бота',
        captchaText: 'Введіть код: ',
        captchaButton: 'Підтвердити',
        channelTitle: 'Підпишіться на всі канали нижче 👇',
        confirmSubscription: 'Підписався',
        thankYouText: 'Якщо ви підписались, останній крок ЗАПОВНІТЬ ФОРМУ НИЖЧЕ',
        formButton: 'Заповнити форму'
    },
    ru: {
        captchaTitle: 'Проверка на бота',
        captchaText: 'Введите код: ',
        captchaButton: 'Подтвердить',
        channelTitle: 'Подпишитесь на все каналы ниже 👇',
        confirmSubscription: 'Подписался',
        thankYouText: 'Если вы подписались, последний шаг ЗАПОЛНИТЕ ФОРМУ НИЖЕ',
        formButton: 'Заполнить форму'
    }
};

function setLanguage(language) {
    const translation = translations[language];
    document.getElementById('captchaTitle').textContent = translation.captchaTitle;
    document.getElementById('captchaText').textContent = translation.captchaText;
    document.getElementById('captchaButton').textContent = translation.captchaButton;
    document.getElementById('channelTitle').textContent = translation.channelTitle;
    document.getElementById('confirmSubscription').textContent = translation.confirmSubscription;
    document.getElementById('thankYouText').textContent = translation.thankYouText;
    document.getElementById('formButton').textContent = translation.formButton;
}

// Початковий вибір мови
document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => {
        const selectedLanguage = button.getAttribute('data-lang');
        setLanguage(selectedLanguage);
        document.getElementById('languageSelection').classList.add('hidden');
        document.getElementById('captchaSection').classList.remove('hidden');
    });
});

// Капча
const captchaCode = generateCaptchaCode(); // Генеруємо новий код капчі
document.getElementById('captchaCode').textContent = captchaCode;

document.getElementById('captchaButton').addEventListener('click', () => {
    if (document.getElementById('captchaInput').value === captchaCode) {
        document.getElementById('captchaSection').classList.add('hidden');
        document.getElementById('channelSection').classList.remove('hidden');
    } else {
        alert('Невірний код!');
    }
});

// Підтвердження підписки
document.getElementById('confirmSubscription').addEventListener('click', () => {
    document.getElementById('channelSection').classList.add('hidden');
    document.getElementById('thankYouSection').classList.remove('hidden');
});

// Кнопка переходу до форми
document.getElementById('formButton').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/1O2A4101AMdA3CcL5me6hOJ2g8UzWwNDPqb6NrcDYEeI/edit';
});

// Встановити початкову мову
setLanguage('uk');

Telegram.WebApp.ready();
Telegram.WebApp.expand();