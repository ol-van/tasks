/**
 *
 * Imagine you have an external component and his props are not exported.
 * But you want to build your wrapper component based on external.
 * How to type `props`?
 *
 */
import { FC } from 'react';

export const ExternalComponent: FC<{ type: string }> = () => null;

interface Props {
}

export const YourComponent: FC<Props> = () => null;

