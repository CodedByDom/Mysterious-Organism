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
      let randomDNAIndexSelected = Math.floor(Math.random() * this.dna.length); 
      let selectedBase = this.dna[randomDNAIndexSelected]; 
      let replacementBase;
      do {  
        replacementBase = returnRandBase(); 
      } while (selectedBase === replacementBase); 
      console.log(`New Base Generated ${replacementBase}`);
      dnaArray[randomDNAIndexSelected] = replacementBase;
      return this.dna = dnaArray;
    },
    compare(compareSample) {
      let match = 0;
      let percentage;
      let percRounded2;
      for (let i = 0; i < this.dna.length; i++ ) {
        if (this.dna[i] == compareSample.dna[i]) {
          match += 1;
        }
      }
      percentage = ((match /15 ) * 100);
      percRounded2 = percentage.toFixed(2);
      console.log(`Specimen #${this.specimenNum} & #${compareSample.specimenNum} Match ${percRounded2}%.`);
    }
  }
};

const sampleOne = pAequorFactory(1, mockUpStrand());
const sampleTwo = pAequorFactory(2, mockUpStrand());
console.log(sampleOne.dna);
console.log(sampleTwo.dna);

sampleOne.compare(sampleTwo);