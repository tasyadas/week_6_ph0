function superShootSoccer(params, club) {
  if (params.length === 1) {
    return 0
  } else if (params[0]['Club'] === club) {
    return params[0]['Power'] + superShootSoccer(params.slice(1), club);
  } else {
    return superShootSoccer(params.slice(1), club);
  }
}

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 20, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 77, Club: 'Japan'},
  {Name: 'Kira', Power: 41, Club: 'Korea'},
  {Name: 'Tsubasa', Power: 90, Club: 'Japan'},
  {Name: 'Andre', Power: 84, Club: 'Egypt'}
], 'Japan'))

// 167