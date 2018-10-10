var i=0;
function myOutput (a, b){
    console.log(i++ + '| из |'+a+'| в |'+b+'|');
}

function mason(q, a,b,c){
    if (q===0){
        return;
    }
    mason (q-1, a,c,b);
    myOutput(a,b);
    mason(q-1,c,b,a );
}

mason(3,'A','B','C');