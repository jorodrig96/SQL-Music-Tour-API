const stages = require('express').Router();
const db = require('../models');
const { Stage } = db;
const { Op } = require('sequelize');

// find all stages
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [['stage_name', 'ASC']],
            where: {
                stage_name: { [Op.like]: `%${req.query.stage_name ? req.query.stage_name : '' }%` } 
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//find an stage 
//http://localhost:5150/stages/1
stages.get('/:id', async(req,res) => {
    try{
        const foundStages = await Stage.findOne({
            where: { stage_id : req.params.id,
                stage_name: { [Op.like]: `%${req.query.stage_name ? req.query.stage_name : '' }%` } 
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// create a stage 
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// update a stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// delete a stage
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = stages;