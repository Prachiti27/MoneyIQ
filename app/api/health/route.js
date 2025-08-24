import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    await prisma.user.findFirst();
    return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
  } catch (error) {
    console.error("Health check failed:", error);
    return new Response(JSON.stringify({ status: "error" }), { status: 500 });
  }
}
