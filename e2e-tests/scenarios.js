'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Disc0!', function() {

  browser.waitForAngularEnabled = true;


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
      browser.get('/#!/home');
      browser.get('/#!/collection/1/details');
    });

    it('should render the view collection when user navigates to /collection/1/details', function() {
      /*
      $$('#pages-wraper #collection-details md-toolbar h2').then(function(items) {
        expect(items.length).toBe(1);
        expect(items[0].getText()).toBe('Collection');
      });

      $$('#pages-wraper md-toolbar h6').then(function(items) {
        expect(items.length).toBe(1);
        expect(items[0].getText()).toBe('C1');
      });

      $$('#pages-wraper #collection-details #discs-container md-list-item h4').then(function(items) {
        expect(items.length).toBe(2);
        expect(items[0].getText()).toBe('D1');
        expect(items[1].getText()).toBe('D2');
      });*/

    });

    it('should render the view home when user navigates from home to /collection/1/details and click on close', function() {
      /*
      $$('#pages-wraper #collection-details button').then(function(itens) {
        expect(items.length).toBe(1);
        items[0].click();

        expect(browser.getLocationAbsUrl()).toMatch("/home");
      });
      */
    });
  });

  

});
