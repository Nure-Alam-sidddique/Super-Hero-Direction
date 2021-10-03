const programmers = [
  {
    id: 1,
    name: "Dennis Ritchie",
    role: "Computer Scientist",
    creator: "C Programming Language",
    age: 70,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/2.bp.blogspot.com/-GqbDdU4zyQo/Uwjje48KzOI/AAAAAAAACG4/cblGVCdXbBY/s1600/Dennis+Ritchie.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
    country: "USA",
    salary: 500000,
  },
  {
    id: 2,
    name: " Bjarne Stroustrup",
    role: "Computer Scientist",
    creator: "C++ Programming Language",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/3.bp.blogspot.com/-vA6b9fnfJoI/UwjjqFOqmNI/AAAAAAAACHA/sEQMP00onaw/s1600/Bjarne+Stroustrup.jpg?ezimgfmt=rs:400x300/rscb1/ng:webp/ngcb1",
    country: "USA",
    salary: 700000,
  },
  {
    id: 3,
    name: "James Gosling",
    role: "Computer Scientist",
    creator: "Java Programming Language",
    age: 65,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/1.bp.blogspot.com/-XTVhSIzm6T8/UwjlCPAeONI/AAAAAAAACIA/_VEtLp5256o/s1600/James+Gosling.jpg?ezimgfmt=rs:317x319/rscb1/ng:webp/ngcb1",
    country: "Canadian computer scientist",
    salary: 600000,
  },
  {
    id: 4,
    name: "Linus Torvalds",
    role: "Computer Scientist",
    creator: "Linux Kernel",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/3.bp.blogspot.com/-WFFYmpAjcbY/Uwjj4OJAi1I/AAAAAAAACHI/Q3IID-7Exao/s1600/Linus+Torvalds.jpeg?ezimgfmt=rs:337x399/rscb1/ng:webp/ngcb1",
    country: "USA",
    salary: 580000,
  },
  {
    id: 5,
    name: "Anders Hejlsberg",
    role: "Computer Scientist",
    creator: "C# Programming Language",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/4.bp.blogspot.com/-F3kb76UMANk/Uwq6fhjIEuI/AAAAAAAACIY/thLBBgmOuwM/s1600/Anders+Hejlsberg.jpg?ezimgfmt=rs:292x398/rscb1/ng:webp/ngcb1",
    country: " Danish software engineer",
    salary: 900000,
  },
  {
    id: 6,
    name: "Tim Berners-Lee",
    role: "Computer Scientist",
    creator: "inventor of the World Wide Web",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/3.bp.blogspot.com/-r4Lw1v8wP3o/UwjkHcoKMcI/AAAAAAAACHQ/41SzDLQs3M0/s1600/Tim+Berners-Lee.jpg?ezimgfmt=rs:320x320/rscb1/ng:webp/ngcb1",
    country: "UK",
    salary: 750000,
  },
  {
    id: 7,
    name: "Brian Kernighan",
    role: "Computer Scientist",
    creator: "Development of Unix",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/2.bp.blogspot.com/-vjmojesfTK0/UwjkPF_nLLI/AAAAAAAACHY/7cTOimc_e5g/s1600/Brian+Kernighan.jpg?ezimgfmt=rs:400x267/rscb1/ng:webp/ngcb1",
    country: "Canada",
    salary: 8500000,
  },
  {
    id: 8,
    name: "Ken Thompson",
    role: "Computer Scientist",
    creator: "Go programming language",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/4.bp.blogspot.com/-Zznu7fM9g30/UwjkeqBlcjI/AAAAAAAACHo/EHhf0RF-nF8/s1600/Ken+Thompson.jpg?ezimgfmt=rs:320x317/rscb1/ng:webp/ngcb1",
    country: "Denmark",
    salary: 9500000,
  },
  {
    id: 9,
    name: "Guido van Rossum",
    role: "Computer Scientist",
    creator: "Python programming language",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/4.bp.blogspot.com/-EtgZqoZX2dE/Uwjk3qbwbBI/AAAAAAAACH4/8vJw4USybms/s1600/Guido+van+Rossum.jpg?ezimgfmt=rs:296x398/rscb1/ng:webp/ngcb1",
    country: "USA",
    salary: 1500000,
  },
  {
    id: 10,
    name: "Donald Knuth",
    role: "Computer Scientist",
    creator: " Analysis of Algorithms",
    age: 60,
    image:
      "https://www.thecrazyprogrammer.com/ezoimgfmt/1.bp.blogspot.com/-S_87vSTDN60/UwjkX9yyl4I/AAAAAAAACHg/FImj-V0oPHE/s1600/Donald+Kuth.jpg?ezimgfmt=rs:337x399/rscb1/ng:webp/ngcb1",
    country: "USA",
    salary: 250000,
  },
  {
    id: 11,
    name: "Mark Zuckerberg",
    role: "Software Developer",
    creator: "Facebook",
    age: 43,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg",
    country: "USA",
    salary: 2500000,
  },
  {
    id: 12,
    name: "Rasmus Lerdorf",
    role: "Computer Scientist",
    creator: "PHP",
    age: 52,
    image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rasmus_Lerdorf_August_2014_%28cropped%29.JPG/220px-Rasmus_Lerdorf_August_2014_%28cropped%29.JPG",
   country: "Kingdom of Denmark",
    salary: 350000
  }
];