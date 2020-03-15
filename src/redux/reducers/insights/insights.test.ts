import insightsReducer from './insights';
import { ActionObject, Insight, IAddInsightAction, ICleanStore, IRemoveInsightsAction } from 'interfaces';

type emptyArray = [];

describe('insightsReducer', () => {
  const mockInsight: Insight = {
    id: 1,
    question: {
      word: 'What?',
      sentence: 'What do you eat?'
    },
    answers: ['Fighting']
  };

  it("should return initial value", () => {
    const mockAction: ActionObject = {
      type: '',
      insight: undefined
    };
    const expected: emptyArray = [];
    const result = insightsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the array with a new insight if type of action is ADD_INSIGHT", () => {
    const mockAction: IAddInsightAction = {
      type: 'ADD_INSIGHT',
      insight: mockInsight
    };

    const expected: Insight[] = [ mockInsight ];

    const result: Insight[] = insightsReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it("should return the empty array if type of action is CLEAN_STORE", () => {
    const mockAction: ICleanStore = {
      type: 'CLEAN_STORE'
    };

    const expected: emptyArray = [ ];
    const result = insightsReducer([mockInsight], mockAction);

    expect(result).toEqual(expected);
  });
  it("should return the empty array if type of action is REMOVE_INSIGHTS", () => {
    const mockAction: IRemoveInsightsAction = {
      type: 'REMOVE_INSIGHTS'
    };

    const expected: emptyArray = [ ];
    const result = insightsReducer([mockInsight], mockAction);

    expect(result).toEqual(expected);
  });
});
