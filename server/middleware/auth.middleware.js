import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
  //   const { userId } = (await clerkClient.users) / getUser(req.userId);
  //   if (!userId) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }
  //   req.userId = userId;
  //   next();

  if (!req.auth.userId) {
    return res
      .status(401)
      .json({ message: "Unauthorized - you must be logged in" });
  }
  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
    if (!isAdmin) {
      return res
        .statsu(403)
        .json({ message: "Unauthorized  - you must be an admin" });
    }
    next();
  } catch (error) {}
};
