import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * tailwindcss 충돌 방지 및 클래스명 합성해주는 함수
 * @example
 * ```ts
 * const className = cn('tw-bg-white tw-rounded-10', {
 *   'tw-text-blue050': color === 'blue',
 *   'tw-text-red050': color === 'red',
 *   'tw-text-grey050': color === 'grey',
 * })
 *
 * return <Component className={className} />
 * ```
 * @link
 * https://github.com/dcastil/tailwind-merge
 * @link
 * https://github.com/lukeed/clsx
 * @link
 * https://www.youtube.com/watch?v=re2JFITR7TI
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
