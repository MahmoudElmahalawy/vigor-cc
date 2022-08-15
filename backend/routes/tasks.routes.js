const express = require("express");

const Task = require("../models/task.model");

const router = express.Router();

router.get("/", async (req, res) => {
	const tasks = await Task.find();
	res.send(tasks);
});

router.get("/:id", async (req, res) => {
	const task = await Task.findById(req.params.id);
	if (!task) return res.status(404).send();
	res.send(task);
});

router.post("/", async (req, res) => {
	if (!req.body.title || !req.body.description) return res.status(400).send("Title and Description are required.");

	const task = new Task({ title: req.body.title, description: req.body.description });
	await task.save();

	res.status(201).send(task);
});

router.put("/:id", async (req, res) => {
	if (!req.body.title || !req.body.description) return res.status(400).send("Title and Description are required.");

	const task = await Task.findByIdAndUpdate(req.params.id, {
		title: req.body.title,
		description: req.body.description,
	});

	await task.save();

	res.status(201).send(task);
});

router.delete("/:id", async (req, res) => {
	const task = await Task.findByIdAndDelete(req.params.id);

	if (!task) return res.status(404).send("The task with the given ID was not found.");

	res.status(204).send();
});

module.exports = router;
