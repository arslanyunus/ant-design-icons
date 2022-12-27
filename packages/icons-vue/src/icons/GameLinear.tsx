// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameLinearSvg from '@ant-design/icons-svg/lib/asn/GameLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameLinear: GameLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameLinearSvg}></AntdIcon>;
};

GameLinear.displayName = 'GameLinear';
GameLinear.inheritAttrs = false;
export default GameLinear;