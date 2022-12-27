// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioSquareBoldSvg from '@ant-design/icons-svg/lib/asn/AudioSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioSquareBold: AudioSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioSquareBoldSvg}></AntdIcon>;
};

AudioSquareBold.displayName = 'AudioSquareBold';
AudioSquareBold.inheritAttrs = false;
export default AudioSquareBold;