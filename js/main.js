import {
    getRocketMassTotal,
    getRocketPayloadWeightsTotal,
    getRocketHeightTotal,
    getRocketDiameterTotal,
    getRocketSecondStageCompositeFairingDiameterTotal,
    getRocketSecondStageCompositeFairingHeightTotal,
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal,
} from "./modules/example.js";

console.log(await getRocketSecondStageCompositeFairingHeightTotal())
