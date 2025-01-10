import { User } from "../models/User.js"
import { Project } from "../models/Project.js"
import { Op } from "sequelize"

const crew1ids = [2, 4, 5, 6]
const crew2ids = [3, 7, 8, 9]
const project1ids = [1, 3, 5]
const project2ids = [2, 4, 6]

export const updateCrewIds = async () => {
  await User.update({ crew_id: 1 }, { where: {
      id: {
        [Op.in]: crew1ids,
      },
    } 
  })
  console.log('Crew 1 set')
  await User.update({ crew_id: 2 }, { where: {
      id: {
        [Op.in]: crew2ids,
      },
    } 
  })
  console.log('Crew 2 set')
  await Project.update({ project_crew_id: 1 }, { where: {
      id: {
        [Op.in]: project1ids,
      },
    } 
  })
  console.log('Crew 1 jobs set')
  await Project.update({ project_crew_id: 2 }, { where: {
      id: {
        [Op.in]: project2ids,
      },
    } 
  })
  console.log('Crew 2 jobs set')
}
