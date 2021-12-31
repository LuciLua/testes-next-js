export async function dataUser() {

    const req = await fetch('https://api.github.com/users/LuciLua')
    const json = await req.json()

    const data = {
        allData: json,
    }

    return data
}

