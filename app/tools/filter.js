'use strict';

angular.module('pdhp.tools.filter', [])
//nSetSub = Naive Set Subtract
.filter('nSetSub', function() {
    return function(input, list, equals) {

        equals = equals || function(a, b) { return a == b; }

        if( !Array.isArray(input) || !Array.isArray(input) )
            return input;

        var newList = [];
        for(var i in input)
        {
            var any = false;
            for(var j in list)
            {
                if( equals(input[i], list[j]) )
                {
                    any = true;
                    break;
                }
            }
            if(!any)
                    newList.push(input[i]);
        }
        return newList;
    }
})
;