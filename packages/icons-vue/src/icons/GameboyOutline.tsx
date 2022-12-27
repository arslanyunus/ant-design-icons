// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameboyOutlineSvg from '@ant-design/icons-svg/lib/asn/GameboyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameboyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameboyOutline: GameboyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameboyOutlineSvg}></AntdIcon>;
};

GameboyOutline.displayName = 'GameboyOutline';
GameboyOutline.inheritAttrs = false;
export default GameboyOutline;