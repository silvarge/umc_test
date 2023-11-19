import { pool } from "../../config/db.connect";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { checkStoreIsExist, getMissionByMissionIdSql, insertMissionSql } from "./owner.sql";

export const addDBToMission = async (storeId, content, deadline, point) => {
    try {
        
        const conn = await pool.getConnection();

        const [check] = await pool.query(checkStoreIsExist, storeId);

        if(parseInt(check[0].flag)){
            const [insertResult] = await pool.query(insertMissionSql, [storeId, content, deadline, point]);
            const [mission] = await pool.query(getMissionByMissionIdSql, insertResult.insertId);
            conn.release();
            return mission[0];
        }else{
            conn.release();
            throw new BaseError(status.PARAMETER_IS_WRONG);
        }

    } catch (err) {
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}