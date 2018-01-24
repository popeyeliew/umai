import Q1Module from './q1';
import Q1Controller from './q1.controller';
import Q1Component from './q1.component';
import Q1Template from './q1.html';

describe('Q1', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Q1Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Q1Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Q1Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Q1Component;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Q1Template);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Q1Controller);
    });
  });
});
