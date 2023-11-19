export const checkStoreIsExist = "select exists (select 1 from restaurant r where r.restaurant_id = ?) as flag";

export const insertMissionSql = "insert into mission (restaurant_id, mission_content, mission_deadline, mission_point) values (?, ?, ?, ?)";

export const getMissionByMissionIdSql = "select m.mission_id, r.restaurant_id, r.restaurant_name, m.mission_content, m.mission_deadline, m.mission_point "
+ "from mission m join restaurant r ON m.restaurant_id = r.restaurant_id "
+ "where m.mission_id = ?;";