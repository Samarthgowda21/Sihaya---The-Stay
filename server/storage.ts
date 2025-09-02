import { type User, type InsertUser, type BookingInquiry, type InsertBookingInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBookingInquiry(inquiry: InsertBookingInquiry): Promise<BookingInquiry>;
  getBookingInquiries(): Promise<BookingInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bookingInquiries: Map<string, BookingInquiry>;

  constructor() {
    this.users = new Map();
    this.bookingInquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBookingInquiry(insertInquiry: InsertBookingInquiry): Promise<BookingInquiry> {
    const id = randomUUID();
    const inquiry: BookingInquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.bookingInquiries.set(id, inquiry);
    return inquiry;
  }

  async getBookingInquiries(): Promise<BookingInquiry[]> {
    return Array.from(this.bookingInquiries.values());
  }
}

export const storage = new MemStorage();
