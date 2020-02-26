/**
 * @jest-environment jsdom
 */

import React from 'react';
import { IOptions, UserLoginReceived } from 'interfaces';
import {shallow} from 'enzyme';
import { postUser, getUser } from './apiCalls';

describe('apiCalls', () => {
  describe('postUser', () => {
    let mockUser, mockOptions:IOptions, mockResponse:UserLoginReceived;
    beforeEach(() => {
      mockUser = {
        first_name: 'Tennessee',
        last_name: 'Williams',
        email: 'violetsinthemountains@email.com',
        password: 'password123'
      }

      mockOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mockUser)
      }

      mockResponse = {
        id: '527aa84af8d4ef0f53b4df2ce08f7195',
        firstName: 'Tennessee',
        lastName: 'Williams'
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
    it('should fetch with the correct arguments', () => {
      const expected = ['https://condensate-backend.herokuapp.com/users', mockOptions];

      postUser(mockOptions);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it('should return an object with all the user data', () => {
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });

      expect(postUser(mockOptions)).resolves.toEqual(mockResponse);
    });
    it('SAD: should throw an error if response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(postUser(mockOptions)).rejects.toEqual(Error('Failure to post new user'))
    });
    it('SAD: should throw an error if the promise does not resolve', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(postUser(mockOptions)).rejects.toEqual(Error('fetch failed'))
    });
  });
  describe('getUser', () => {
    let mockUser, mockOptions:IOptions, mockResponse:UserLoginReceived;
    beforeEach(() => {
      mockUser = {
        email: 'violetsinthemountains@email.com',
        password: 'password123'
      }

      mockOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mockUser)
      }

      mockResponse = {
        id: '527aa84af8d4ef0f53b4df2ce08f7195',
        firstName: 'Tennessee',
        lastName: 'Williams'
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
    it('should fetch with the correct arguments', () => {
      const expected = ['https://condensate-backend.herokuapp.com/login', mockOptions];

      getUser(mockOptions);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object with all the user data', () => {
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 303,
          json: () => Promise.resolve(mockResponse)
        });
      });

      expect(getUser(mockOptions)).resolves.toEqual(mockResponse);
    });

    it('SAD: should throw an error if response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 500
        })
      });
      expect(getUser(mockOptions)).rejects.toEqual(Error('Failure to get user'))
    });

    it('SAD: should throw an error if the promise does not resolve', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getUser(mockOptions)).rejects.toEqual(Error('fetch failed'))
    });
  });

});
