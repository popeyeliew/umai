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
    it('calculate() calculates simple interest correctly', () => {
      let controller = makeController();

      controller.calculate();
      expect(controller.grandResult.interest).to.equal('5.20');
      expect(controller.grandResult.amount).to.equal('105.20');

      controller.principal = 1800.50;
      controller.interestRate = 12;
      controller.years = 7;
      controller.calculate();
      expect(controller.grandResult.interest).to.equal('1512.42');
      expect(controller.grandResult.amount).to.equal('3312.92');
    });

    it('calculate() calculates compound interest correctly', () => {
      let controller = makeController();

      controller.calculationType = 'compound';
      controller.calculate();
      expect(controller.grandResult.interest).to.equal('5.32');
      expect(controller.grandResult.amount).to.equal('105.32');

      controller.principal = 1800.50;
      controller.interestRate = 12;
      controller.years = 7;
      controller.frequency = 4;
      controller.calculate();
      expect(controller.grandResult.interest).to.equal('2318.91');
      expect(controller.grandResult.amount).to.equal('4119.41');
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
