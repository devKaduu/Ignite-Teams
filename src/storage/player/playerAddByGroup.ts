import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";

import { playerGetByGroup } from "./playerGetByGroup";

import { PlayerStorageDTO } from "./playerStorageDTO";

export async function PlayerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playerGetByGroup(group); // Todos os players que ja tem

    const playerAlreadyExists = storedPlayers.filter( // Verificar se aquele player ja existe
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError(`Essa pessoa ja esta adicionada em um time aqui.`);
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
