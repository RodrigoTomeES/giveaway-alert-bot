export class Giveaway {
  private _id: number;
  private _title: string;
  private _image: string;
  private _url: string;
  private _contentType: string;
  private _publishedAt: Date;
  private _upVotes: number;
  private _downVotes: number;
  private _points: number;
  private _featured: boolean;
  private _instructions: string;
  private _description: string;

  constructor(
    id: number,
    title: string,
    image: string,
    url: string,
    contentType: string,
    publishedAt: Date,
    upVotes: number,
    downVotes: number,
    points: number,
    featured: boolean,
    instructions: string,
    description: string
  ) {
    this._id = id;
    this._title = title;
    this._image = image;
    this._url = url;
    this._contentType = contentType;
    this._publishedAt = publishedAt;
    this._upVotes = upVotes;
    this._downVotes = downVotes;
    this._points = points;
    this._featured = featured;
    this._instructions = instructions;
    this._description = description;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Getter contentType
   * @return {string}
   */
  public get contentType(): string {
    return this._contentType;
  }

  /**
   * Getter publishedAt
   * @return {Date}
   */
  public get publishedAt(): Date {
    return this._publishedAt;
  }

  /**
   * Getter upVotes
   * @return {number}
   */
  public get upVotes(): number {
    return this._upVotes;
  }

  /**
   * Getter downVotes
   * @return {number}
   */
  public get downVotes(): number {
    return this._downVotes;
  }

  /**
   * Getter points
   * @return {number}
   */
  public get points(): number {
    return this._points;
  }

  /**
   * Getter featured
   * @return {boolean}
   */
  public get featured(): boolean {
    return this._featured;
  }

  /**
   * Getter instructions
   * @return {string}
   */
  public get instructions(): string {
    return this._instructions;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }

  /**
   * Setter contentType
   * @param {string} value
   */
  public set contentType(value: string) {
    this._contentType = value;
  }

  /**
   * Setter publishedAt
   * @param {Date} value
   */
  public set publishedAt(value: Date) {
    this._publishedAt = value;
  }

  /**
   * Setter upVotes
   * @param {number} value
   */
  public set upVotes(value: number) {
    this._upVotes = value;
  }

  /**
   * Setter downVotes
   * @param {number} value
   */
  public set downVotes(value: number) {
    this._downVotes = value;
  }

  /**
   * Setter points
   * @param {number} value
   */
  public set points(value: number) {
    this._points = value;
  }

  /**
   * Setter featured
   * @param {boolean} value
   */
  public set featured(value: boolean) {
    this._featured = value;
  }

  /**
   * Setter instructions
   * @param {string} value
   */
  public set instructions(value: string) {
    this._instructions = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Compare giveaways
   * @param {string} value
   */
  static compare(currentGiveaway: Giveaway, newGiveaway: Giveaway) {
    return currentGiveaway.id === newGiveaway.id;
  }
}
