'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Disc0!', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('/#!/home');
    });


    it('should render the view home when user navigates to /home', function() {
      expect(element.all(by.css('main h1')).first().getText())
        .toMatch(/Wellcome to Disc0!/);

      expect(element.all(by.css("footer #api-version")).first().getText())
        .toMatch(/v0.0.0/);
    });

  });




  

  








});
