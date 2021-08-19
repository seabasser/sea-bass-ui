import { atom } from 'recoil';

export interface liquorContent {
  liquors: string[];
}

const initialState: liquorContent = {
  liquors: [
    'gin',
    'vodka',
    'tequila',
    'rum',
    'whiskey',
    'scotch',
    'rye',
    'bourbon',
    'amaretto',
    'kahlua',
  ]
};

export const liquorContentState = atom<liquorContent>({
  key: 'liquorContent',
  default: initialState,
});
