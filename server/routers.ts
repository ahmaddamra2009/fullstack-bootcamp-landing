import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createRegistration, getAllRegistrations, getRegistrationCount, deleteRegistration } from "./db";

// Simple admin credentials (in production, use environment variables)
const ADMIN_USERNAME = "qudah";
const ADMIN_PASSWORD = "2991985Fs!";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Simple admin login (not OAuth based)
  admin: router({
    login: publicProcedure
      .input(z.object({
        username: z.string(),
        password: z.string(),
      }))
      .mutation(({ input }) => {
        if (input.username === ADMIN_USERNAME && input.password === ADMIN_PASSWORD) {
          return { success: true, token: "admin-session-token" };
        }
        return { success: false, error: "بيانات الدخول غير صحيحة" };
      }),
  }),

  // Registration endpoints
  registration: router({
    // Public: Create new registration
    create: publicProcedure
      .input(z.object({
        name: z.string().min(2, "الاسم مطلوب"),
        email: z.string().email("البريد الإلكتروني غير صحيح"),
        phone: z.string().min(8, "رقم الهاتف غير صحيح"),
        experience: z.enum(["beginner", "intermediate", "advanced"]).optional(),
        country: z.string().optional(),
        city: z.string().optional(),
        source: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await createRegistration(input);
        return { success: true, message: "تم التسجيل بنجاح!" };
      }),

    // Admin: Get all registrations (requires token)
    list: publicProcedure
      .input(z.object({
        token: z.string(),
      }))
      .query(async ({ input }) => {
        if (input.token !== "admin-session-token") {
          throw new Error("غير مصرح");
        }
        return await getAllRegistrations();
      }),

    // Admin: Get count
    count: publicProcedure
      .input(z.object({
        token: z.string(),
      }))
      .query(async ({ input }) => {
        if (input.token !== "admin-session-token") {
          throw new Error("غير مصرح");
        }
        return await getRegistrationCount();
      }),

    // Admin: Delete registration
    delete: publicProcedure
      .input(z.object({
        token: z.string(),
        id: z.number(),
      }))
      .mutation(async ({ input }) => {
        if (input.token !== "admin-session-token") {
          throw new Error("غير مصرح");
        }
        await deleteRegistration(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
