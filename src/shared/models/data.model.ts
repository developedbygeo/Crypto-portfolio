export type GeneralFetchedObject = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    atl_date: string;
    ath_date: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    atl: number;
    atl_change_percentage: number;
    roi?: {
        times: number;
        currency: string;
        percentage: number;
    };
    last_updated: string;
    price_change_percentage_24h_in_currency: number;
};

// TODO sanitize incoming data to only match the following type
export type LineChartData = {
    name: string;
    symbol: string;
    priceChange24H: number;
    current_price: number;
    sevenDaySparkline: {
        price: number[];
    };
};
