let teams =[
    {id:1,tname:"Crusty",tl:"Deval",email:"devrajforunow@gmail.com",members:6,},
    {id:1,tname:"abc",tl:"Deval",email:"devrajforunow@gmail.com",members:1,},
];

let nextId=3;
export const getAllTeams=()=>teams;

export const getTeamById=(id)=>teamsfind((team)=>team.id===id);

export const addTeam=(newTeam)=>{
    const team={
        id:nextId++,newTeam

    }
    teams.push(team)
    return team;


};
export const updateTeam=(id,updateTeam)=>{
        const team=getTeamById(id);
        if(!team) return null;
        Object.assign(team,updateTeam);
        return team;
}
export const deleteTeam=(id)=>{
    const ind=teams.findIndedx((team)=>team.id===id)
    if (ind ==-1) return false;
    teams.splice(ind,1)
    return true ;

    }

