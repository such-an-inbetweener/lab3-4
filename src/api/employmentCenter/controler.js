import GasStation from "./model";
import mongoose from "mongoose";
import EmploymentCenter from "./model";


const employmentCenterKeepingControler = {
    get: async (req, res) => {
        try {
            
            const result = await EmploymentCenter.find({}).lean()
            let isUnemployed = 0;
            let infoMan = data.filter(info => 2020 - info.accountdate.getFullYear > 60);
            let infoWoman = data.filter(info => 2020 - info.accountdate.getFullYear > 55);

            result.forEach(element => {
                if (element.accountdate.getFullYear == req.query.a) {
                    isUnemployed+=infoMan[i].id;
                    isUnemployed+=infoWoman[i].id;
                }
            });
            var ress = "Кількість безробітних = "+String(isUnemployed);
            if (req.query.a) {
                res.send(ress)
            }
            res.send(result);
            client.close();
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getById: async (req, res) =>{
        try {
            const employmentCenters = await employmentCenters.findById(req.params.id);
            if (employmentCenters) 
                res.send(employmentCenters);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    delete: async (req, res) =>{
        try {
            const employmentCenters = await EmploymentCenters.findByIdAndDelete(req.params.id);
            if (employmentCenters) 
                res.send(employmentCenters);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    post: async (req, res) =>{
        try {
            let newEmploymentCenter;
            let employmentCenter;
            if (Array.isArray(req.body)) {
                req.body.forEach(async element=>{
                    newEmploymentCenter = new EmploymentCenter(element);
                    employmentCenter = await newEmploymentCenter.save();
                })
            }
            else {
                newEmploymentCenter = new EmploymentCenter(req.body);
                employmentCenter = await newEmploymentCenter.save(); 
            }
          
            res.send("Fine :)");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    patch: async (req, res) =>{
        try {
            const employmentCenter = await employmentCenter.findOneAndUpdate(req.params.id, req.body, {
                returnOriginal: false
            } );
            if (employmentCenter) 
                res.send(employmentCenter);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export default employmentCenterKeepingControler;