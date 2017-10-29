export interface Candlestick {
    /**
     * Bitcoin value
     * @type {number}
     * @memberof Candlestick
     */
    BV: number;

    /**
     * Close value
     * @type {number}
     * @memberof Candlestick
     */
    C: number;

    /**
     * Maximum of high, open, or close
     * @type {number}
     * @memberof Candlestick
     */
    H: number;

    /**
     * Minimum of low, open, or close
     * @type {number}
     * @memberof Candlestick
     */
    L: number;

    /**
     * Open value
     * @type {number}
     * @memberof Candle
     */
    O: number;

    /**
     * Timestamp
     * @type {Date}
     * @memberof Candle
     */
    T: Date;

    /**
     * Value
     * @type {number}
     * @memberof Candlestick
     */
    V: number;
}

