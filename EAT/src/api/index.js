import Course from "./course"
import Interaction from "./interaction"
import Lesson from "./lesson"
import Module from "./module"
import Section from "./section"

const repositories = {
  course: Course,
  interaction: Interaction,
  lesson: Lesson,
  module: Module,
  section: Section
}

export default  {
  get: name => repositories[name]
}
