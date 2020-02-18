import { validateCredentials } from './index';

describe('Utils', () => {
  describe('validateCredentials', () => {
    let email:string;
    beforeEach(() => {
      email = 'example@email.com'
    })
    it('should return true if given a valid email address', () => {
        expect(validateCredentials(email)).toEqual(true);
      });
      
      it('should return false if given a bad email address', () => {
        email = 'err'
        expect(validateCredentials(email)).toEqual(false);
      });
  });
});