// 
// Written by Omar Saidi
// 11 February 2016
//
// Requires
// *** AngularJS 1.2+
//
// See README.txt for implementation guide.

app.directive('ngRequiredAsterisk', function () {
    return {
        restrict: 'A',
        compile: function(element) {
            element.append("<span class='form-required'>*</span>");
        }
    }
});
