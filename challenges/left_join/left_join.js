'use strict';

function join(hash111, hash222, type) {
  let results = [];
  let arr = [];

  let hash1;
  let hash22;

  const qqq = (w, i) => {
    let c = w.value;
    for (let q in c) {
      arr.push(q);
      arr.push(c[q]);
      arr.push(hash22.get(q));
      results.push(arr);
      arr = [];
    }

    let b = w.next;
    if (b) {
      console.log('hiiii');
    }
  };


  if (type === 'left') {
    hash1 = hash111.map;
    hash22 = hash222;
  }

  if (type === 'right') {
    hash1 = hash222.map;
    hash22 = hash111;
  }

  for (let i = 0; i < hash1.length; i++) {

    if (hash1[i]) {
      let z = hash1[i].head.value;
      for (let q in z) {
        arr.push(q);
        arr.push(z[q]);
        arr.push(hash22.get(q));
        results.push(arr);
        arr = [];
      }
      let w = hash1[i].head.next;
      if (w) {
        qqq(w, i);
      }
    }
  }

  return results;

}


module.exports = join;
