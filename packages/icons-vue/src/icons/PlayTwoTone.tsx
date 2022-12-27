// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayTwoTone: PlayTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayTwoToneSvg}></AntdIcon>;
};

PlayTwoTone.displayName = 'PlayTwoTone';
PlayTwoTone.inheritAttrs = false;
export default PlayTwoTone;