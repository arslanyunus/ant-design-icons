// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameboyBrokenSvg from '@ant-design/icons-svg/lib/asn/GameboyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameboyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameboyBroken: GameboyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameboyBrokenSvg}></AntdIcon>;
};

GameboyBroken.displayName = 'GameboyBroken';
GameboyBroken.inheritAttrs = false;
export default GameboyBroken;