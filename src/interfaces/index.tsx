export interface CurrenciesInterface {
  type: 'USD' | 'ETH' | 'BTC' | 'LTC'
}

export interface ExchangeInterface {
  data: {
    currency: string,
    rates: {
      [key: string]: number
    }
  }
}

// Booze Endpoint
export interface BoozeInterface {
  data: BoozeDrinkEntity[],
}

export interface BoozeDrinkEntity {
  'Bottle Size': string,
  'Brand Name': string,
  Proof: number,
  'Retail Bottle Price': number,
  Supplier: string,
  Type: string
}

// Spirit Endpoint
export interface SpiritInterface {
  data: SpiritDrinkInterface
}

export interface SpiritDrinkInterface {
  drinks: SpiritDrinkEntity[],
  count: number
}
export interface SpiritDrinkEntity {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string
}

// Spec Endpoint
export interface SpecInterface {
  data: SpecDrinkInterface;
}
export interface SpecDrinkInterface {
  drinks: SpecDrinkEntity[];
}
export interface SpecDrinkEntity {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory: string;
  strIBA?: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: string;
  strInstructionsDE: string;
  strInstructionsFR?: string;
  strInstructionsIT: string;
  'strInstructionsZH-HANS'?: string;
  'strInstructionsZH-HANT'?: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}
