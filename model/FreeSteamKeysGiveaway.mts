import {
  Post,
  PostContent,
  PostExcerpt,
  PostTitle,
} from '../types/wordpress.js';
import { Giveaway } from './Giveaway.mjs';

export class FreeSteamKeysGiveaway implements Giveaway, Post {
  private _title: PostTitle;
  private _content: PostContent;
  private _excerpt: PostExcerpt;
  private _date: string;
  private _id: number;
  private _slug: string;
  private _link: string;

  constructor(obj: any) {
    obj && Object.assign(this, obj);
  }

  /**
   * Getter title
   * @return {PostTitle}
   */
  public get title(): PostTitle {
    return this._title;
  }

  /**
   * Getter content
   * @return {PostContent}
   */
  public get content(): PostContent {
    return this._content;
  }

  /**
   * Getter excerpt
   * @return {PostExcerpt}
   */
  public get excerpt(): PostExcerpt {
    return this._excerpt;
  }

  /**
   * Getter date
   * @return {string}
   */
  public get date(): string {
    return this._date;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter slug
   * @return {string}
   */
  public get slug(): string {
    return this._slug;
  }

  /**
   * Getter link
   * @return {string}
   */
  public get link(): string {
    return this._link;
  }

  /**
   * Setter title
   * @param {PostTitle} value
   */
  public set title(value: PostTitle) {
    this._title = value;
  }

  /**
   * Setter content
   * @param {PostContent} value
   */
  public set content(value: PostContent) {
    this._content = value;
  }

  /**
   * Setter excerpt
   * @param {PostExcerpt} value
   */
  public set excerpt(value: PostExcerpt) {
    this._excerpt = value;
  }

  /**
   * Setter date
   * @param {string} value
   */
  public set date(value: string) {
    this._date = value;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter slug
   * @param {string} value
   */
  public set slug(value: string) {
    this._slug = value;
  }

  /**
   * Setter link
   * @param {string} value
   */
  public set link(value: string) {
    this._link = value;
  }

  /**
   * Compare giveaways
   * @param {AlienwareArenaGiveaway} newGiveaway
   */
  public compare(newGiveaway: FreeSteamKeysGiveaway): boolean {
    return this.id === newGiveaway.id;
  }

  /**
   * Show the giveaway
   */
  public toString(baseURL: string): string {
    return `${baseURL}/${this.slug}`;
  }
}
