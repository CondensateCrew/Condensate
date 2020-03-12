import exampleSentenceReducer from './exampleSentences';
import { ActionObject, IAddExampleSentencesAction } from 'interfaces';

type emptyArray = [ ];

describe('exampleSentenceReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      sentences: undefined
    };
    const expected: emptyArray = [ ];
    const result = exampleSentenceReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with question templates if type of action is ADD_ALL_TEMPLATES", () => {
    const mockTemplates: string[] = [
      'What do you eat?'
    ];

    const mockAction: IAddExampleSentencesAction = {
      type: 'ADD_ALL_SENTENCES',
      sentences: mockTemplates
    };

    const expected: string[] = mockTemplates;

    const result: string[] = exampleSentenceReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
