const { response } = require('express');
const getProfileService = require('../service/get_profile')    
const saveProfile = require('../service/save_profile')
const calGpa = require('../service/calculator_gpa')

exports.getDetailProfile = async(req, res) => {
    const body = req.query.id
    const response = await getProfileService.getProfile(body)
    return res.send(response)
}
exports.saveDetailProfile = async(req, res) => {
    const body = req.body
    const response = await saveProfile.saveProfile(body)
    return res.send(response)
}
exports.getGpa = async(req, res) => {
    const body = req.body
    const response = await calGpa.getDataGpa(body)
    return res.send(response)
}
