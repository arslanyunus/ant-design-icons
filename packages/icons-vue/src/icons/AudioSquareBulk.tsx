// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioSquareBulkSvg from '@ant-design/icons-svg/lib/asn/AudioSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioSquareBulk: AudioSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioSquareBulkSvg}></AntdIcon>;
};

AudioSquareBulk.displayName = 'AudioSquareBulk';
AudioSquareBulk.inheritAttrs = false;
export default AudioSquareBulk;