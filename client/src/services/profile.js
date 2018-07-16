import * as baseService from './base';

function all() {
    return baseService.get('/api/profiles');
}

function one(id) {
    return baseService.get(`/api/profiles/${id}`);
}

function insert(data) {
    return baseService.post('/api/profiles', data);
}

function update(id, data) {
    return baseService.put(`/api/profiles/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/profiles/${id}`);
}

export { all, one, insert, update, destroy };