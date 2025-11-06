import {
  addCustomChains,
  validateAddress,
  validateChainId,
  validateFieldsAndOmit,
} from "../middlewares";
import {
  getContractAllChainsEndpoint,
  getContractEndpoint,
  listContractsEndpoint,
} from "./lookup.handlers";

import { Router } from "express";

const router = Router();

router
  .route("/contract/all-chains/:address")
  .get(validateAddress, getContractAllChainsEndpoint);

router
  .route("/contracts/:chainId")
  .get(addCustomChains, validateChainId, listContractsEndpoint);

router
  .route("/contract/:chainId/:address")
  .get(
    addCustomChains,
    validateChainId,
    validateAddress,
    validateFieldsAndOmit,
    getContractEndpoint,
  );

export default router;
