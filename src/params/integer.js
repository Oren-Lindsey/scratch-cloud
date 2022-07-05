/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    if (param !== 'undefined' && param !== 'undefined') {
      return /^\d+$/.test(param);
    } else {
      return true
    }
  }