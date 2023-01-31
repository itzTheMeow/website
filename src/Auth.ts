import { writable } from "svelte/store";
import type { Account } from "../server/struct";

export const MyAccount = writable<Account | null>(null);
