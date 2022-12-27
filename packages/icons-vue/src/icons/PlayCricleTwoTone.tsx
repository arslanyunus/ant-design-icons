// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCricleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCricleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCricleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCricleTwoTone: PlayCricleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCricleTwoToneSvg}></AntdIcon>;
};

PlayCricleTwoTone.displayName = 'PlayCricleTwoTone';
PlayCricleTwoTone.inheritAttrs = false;
export default PlayCricleTwoTone;