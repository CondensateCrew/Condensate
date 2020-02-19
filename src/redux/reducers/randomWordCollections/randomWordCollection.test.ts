import randomWordCollectionsReducer from './randomWordCollections';
import { ActionObject, RandomWordCollection, IAddRandomWordCollectionsAction } from 'interfaces';

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
    const mockCollections: RandomWordCollection[] = [{
      'question': {
        type: 'noun',
        connectedWord: ['answer']
      }
    }];

    const mockAction: IAddRandomWordCollectionsAction = {
      type: 'ADD_ALL_COLLECTIONS',
      collections: mockCollections
    };

    const expected: RandomWordCollection[] = mockCollections;

    const result: RandomWordCollection[] = randomWordCollectionsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
