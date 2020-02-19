import questionTemplatesReducer from './questionTemplates';
import { ActionObject } from 'interfaces';

type emptyArray = [ ];

describe('questionTemplatesReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [ ];
    const result = questionTemplatesReducer(undefined, {type: '', templates: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array with question templates if type of action is ADD_TEMPLATES", () => {
    const mockTemplates: string[] = [
      'What do you eat?'
    ];

    const mockAction: ActionObject = {
      type: 'ADD_TEMPLATES',
      templates: mockTemplates
    };

    const expected: string[] = mockTemplates;

    const result: string[] = questionTemplatesReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
