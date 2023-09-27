const URL = "http://localhost:3000";
const headers = new Headers({'Content-Type': 'application/json'});

async function fetchData(endpoint, options = {}) {
    try {
        const response = await fetch(`${URL}/${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${endpoint}: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
    }
}

export async function getEntities(entityType, filterParams = {}) {
    try {
        const data = await fetchData(entityType, {
            method: 'GET',
        });
        return data.filter(entity => {
            for (const [param, value] of Object.entries(filterParams)) {
                if (entity[param] !== value) {
                    return false;
                }
            }
            return true;
        });
    } catch (error) {
        throw new Error(`Error fetching ${entityType}: ${error.message}`);
    }
}

export async function createEntity(entityType, data) {
    try {
        const response = await fetchData(entityType, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        throw new Error(`Error creating ${entityType}: ${error.message}`);
    }
}

export async function updateEntity(entityType, id, data) {
    try {
        const response = await fetchData(`${entityType}/${id}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        throw new Error(`Error updating ${entityType} with ID ${id}: ${error.message}`);
    }
}

export async function deleteEntity(entityType, id) {
    try {
        await fetchData(`${entityType}/${id}`, {
            method: 'DELETE',
            headers: headers,
        });
    } catch (error) {
        throw new Error(`Error deleting ${entityType} with ID ${id}: ${error.message}`);
    }
}
