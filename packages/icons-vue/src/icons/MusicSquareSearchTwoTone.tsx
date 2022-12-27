// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicSquareSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareSearchTwoTone: MusicSquareSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareSearchTwoToneSvg}></AntdIcon>;
};

MusicSquareSearchTwoTone.displayName = 'MusicSquareSearchTwoTone';
MusicSquareSearchTwoTone.inheritAttrs = false;
export default MusicSquareSearchTwoTone;