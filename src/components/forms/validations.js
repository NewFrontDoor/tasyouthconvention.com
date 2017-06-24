export const required = value => value ? undefined : 'This value is required';

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined;

export const validMobile = value => value && /^04[0-9]{2}\s[0-9]{3}\s[0-9]{3}$/i.test(value) ? undefined : 'Number must be a valid number in the format 04xx xxx xxx';

export const validEmail = value => value && /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(value) ? undefined : "This doesn't looks like a valid email"
