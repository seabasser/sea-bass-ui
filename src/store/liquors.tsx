import { atom } from 'recoil';

export interface liquorContent {
  liquors: string[];
}

const initialState: liquorContent = {
  liquors: [
    'Gin',
    'Vodka',
    'Tequila',
    'Rum',
    'Whiskey',
    'Scotch',
    'Rye',
    'Bourbon',
    'Amaretto',
    'Kahlua',
  ]
};

export const liquorContentState = atom<liquorContent>({
  key: 'liquorContent',
  default: initialState,
});
