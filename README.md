## _Mysterious Organism - Code Academy Project_

### Purpose 
The JS File is designed the mutation of a DNA Sample via the use of Objects, comparing the mutations and stating of the newly mutated Sample will survive.

### Function Roles

#### returnRandBase
* DNA is comprised of four bases
    * A - Adenine
    * T - Thymine
    * C - Cytosine
    * G - Guanine
* This function randomly selects a base and returns it. (A, T, C, or G)

#### mockUpStrand
* Returns a mock DNA strand of 15 Bases which represents a single DNA Strand in an Array form.

#### pAequorFactory
* returns an object with 2 parameters
    * specimenNum - num input parameter
    * dna - arrayDNA parameter

###  Methods  

#### object.mutate()
* __dnaArray__ pulls the current DNA Strand from object.dna (this.dna)
* __randomDNAIndexSelected__ generates a random number, limited to the length of the array
* __selectedBase__ used to confirm the value at the above mentioned index
* _do While Loop_
    *  __replacementBase__ recieves a new base using __returnRandBase__ 
    * if the __selectedBase__ == __replacementBase__ it is regenerated.
* The element in __dnaArray__ is replaced with the __replacementBase__ 
* returns the _new_ dnaArray back into object.dna (this.dna)

