export interface Giveaway {
  /**
   * Compare giveaways
   * @param {T} newGiveaway
   */
  compare(newGiveaway: Giveaway): boolean;

  /**
   * Print Giveaway
   */
  toString(baseURL: string): string;
}
