//structure: ElementName : [fullname, atomic#, mass#]

let elms = {
    "H":["Hydrogen", 1, 1.0078, "nonmetal"],
    "He":["Heliuim", 2, 4.0026, "#bfa7f2"],
    "Li":["Lithium", 3, 6.9410, "#dba0a0"],
    "Be":["Beryllium", 4, 9.0122, "#fad082"],
    "B":["Boron", 5, 10.811, "metalloid"],
    "C":["Carbon", 6, 12.011, "#cccbf2"],
    "N":["Nitrogen", 7, 14.007, "#cccbf2"],
    "O":["Oxygen", 8, 15.999, "#cccbf2"],
    "F":["Fluorine", 9, 18.998, "#bfa7f2"],
    "Ne":["Neon", 10, 20.180, "#bfa7f2"],
    "Na":["Sodium", 11, 22.990, "#dba0a0"],
    "Mg":["Magnesium", 12, 24.305, "#fad082"],
    "Al":["Aluminium", 13, 26.982, "#a7caf2"],
    "Si":["Silicon", 14, 28.086, "metalloid"],
    "P":["Phosphorus", 15, 30.974, "#cccbf2"],
    "S":["Sulfur", 16, 32.065, "#cccbf2"],
    "Cl":["Chlorine", 17, 35.453, "#bfa7f2"],
    "Ar":["Argon", 18, 39.948, "#bfa7f2"],
    "K":["Potassium", 19, 39.098, "#dba0a0"],
    "Ca":["Calcium", 20, 40.078, "#fad082"],
    "Sc":["Scandium", 21, 44.956, "#a7f2b9"],
    "Ti":["Titanium", 22, 47.867, "#a7f2b9"],
    "V":["Vanadium", 23, 50.942, "#a7f2b9"],
    "Cr":["Chromium", 24, 51.996, "#a7f2b9"],
    "Mn":["Manganese", 25, 54.938, "#a7f2b9"],
    "Fe":["Iron", 26, 55.845, "#a7f2b9"],
    "Co":["Cobalt", 27, 58.933, "#a7f2b9"],
    "Ni":["Nickel", 28, 58.693,"#a7f2b9"],
    "Cu":["Copper", 29, 63.546,"#a7f2b9"],
    "Zn":["Zinc", 30, 65.380,"#a7f2b9"],
    "Ga":["Gallium", 31, 69.723, "#a7caf2"],
    "Ge":["Germanium", 32, 72.640, "metalloid"],
    "As":["Arsenic", 33, 74.922, "metalloid"],
    "Se":["Selenium", 34, 78.960,"#cccbf2"],
    "Br":["Bromine", 35, 79.904, "#bfa7f2"],
    "Kr":["Krypton", 36, 83.798, "#bfa7f2"],
    "Rb":["Rubidium", 37, 85.468, "#dba0a0"],
    "Sr":["Strontium", 38, 87.620, "#fad082"],
    "Y":["Yttrium", 39, 88.906, "#a7f2b9"],
    "Zr":["Zirconium", 40, 91.224, "#a7f2b9"],
    "Nb":["Niobium", 41, 92.906, "#a7f2b9"],
    "Mo":["Molybdenum", 42, 96.950, "#a7f2b9"],
    "Tc":["Technetium", 43, 98, "#a7f2b9"],
    "Ru":["Ruthernium", 44, 101.07, "#a7f2b9"],
    "Rh":["Rhodium", 45, 102.91, "#a7f2b9"],
    "Pd":["Palladium", 46, 106.24, "#a7f2b9"],
    "Ag":["Silver", 47, 107.87, "#a7f2b9"],
    "Cd":["Cadmium", 48, 112,41, "#a7f2b9"],
    "In":["Indium", 49, 114.82,"#a7caf2"],
    "Sn":["Tin", 50, 118.71, "#a7caf2"],
    "Sb":["Antimony", 51, 121.76, "metalloid"],
    "Te":["Tellurium", 52, 127.60, "metalloid"],
    "I":["Iodine", 53, 126.90, "#bfa7f2"],
    "Xe":["Xenon", 54, 131.29, "#bfa7f2"],
    "Cs":["Caesium", 55, 132.91, "#dba0a0"],
    "Ba":["Barium", 56, 137.33, "#fad082"],
    "La":["Lanthanum", 57, 138.91, "#e3a7f2"],
    "Ce":["Cerium", 58, 140.12, "#e3a7f2"],
    "Pr":["Praseodymium", 59, 140.91, "#e3a7f2"],
    "Nd":["Neodymium", 60, 144.24, "#e3a7f2"],
    "Pm":["Promethium", 61, 145, "#e3a7f2"],
    "Sm":["Samarium", 62, 150.36, "#e3a7f2"],
    "Eu":["Europium", 63, 151.96,"#e3a7f2"],
    "Gd":["Gadolinium", 64, 157.25,"#e3a7f2"],
    "Tb":["Terbium", 64, 158.93,"#e3a7f2"],
    "Dy":["Dysprosium", 66, 162.5,"#e3a7f2"],
    "Ho":["Holmium", 67, 164.93,"#e3a7f2"],
    "Er":["Erbium", 68, 167.26,"#e3a7f2"],
    "Tm":["Thulium", 63, 168.93,"#e3a7f2"],
    "Yb":["Ytterbium", 70, 173.04,"#e3a7f2"],
    "Lu":["Lutetium", 71, 174.97,"#e3a7f2"],
    "Hf":["Hafnium", 72, 178.49,"#a7f2b9"],
    "Ta":["Tantalum", 73, 180.95,"#a7f2b9"],
    "W":["Tungsten", 74, 183.84,"#a7f2b9"],
    "Re":["Rhenium", 75, 186.21,"#a7f2b9"],
    "Os":["Osmium", 76, 190.23,"#a7f2b9"],
    "Ir":["Iridium", 77, 192.22,"#a7f2b9"],
    "Pt":["Platinum", 78, 195.08,"#a7f2b9"],
    "Au":["Gold", 79, 196.97,"#a7f2b9"],
    "Hg":["Mercury", 80, 200.59,"#a7f2b9"],
    "Tl":["Thallium", 81, 204.38, "#a7caf2"],
    "Pb":["Lead", 82, 207.20, "#a7caf2"],
    "Bi":["Bismuth", 83, 208.98, "#a7caf2"],
    "Po":["Polonium", 84, 209, "#a7caf2"],
    "At":["Astatine", 85, 210, "#bfa7f2"],
    "Rn":["Radon", 86, 222, "#bfa7f2"],
    "Fr":["Francium", 87, 223, "#dba0a0"],
    "Ra":["Radium", 88, 226, "#fad082"],
    "Ac":["Actinium", 89, 227, "#f2a7c6"],
    "Th":["Thorium", 90, 232.04,"#f2a7c6"],
    "Pa":["Protactinium", 91, 231.04,"#f2a7c6"],
    "U":["Uranium", 92, 238.03,"#f2a7c6"],
    "Np":["Neptunium", 93, 237.05,"#f2a7c6"],
    "Pu":["Plutonium", 94, 244,"#f2a7c6"],
    "Am":["Americium", 95, 243,"#f2a7c6"],
    "Cm":["Curium", 96, 247,"#f2a7c6"],
    "Bk":["Berkelium", 97, 247,"#f2a7c6"],
    "Cf":["Californium", 98, 251,"#f2a7c6"],
    "Es":["Einsteinium", 99, 252,"#f2a7c6"],
    "Fm":["Fermium", 100, 257,"#f2a7c6"],
    "Md":["Mendelevium", 101, 258,"#f2a7c6"],
    "No":["Nobelium", 102, 259,"#f2a7c6"],
    "Lr":["Lawrencium", 103, 262,"#f2a7c6"],
    "Rf":["Rutherfordium", 104, 267,"#a7f2b9"],
    "Db":["Dubnium", 105, 262,"#a7f2b9"],
    "Sg":["Seaborgium", 106, 269,"#a7f2b9"],
    "Bh":["Bohrium", 107, 264,"#a7f2b9"],
    "Hs":["Hassium", 108, 269,"#a7f2b9"],
    "Mt":["Meitnerium", 109, 278,"unknown"],
    "Ds":["Darmstadtium", 110, 281,"unknown"],
    "Rg":["Roentgenium", 111, 282,"unknown"],
    "Cn":["Copernicium", 112, 285,"unknown"],
    "Nh":["Nihonium", 113, 286,"unknown"],
    "Fl":["Flerovium", 114, 289,"unknown"],
    "Mc":["Moscovium", 115, 289,"unknown"],
    "Lv":["Livermorium", 116, 293,"unknown"],
    "Ts":["Tennessine", 117, 294,"unknown"],
    "Og":["Oganesson", 118, 294,"unknown"]
}

function send(){
    document.getElementById("display").replaceChildren();
    let txtElm = document.getElementById("txt");
    let txt = txtElm.value;
    if(txt != ""){
        let finalArr = [];
        txt = txt.split("");
        let tempElm = ""
        for(let i = 0; i < txt.length; i++){
            if(txt[i] != " "){
                if(i != txt.length-1){
                    tempElm = txt[i].toUpperCase() + txt[i+1];
                }else{
                    tempElm = txt[i].toUpperCase();
                }
    
                if(tempElm in elms){
                    finalArr.push(tempElm);
                    txt.splice(i+1, 1);
                }else{
                    tempElm = txt[i].toUpperCase();
                    if(tempElm in elms){
                        finalArr.push(tempElm);
                    }else{
                        let keys = Object.keys(elms);
                        let chosenKey = "";
                        for(let j = 0; j < keys.length; j++){
                            if(keys[j][0] == tempElm){
                                chosenKey = keys[j];
                            }
                        }
                        finalArr.push(chosenKey);
                    }
                }
            }else{
                finalArr.push(" ");
            }
        }

        finalArr.map((i) => {
            console.log(elms[i]);
            let ptCont = document.createElement("div");
            if(i != " "){
                ptCont.className = "ptcont";
                ptCont.style.backgroundColor = elms[i][3];
                let name = document.createElement("h1");
                name.innerText = i;
                let fullName = document.createElement("p");
                fullName.innerText = elms[i][0];
                let atomicNum = document.createElement("p");
                atomicNum.innerText = elms[i][1];
                console.log(i);
                ptCont.appendChild(atomicNum);
                ptCont.appendChild(name);
                ptCont.appendChild(fullName);
                document.getElementById("display").appendChild(ptCont);
            }else{
                ptCont.className = "ptspace";
                document.getElementById("display").appendChild(ptCont);
                let br = document.createElement("br");
                document.getElementById("display").appendChild(br);
                document.getElementById("display").appendChild(br);
            }
        })
    }else{
        console.log("No text inputted");
    }
}