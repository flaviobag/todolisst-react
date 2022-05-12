const URL = 'http://localhost:3001/items/'

const request = async (method = 'GET', body, params = '') => {
    const response = await fetch(`${URL}/${params}`,
    {
        method,
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
    return data
}

const getItems = () => request()
const postItems = (item) => request('POST', item)
const deleteItems = (item) => request('DELETE', {}, item)

export {
   
    getItems,
    postItems,
    deleteItems
}
