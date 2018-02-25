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
      expect(element.all(by.css('#pages-wraper h1')).first().getText())
        .toMatch(/Wellcome to Disc0!/);

      expect(element.all(by.css("footer #api-version")).first().getText())
        .toMatch(/0.0.0/);
    });

  });

  describe('collection.details', function() {

    beforeEach(function() {
      browser.get('/#!/collection/1/details');
    });


    it('should render the view collection when user navigates to /collection/1/details', function() {
      expect(element.all(by.css('#pages-wraper #collection-details md-toolbar h6')).first().getText())
        .toMatch(/Collection/);

      expect(element.all(by.css('#pages-wraper #collection-details md-toolbar h2')).first().getText())
        .toBe('C1');

      expect(element.all(by.css('#pages-wraper #collection-details #discs-container md-list-item h4')).get(0).getText())
        .toBe('D1');

      expect(element.all(by.css('#pages-wraper #collection-details #discs-container md-list-item h4')).get(1).getText())
        .toBe('D2');
    });

  });

  describe('collection.details', function() {

    beforeEach(function() {
      browser.get('/#!/home');
      browser.get('/#!/collection/1/details');
      element(element.all(by.css('#pages-wraper #collection-details button')).first()).click();
    });


    it('should render the view home when user navigates from home to /collection/1/details and click on close', function() {
      expect(element.all(by.css('#pages-wraper h1')).first().getText())
        .toMatch(/Wellcome to Disc0!/);
    });

  });



  

  








});
