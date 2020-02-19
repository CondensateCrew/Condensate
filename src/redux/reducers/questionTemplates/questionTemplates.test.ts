import questionTemplatesReducer from './questionTemplates';
import { ActionObject, IAddQuestionTemplatesAction } from 'interfaces';

type emptyArray = [ ];

describe('questionTemplatesReducer', () => {
  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      templates: undefined
    };
    const expected: emptyArray = [ ];
    const result = questionTemplatesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with question templates if type of action is ADD_ALL_TEMPLATES", () => {
    const mockTemplates: string[] = [
      'What do you eat?'
    ];

    const mockAction: IAddQuestionTemplatesAction = {
      type: 'ADD_ALL_TEMPLATES',
      templates: mockTemplates
    };

    const expected: string[] = mockTemplates;

    const result: string[] = questionTemplatesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
