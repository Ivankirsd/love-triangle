/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let triangles = [];
  let preferencesLength = preferences.length;
  
  out: for (let index = 0; index < preferencesLength; index++) {    
    
    let a = preferences[index];
    let b = preferences[preferences[index]-1];
    let c = preferences[preferences[preferences[index]-1] -1];

    if (a === preferences[preferences[preferences[preferences[index]-1] -1]-1] 
      && a !== b 
      && a !== c) {
      
      let loveTriangle = [a, b, c ];

      for (let j = 0; j < triangles.length; j++) {
        if (triangles[j].sort(numericSort)[0] === loveTriangle.sort(numericSort)[0]
          && triangles[j].sort(numericSort)[1] === loveTriangle.sort(numericSort)[1]
          && triangles[j].sort(numericSort)[2] === loveTriangle.sort(numericSort)[2]) {
            continue out;
        }
      }
      count++;
      triangles.push(loveTriangle)
      
    }
    
  }
  return count;
};

function numericSort(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
