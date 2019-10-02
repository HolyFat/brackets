module.exports = function check(str, bracketsConfig) {
    str = str.split('');


    for(var x=0; x<bracketsConfig.length; x++) {

        for (var i = 0; i<str.length; i++){

            while(str[i] === bracketsConfig[x][0]&& str[i+1] === bracketsConfig[x][1] && str.length>0){
                str.splice(i,2);
                i=0;
                x=0;

            }
        }
    }
    if(str.length>0){
        return false;
    }
    else{
        return true;
    }
}
