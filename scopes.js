// scopes
function h() {
    
    var a = 123;
    console.log(a);

    if (true) {
        let b = 'abc';
        console.log(b);
    }

    {
        const MAX_VALUE = 10;
        let c = '567';
        console.log(c);
        console.log(MAX_VALUE);
    }
    console.log(MAX_VALUE);

    // console.log(c);

    MAX_VALUE = 20;

    // console.log(b);
}

h();
// console.log(a);