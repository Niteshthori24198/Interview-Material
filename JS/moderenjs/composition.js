
// Compositions : - 



const canStudy = {
    study: () => {
        console.log('Padh sakte hai');
    }
}


const canTeach = {
    teach: () => {
        console.log('Padha sakte hai');
    }
}


const canPunish = {
    punish: () => {
        console.log('Peet sakte hai');
    }
}





function Student() { }

function Teacher() { }

mixing(Student.prototype, canStudy, canTeach)

mixing(Teacher.prototype, canStudy, canTeach, canPunish)



function mixing(source, ...method) {
    
    Object.assign(source, ...method)
}




const t = new Teacher()

const s = new Student()




s.study()

s.teach()

t.study()

t.teach()

t.punish()