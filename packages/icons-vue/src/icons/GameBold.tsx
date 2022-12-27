// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameBoldSvg from '@ant-design/icons-svg/lib/asn/GameBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameBold: GameBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameBoldSvg}></AntdIcon>;
};

GameBold.displayName = 'GameBold';
GameBold.inheritAttrs = false;
export default GameBold;