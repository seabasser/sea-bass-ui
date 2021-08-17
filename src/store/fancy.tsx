import { atom } from 'recoil';

export interface FancyContent {
  isFancy: boolean;
}

const initialState: FancyContent = {
  isFancy: false
};

export const fancyContentState = atom<FancyContent>({
  key: 'fancyContents',
  default: initialState,
});
