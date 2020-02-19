import randomWordCollectionsReducer from './randomWordCollections';
import { ActionObject, randomWordCollection } from 'interfaces';

type emptyArray = [ ];

describe('randomWordCollectionsReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [ ];
    const result = randomWordCollectionsReducer(undefined, {type: '', collections: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array of random collections if type of action is ADD_RANDOM_COLLECTIONS", () => {
    const mockCollections: randomWordCollection[] = [{
      'question': {
        type: 'noun',
        connectedWord: ['answer']
      }
    }];

    const mockAction: ActionObject = {
      type: 'ADD_RANDOM_COLLECTIONS',
      collections: mockCollections
    };

    const expected: randomWordCollection[] = mockCollections;

    const result: randomWordCollection[] = randomWordCollectionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
