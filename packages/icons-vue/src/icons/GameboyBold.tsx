// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameboyBoldSvg from '@ant-design/icons-svg/lib/asn/GameboyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameboyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameboyBold: GameboyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameboyBoldSvg}></AntdIcon>;
};

GameboyBold.displayName = 'GameboyBold';
GameboyBold.inheritAttrs = false;
export default GameboyBold;