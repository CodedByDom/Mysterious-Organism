// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (Num, arrayDNA) => {
  return {
    specimenNum: Num,
    dna: arrayDNA,
    mutate() {
      let dnaArray = this.dna;
      // console.log(dnaArray);
      let randomDNAIndexSelected = Math.floor(Math.random() * this.dna.length); //generates a random number within the lenght of the array (Number)
      console.log(`Random Base Index Selected: ${randomDNAIndexSelected}`);
      let selectedBase = this.dna[randomDNAIndexSelected]; // what element is at the Index Number // TEMP!!!!! Letter
      console.log(`Value at Index: ${selectedBase}`);
      let replacementBase = returnRandBase(); //generates a new element
      console.log(`New Base Generated ${replacementBase}`);
      dnaArray[randomDNAIndexSelected] = replacementBase;
      return this.dna = dnaArray;
    }
  }
};

const sampleOne = pAequorFactory(1, mockUpStrand());
console.log(`Original Sample: ${sampleOne.dna}`);
console.log("Actual Mutation: " + sampleOne.mutate());
console.log(`Mutated: ${sampleOne.dna}`);