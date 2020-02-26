import randomWordCollectionsReducer from './randomWordCollections';
import { ActionObject, WordSample, IAddWordSamplesAction } from 'interfaces';

type emptyArray = [ ];

describe('randomWordCollectionsReducer', () => {
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
    const mockCollections: WordSample[] = [{
      word: 'question',
      sentence: 'what is the question?'
    }];

    const mockAction: IAddWordSamplesAction = {
      type: 'ADD_ALL_COLLECTIONS',
      collections: mockCollections
    };

    const expected: WordSample[] = mockCollections;

    const result: WordSample[] = randomWordCollectionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
