/**
 * type-aliases to get rid of primitive obsession:
 * @see https://refactoring.guru/smells/primitive-obsession
 */

type Nullable<T> = T | null;
type WithId<T> = T & { id?: Id };

type Keys<T extends Record<string, unknown>> = keyof T;
type Values<T extends Record<string, unknown>> = T[Keys<T>];

type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

type Uuid = string;
type Url = string;
type Email = string;
type DateTimeString = string;
