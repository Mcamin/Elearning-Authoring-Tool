export default [
  {
    id:"abf9cff0-454f-11ea-bf80-7bc9a6e09b90",
    title: "Course Title 0",
    description:"This is the description of  Course 0",
    languages:["en", "de", "fr", "es"],
    duration: 35,
    tags:["Web","Project","Hello","World"],
    thumbnail:{name: 'thumbnail.jpeg', url:"https://picsum.photos/600/300/?image=23"},
    contentIndex:{
      section1: 0,
      module1: 1,
      section2: 2,
      module2: 3,
    },
    content: [
      {"section1": [
          {"module1": [
              {"interaction1": "contentInterAction1"},
              {"lesson1": "lesson1"},
              {"glossary1": "glossary1"}
            ]}
        ]}
    ]
  },
  {
    id:"abf9cff0-454f-11ea-bf80-7bc9a6e09b91",
    title: "Course Title 1",
    description:"This is the description of  Course 1",
    languages:["en"],
    duration: 35,
    tags:["Web","Project","Hello","World"],
    thumbnail:{name: 'thumbnail.jpeg', url:"https://picsum.photos/600/300/?image=24"},
    contentIndex:{
      section1:'0',
      module1:'2',
      section2:'1',
      module2:'3',
    },
    content:[]
  },
  {
    id:"abf9cff0-454f-11ea-bf80-7bc9a6e09b92",
    title: "Course Title 2",
    description:"This is the description of  Course 2",
    languages:["en", "de"],
    duration: 35,
    tags:["Web","Project"],
    thumbnail:{name: 'thumbnail2.jpeg', url:"https://picsum.photos/600/300/?image=25"},
    contentIndex:{
      section1:'0',
      module1:'1',
      section2:'2',
      module2:'3',
    },
    content:[]
  },
  {
    id:"abf9cff0-454f-11ea-bf80-7bc9a6e09b93",
    title: "Course Title 3",
    description:"This is the description of  Course 3",
    languages:[ "fr", "es"],
    tags:["Web","Hello","World"],
    thumbnail:{name: 'thumbnail3.jpeg', url:"https://picsum.photos/600/300/?image=26"},
    contentIndex:{
      section1:'0',
      module1:'1',
      section2:'2',
      module2:'3',
    },
    content:[]
  },
]


