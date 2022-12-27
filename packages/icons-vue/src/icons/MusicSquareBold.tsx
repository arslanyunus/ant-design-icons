// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareBoldSvg from '@ant-design/icons-svg/lib/asn/MusicSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareBold: MusicSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareBoldSvg}></AntdIcon>;
};

MusicSquareBold.displayName = 'MusicSquareBold';
MusicSquareBold.inheritAttrs = false;
export default MusicSquareBold;