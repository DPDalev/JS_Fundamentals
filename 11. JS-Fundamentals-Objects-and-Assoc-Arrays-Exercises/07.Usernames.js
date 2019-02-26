function usernames(input) {

    let uniqueUsernames = new Set();

    for (let user of input) {
        uniqueUsernames.add(user);
    }

    Array.from(uniqueUsernames.keys()).sort((a, b) => localSort(a, b)).forEach(x => console.log(x) );

    function localSort(a, b) {
        if(a.length != b.length) {
            return(a.length - b.length);
        } else {
            return a.localeCompare(b);
        }
    }
}

usernames(["Ashton","Kutcher","Ariel","Lilly","Keyden","Aizen","Billy","Braston"]);
usernames(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);
