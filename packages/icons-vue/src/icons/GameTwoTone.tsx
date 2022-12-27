// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameTwoToneSvg from '@ant-design/icons-svg/lib/asn/GameTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameTwoTone: GameTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameTwoToneSvg}></AntdIcon>;
};

GameTwoTone.displayName = 'GameTwoTone';
GameTwoTone.inheritAttrs = false;
export default GameTwoTone;