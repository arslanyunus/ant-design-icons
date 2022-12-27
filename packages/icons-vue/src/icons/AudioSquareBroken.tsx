// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/AudioSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioSquareBroken: AudioSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioSquareBrokenSvg}></AntdIcon>;
};

AudioSquareBroken.displayName = 'AudioSquareBroken';
AudioSquareBroken.inheritAttrs = false;
export default AudioSquareBroken;