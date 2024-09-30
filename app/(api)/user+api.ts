import { neon } from "@neondatabase/serverless";

export async function POST(request: any) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    const { name, email, clerkId } = await request.json(); // Correct the usage here

    if (!name || !email || !clerkId) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
        }),
        {
          status: 400,
        }
      );
    }

    const response = await sql`
    INSERT INTO users (
      name, 
      email, 
      clerk_id
    )
    VALUES (
        ${name},
        ${email},
        ${clerkId}
    )
  `;

    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}

export async function GET(params: Request) {}
