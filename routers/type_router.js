import express from 'express';
import { get } from '../api_service.js';
import { mapType } from '../mappers/type.js';

const typeRouter = express.Router();

typeRouter.get('/:typeName', async (req, res) => {
  const data = await get('type', req.params.typeName);
  res.send(mapType(data));
});

export default typeRouter;