
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

function generateHash(password) {
    console.log('got to gernatehash in security');
    return bcrypt.hash(password, SALT_ROUNDS);
}

function checkPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

export { generateHash, checkPassword }