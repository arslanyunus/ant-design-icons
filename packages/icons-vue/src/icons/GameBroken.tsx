// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameBrokenSvg from '@ant-design/icons-svg/lib/asn/GameBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameBroken: GameBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameBrokenSvg}></AntdIcon>;
};

GameBroken.displayName = 'GameBroken';
GameBroken.inheritAttrs = false;
export default GameBroken;