import insightsReducer from './insights';
import { ActionObject, Insight } from 'interfaces';

type emptyArray = [];

describe('insightsReducer', () => {
  it("should return initial value", () => {
    const expected: emptyArray = [];
    const result = insightsReducer(undefined, {type: '', insight: undefined });

    expect(result).toEqual(expected);
  });

  it("should return the array with a new insight if type of action is ADD_INSIGHT", () => {
    const mockInsight: Insight = {
      id: 1,
      question: 'What?',
      answers: ['Fighting']
    };

    const mockAction: ActionObject = {
      type: 'ADD_INSIGHT',
      insight: mockInsight
    };

    const expected: Insight[] = [ mockInsight ];

    const result: Insight[] = insightsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  })
});
