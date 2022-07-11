/**Example action redux
 * export function nameFunc(){
 *  return{
 *        type: "INCREMENT"
 * }
 * }
 */
export function userCookie(name) {
  return {
    type: "USERCOOKIE",
    name,
  };
}
