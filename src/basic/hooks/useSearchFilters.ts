import { useCallback, useState } from "react";

export interface SearchOption {
  query?: string;
  grades: number[];
  days: string[];
  times: number[];
  majors: string[];
  credits?: number;
}

const defaultState: SearchOption = {
  query: "",
  credits: undefined,
  grades: [],
  days: [],
  times: [],
  majors: [],
};

export const useSearchFilters = (initialState: Partial<SearchOption> = {}) => {
  const [searchOption, setSearchOption] = useState(() => ({
    ...defaultState,
    ...initialState,
  }));

  const handlers = {
    handleChangeQuery: useCallback((value: string) => {
      setSearchOption((prev) => ({ ...prev, query: value }));
    }, []),

    handleChangeCredits: useCallback((value: string) => {
      setSearchOption((prev) => ({ ...prev, credits: Number(value) }));
    }, []),

    handleChangeGrades: useCallback((value: number[]) => {
      setSearchOption((prev) => ({ ...prev, grades: value }));
    }, []),

    handleChangeDays: useCallback((value: string[]) => {
      setSearchOption((prev) => ({ ...prev, days: value }));
    }, []),

    handleChangeTimes: useCallback((value: number[]) => {
      setSearchOption((prev) => ({ ...prev, times: value }));
    }, []),

    handleChangeMajors: useCallback((value: string[]) => {
      setSearchOption((prev) => ({ ...prev, majors: value }));
    }, []),
  } as const;

  return { searchOption, handlers };
};
