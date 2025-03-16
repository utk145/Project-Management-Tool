/**
 * Sanitized user object
 *
 * @export
 * @interface SanitizedUser
 * @typedef {SanitizedUser}
 */
interface SanitizedUser {
    id: string;
    name: string;
    email: string;
    registrationTime?: string;
}

/**
 * Utility function to sanitize the user object response
 *
 * @export
 * @param {*} user
 * @returns {SanitizedUser}
 */
export function sanitizeUser(user: any): SanitizedUser {
    return {
        id: user.$id,
        name: user.name,
        email: user.email,
        registrationTime: user.registration,
    };
}
