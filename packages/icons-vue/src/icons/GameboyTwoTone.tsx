// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GameboyTwoToneSvg from '@ant-design/icons-svg/lib/asn/GameboyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GameboyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GameboyTwoTone: GameboyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameboyTwoToneSvg}></AntdIcon>;
};

GameboyTwoTone.displayName = 'GameboyTwoTone';
GameboyTwoTone.inheritAttrs = false;
export default GameboyTwoTone;