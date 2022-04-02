import { Giveaway } from './Giveaway.mjs';

export class SteelseriesGiveaway implements Giveaway {
  private _percentRemaining: number;
  private _numberClaimed: number;
  private _numberTotal: number;
  private _about: string;
  private _accessKeyPoolId: string;
  private _accessKeyValidationRule: string;
  private _ageRegionValidationRule: string;
  private _active: boolean;
  private _description: string;
  private _id: number;
  private _imageUrl: string;
  private _instructions: string[];
  private _maxKeysPerIp: number;
  private _platform: string;
  private _published: boolean;
  private _recaptcha: boolean;
  private _recaptchaSensitivity: number;
  private _subtitle: string;
  private _summary: string;
  private _tags: string;
  private _title: string;
  private _type: number;
  private _uuid: string;
  private _videoUrl: string;
  private _weight: number;
  private _externalLink: string;
  private _codeEmbed: string;
  private _status: number;
  private _externalSite: number;
  private _category: number;

  constructor(obj: any) {
    obj && Object.assign(this, obj);
  }

  /**
   * Getter percentRemaining
   * @return {number}
   */
  public get percentRemaining(): number {
    return this._percentRemaining;
  }

  /**
   * Getter numberClaimed
   * @return {number}
   */
  public get numberClaimed(): number {
    return this._numberClaimed;
  }

  /**
   * Getter numberTotal
   * @return {number}
   */
  public get numberTotal(): number {
    return this._numberTotal;
  }

  /**
   * Getter about
   * @return {string}
   */
  public get about(): string {
    return this._about;
  }

  /**
   * Getter accessKeyPoolId
   * @return {string}
   */
  public get accessKeyPoolId(): string {
    return this._accessKeyPoolId;
  }

  /**
   * Getter accessKeyValidationRule
   * @return {string}
   */
  public get accessKeyValidationRule(): string {
    return this._accessKeyValidationRule;
  }

  /**
   * Getter ageRegionValidationRule
   * @return {string}
   */
  public get ageRegionValidationRule(): string {
    return this._ageRegionValidationRule;
  }

  /**
   * Getter active
   * @return {boolean}
   */
  public get active(): boolean {
    return this._active;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter imageUrl
   * @return {string}
   */
  public get imageUrl(): string {
    return this._imageUrl;
  }

  /**
   * Getter instructions
   * @return {string[]}
   */
  public get instructions(): string[] {
    return this._instructions;
  }

  /**
   * Getter maxKeysPerIp
   * @return {number}
   */
  public get maxKeysPerIp(): number {
    return this._maxKeysPerIp;
  }

  /**
   * Getter platform
   * @return {string}
   */
  public get platform(): string {
    return this._platform;
  }

  /**
   * Getter published
   * @return {boolean}
   */
  public get published(): boolean {
    return this._published;
  }

  /**
   * Getter recaptcha
   * @return {boolean}
   */
  public get recaptcha(): boolean {
    return this._recaptcha;
  }

  /**
   * Getter recaptchaSensitivity
   * @return {number}
   */
  public get recaptchaSensitivity(): number {
    return this._recaptchaSensitivity;
  }

  /**
   * Getter subtitle
   * @return {string}
   */
  public get subtitle(): string {
    return this._subtitle;
  }

  /**
   * Getter summary
   * @return {string}
   */
  public get summary(): string {
    return this._summary;
  }

  /**
   * Getter tags
   * @return {string}
   */
  public get tags(): string {
    return this._tags;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter type
   * @return {number}
   */
  public get type(): number {
    return this._type;
  }

  /**
   * Getter uuid
   * @return {string}
   */
  public get uuid(): string {
    return this._uuid;
  }

  /**
   * Getter videoUrl
   * @return {string}
   */
  public get videoUrl(): string {
    return this._videoUrl;
  }

  /**
   * Getter weight
   * @return {number}
   */
  public get weight(): number {
    return this._weight;
  }

  /**
   * Getter externalLink
   * @return {string}
   */
  public get externalLink(): string {
    return this._externalLink;
  }

  /**
   * Getter codeEmbed
   * @return {string}
   */
  public get codeEmbed(): string {
    return this._codeEmbed;
  }

  /**
   * Getter status
   * @return {number}
   */
  public get status(): number {
    return this._status;
  }

  /**
   * Getter externalSite
   * @return {number}
   */
  public get externalSite(): number {
    return this._externalSite;
  }

  /**
   * Getter category
   * @return {number}
   */
  public get category(): number {
    return this._category;
  }

  /**
   * Setter percentRemaining
   * @param {number} value
   */
  public set percentRemaining(value: number) {
    this._percentRemaining = value;
  }

  /**
   * Setter numberClaimed
   * @param {number} value
   */
  public set numberClaimed(value: number) {
    this._numberClaimed = value;
  }

  /**
   * Setter numberTotal
   * @param {number} value
   */
  public set numberTotal(value: number) {
    this._numberTotal = value;
  }

  /**
   * Setter about
   * @param {string} value
   */
  public set about(value: string) {
    this._about = value;
  }

  /**
   * Setter accessKeyPoolId
   * @param {string} value
   */
  public set accessKeyPoolId(value: string) {
    this._accessKeyPoolId = value;
  }

  /**
   * Setter accessKeyValidationRule
   * @param {string} value
   */
  public set accessKeyValidationRule(value: string) {
    this._accessKeyValidationRule = value;
  }

  /**
   * Setter ageRegionValidationRule
   * @param {string} value
   */
  public set ageRegionValidationRule(value: string) {
    this._ageRegionValidationRule = value;
  }

  /**
   * Setter active
   * @param {boolean} value
   */
  public set active(value: boolean) {
    this._active = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter imageUrl
   * @param {string} value
   */
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  /**
   * Setter instructions
   * @param {string[]} value
   */
  public set instructions(value: string[]) {
    this._instructions = value;
  }

  /**
   * Setter maxKeysPerIp
   * @param {number} value
   */
  public set maxKeysPerIp(value: number) {
    this._maxKeysPerIp = value;
  }

  /**
   * Setter platform
   * @param {string} value
   */
  public set platform(value: string) {
    this._platform = value;
  }

  /**
   * Setter published
   * @param {boolean} value
   */
  public set published(value: boolean) {
    this._published = value;
  }

  /**
   * Setter recaptcha
   * @param {boolean} value
   */
  public set recaptcha(value: boolean) {
    this._recaptcha = value;
  }

  /**
   * Setter recaptchaSensitivity
   * @param {number} value
   */
  public set recaptchaSensitivity(value: number) {
    this._recaptchaSensitivity = value;
  }

  /**
   * Setter subtitle
   * @param {string} value
   */
  public set subtitle(value: string) {
    this._subtitle = value;
  }

  /**
   * Setter summary
   * @param {string} value
   */
  public set summary(value: string) {
    this._summary = value;
  }

  /**
   * Setter tags
   * @param {string} value
   */
  public set tags(value: string) {
    this._tags = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter type
   * @param {number} value
   */
  public set type(value: number) {
    this._type = value;
  }

  /**
   * Setter uuid
   * @param {string} value
   */
  public set uuid(value: string) {
    this._uuid = value;
  }

  /**
   * Setter videoUrl
   * @param {string} value
   */
  public set videoUrl(value: string) {
    this._videoUrl = value;
  }

  /**
   * Setter weight
   * @param {number} value
   */
  public set weight(value: number) {
    this._weight = value;
  }

  /**
   * Setter externalLink
   * @param {string} value
   */
  public set externalLink(value: string) {
    this._externalLink = value;
  }

  /**
   * Setter codeEmbed
   * @param {string} value
   */
  public set codeEmbed(value: string) {
    this._codeEmbed = value;
  }

  /**
   * Setter status
   * @param {number} value
   */
  public set status(value: number) {
    this._status = value;
  }

  /**
   * Setter externalSite
   * @param {number} value
   */
  public set externalSite(value: number) {
    this._externalSite = value;
  }

  /**
   * Setter category
   * @param {number} value
   */
  public set category(value: number) {
    this._category = value;
  }

  /**
   * Compare giveaways
   * @param {SteelseriesGiveaway} newGiveaway
   */
  public compare(newGiveaway: Giveaway): boolean {
    throw this.id === newGiveaway.id;
  }

  /**
   * Show the giveaway
   */
  public toString(baseURL: string): string {
    throw `${baseURL}/${this.id}`;
  }
}
