import Axios  from "axios"

export async function getRepositories() {
    return Axios
    .get('https://api.github.com/users/LuciLua/repos')
    .then(res => res.data)
}
