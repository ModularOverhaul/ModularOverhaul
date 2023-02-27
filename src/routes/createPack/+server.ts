import Packs from '$lib/data/packs.json'; // pack data

export const POST = async ({request}) => {
    const body = await request.json()

    console.log(body)

    return new Response(JSON.stringify({message: "success"}), {status: 201})
}