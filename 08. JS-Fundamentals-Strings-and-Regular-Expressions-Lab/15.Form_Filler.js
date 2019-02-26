function formFiller(username, email, phone, input) {

    for(let i = 0; i < input.length; i ++) {
        input[i].replace(/<![A-Za-z]+!>/g, username).replace(/<@[A-Za-z]+@>/g, email).replace(/<\+[A-Za-z]+\+>/g, phone);
    }
    console.log(input.join('\n'));
}


formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);