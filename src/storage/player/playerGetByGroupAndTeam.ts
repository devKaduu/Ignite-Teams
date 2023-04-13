import { playerGetByGroup } from "./playerGetByGroup";

export async function PlayerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playerGetByGroup(group);
    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
