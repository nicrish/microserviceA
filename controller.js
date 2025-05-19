import mongoose from "mongoose";
import { eventSchema } from './models.js';

const Ev = mongoose.model("Ev", eventSchema);

export const addNewEvent = async (req, res) => {
  try {
    const newEvent = new Ev(req.body);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const getAllEvents = async (req, res) => {
  try {
    const events = await Ev.find({});
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const getEventByID = async (req, res) => {
  try {

    const { eventID } = req.params;
    console.log("Looking for ID:", req.params.eventID);
    const event = await Ev.findById(eventID);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const getEventByName = async (req, res) => {
  try {

    const { eventName } = req.params;
    console.log("Looking for name:", req.params.eventName);
    const event = await Ev.findOne({name: eventName});
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const updateEventByID = async (req, res) => {
  try {
    const { eventID } = req.params;
    const updatedEvent = await Ev.findByIdAndUpdate(eventID, req.body, { new: true });
    if (!updatedEvent) return res.status(404).json({ error: "Event not found" });
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export const updateEventByName = async (req, res) => {
  try {
    const { eventName } = req.params;
    const updatedEvent = await Ev.findOneAndUpdate({name : eventName}, req.body, { new: true });
    if (!updatedEvent) return res.status(404).json({ error: "Event not found" });
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export const deleteEventByID = async (req, res) => {
  try {
    const { eventID } = req.params;
    const result = await Ev.deleteOne({ _id: eventID });
    if (result.deletedCount === 0) return res.status(404).json({ error: "Event not found" });
    res.json({ message: "Successfully deleted event from records" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export const deleteEventByName= async (req, res) => {
  try {
    const { eventName } = req.params;
    const result = await Ev.deleteOne({ name: eventName });
    if (result.deletedCount === 0) return res.status(404).json({ error: "Event not found" });
    res.json({ message: "Successfully deleted event from records" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

