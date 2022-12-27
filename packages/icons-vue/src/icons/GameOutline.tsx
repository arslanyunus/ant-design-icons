// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameOutlineSvg from '@ant-design/icons-svg/lib/asn/GameOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameOutline: GameOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameOutlineSvg}></AntdIcon>;
};

GameOutline.displayName = 'GameOutline';
GameOutline.inheritAttrs = false;
export default GameOutline;