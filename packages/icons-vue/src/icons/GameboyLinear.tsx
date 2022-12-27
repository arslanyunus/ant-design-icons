// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameboyLinearSvg from '@ant-design/icons-svg/lib/asn/GameboyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameboyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameboyLinear: GameboyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameboyLinearSvg}></AntdIcon>;
};

GameboyLinear.displayName = 'GameboyLinear';
GameboyLinear.inheritAttrs = false;
export default GameboyLinear;