javascript
const consent = CookieFirst.consent;

// if consent is available, it will be an object of this structure:
{
 necessary: true, // necessary category can't be disabled
 performance: true|false,
 functional: true|false,
 advertising: true|false,
}

// otherwise it will be empty
consent === null; // true
