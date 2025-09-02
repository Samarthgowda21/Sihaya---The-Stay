import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking inquiry endpoint
  app.post("/api/booking-inquiry", async (req, res) => {
    try {
      const validatedData = insertBookingInquirySchema.parse(req.body);
      const inquiry = await storage.createBookingInquiry(validatedData);
      
      // TODO: Add email notification logic here using nodemailer
      console.log("New booking inquiry:", inquiry);
      
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data",
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit inquiry" 
        });
      }
    }
  });

  // Get all booking inquiries (for admin purposes)
  app.get("/api/booking-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getBookingInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
