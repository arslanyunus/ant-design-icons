// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicFilterBoldSvg from '@ant-design/icons-svg/lib/asn/MusicFilterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicFilterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicFilterBold: MusicFilterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFilterBoldSvg}></AntdIcon>;
};

MusicFilterBold.displayName = 'MusicFilterBold';
MusicFilterBold.inheritAttrs = false;
export default MusicFilterBold;