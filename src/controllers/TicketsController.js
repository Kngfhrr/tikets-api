const { Router } = require('express');
const logger = require('../services/LoggerService');
const TicketService = require('../services/TicketService');
const { errors } = require('../constants/messages');

const TicketsRouter = Router();

TicketsRouter.get('/', async (req, res) => {
  try {
    const tickets = await TicketService.getTickets();
    return res.status(200).json(tickets);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

module.exports = TicketsRouter;
