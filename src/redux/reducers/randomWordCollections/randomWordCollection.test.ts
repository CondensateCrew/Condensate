import randomWordCollectionsReducer from './randomWordCollections';
import { ActionObject, WordSample, IAddWordSamplesAction, ICleanStore } from 'interfaces';

type emptyArray = [ ];

describe('randomWordCollectionsReducer', () => {
  const mockCollections: WordSample[] = [{
    word: 'question',
    sentence: 'what is the question?'
  }];

  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      collections: undefined
    };
    const expected: emptyArray = [ ];
    const result = randomWordCollectionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array of random collections if type of action is ADD_ALL_COLLECTIONS", () => {
    const mockAction: IAddWordSamplesAction = {
      type: 'ADD_ALL_COLLECTIONS',
      collections: mockCollections
    };

    const expected: WordSample[] = mockCollections;

    const result: WordSample[] = randomWordCollectionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const expected: emptyArray = [ ];
    const result = randomWordCollectionsReducer(mockCollections, mockAction);

    expect(result).toEqual(expected);
  });
});
