export interface Giveaway {
  /**
   * Return the id of the Giveaway
   */
  get id(): number;

  /**
   * Compare giveaways
   * @param {Giveaway} newGiveaway
   */
  compare(newGiveaway: Giveaway): boolean;

  /**
   * Print Giveaway
   */
  toString(baseURL: string): string;
}
