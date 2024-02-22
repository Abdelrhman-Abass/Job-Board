type User ={
    email:string,
    phone:string,
    skills:string[]
    fullName:string,  //first name and last name combined
    _id:string,
    phone:string,

}


type Job ={
    addedBy : User,
    createdAt: string,
    expiryDate :string,
    jobDescription : string,
    jobLocation:string,
    jobTitle:string,
    seniorityLevel:string,
    softSkills:string[],
    technicalSkills:string[],
    updatedAt:string,
    workingTime:string,
    _id:string,
}

