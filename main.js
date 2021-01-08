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

let validSamples = [];

const pAequorFactory = (Num, arrayDNA) => {
  return {
    specimenNum: Num,
    dna: arrayDNA,
    mutate() {
      console.log(`Original Specimen# ${this.specimenNum}`)
      let dnaArray = this.dna;
      let randomDNAIndexSelected = Math.floor(Math.random() * this.dna.length); 
      console.log(`Random Base Index Selected: ${randomDNAIndexSelected}`);
      let selectedBase = this.dna[randomDNAIndexSelected]; 
      console.log(`Value at Index: ${selectedBase}`);
      let replacementBase;
      do {  
        replacementBase = returnRandBase(); 
      } while (selectedBase === replacementBase); 
      console.log(`Newly Base Generated ${replacementBase}`);
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
        };
      }
      percentage = ((match /15 ) * 100);
      percRounded2 = percentage.toFixed(2);
      return `Specimen #${this.specimenNum} & #${compareSample.specimenNum} Match ${percRounded2}%.`
    },

    willLikelySurvice() {
      let numOfGBase = 0;
      let numOfCBase = 0;
      let percentGCalc, percentCCalc, percentG, percentC;
      for (let i = 0; i < this.dna.length; i++ ) {
        if (this.dna[i] == 'G') {
          numOfGBase += 1;          
        } else if (this.dna[i] == 'C') {
          numOfCBase += 1;
        };
      };
        percentGCalc = ((numOfGBase / 15) * 100);
        percentCCalc = ((numOfCBase / 15) * 100);

        percentG = percentGCalc.toFixed(2);
        percentC = percentCCalc.toFixed(2);
      
        if ((percentC >= 60) || (percentG >= 60)) {
          console.log(`G Bases: ${percentG}`)
          console.log(`C Bases: ${percentC}`)
          return true;
        } else {
          return false;
        };
    }
  }
};

function generateSample (requiredValidSamples) {
  
  let sampleNumber = 1;
  let sample;

  for (let i = 0; i < requiredValidSamples; i++) {
    do {
      sample = pAequorFactory(sampleNumber, mockUpStrand());
    } while (sample.willLikelySurvice() == false);
      if (sample.willLikelySurvice()) {
        validSamples.push(sample)
        sampleNumber += 1;
      }
    }
    validSamples.forEach(({ specimenNum, dna}) => console.log(specimenNum, dna));
    console.log(`There are ${validSamples.length} Valid Samples`);
  };

generateSample(3);

console.log(validSamples[0].mutate());
console.log(validSamples[1].mutate());
console.log(validSamples[2].mutate());

console.log(validSamples[0].compare(validSamples[1]));
console.log(validSamples[1].compare(validSamples[2]));
console.log(validSamples[2].compare(validSamples[0]));

console.log(validSamples[0].willLikelySurvice());
console.log(validSamples[1].willLikelySurvice());
console.log(validSamples[2].willLikelySurvice());

