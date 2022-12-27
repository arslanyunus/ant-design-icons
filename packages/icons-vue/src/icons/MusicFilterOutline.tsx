// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicFilterOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicFilterOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicFilterOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicFilterOutline: MusicFilterOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFilterOutlineSvg}></AntdIcon>;
};

MusicFilterOutline.displayName = 'MusicFilterOutline';
MusicFilterOutline.inheritAttrs = false;
export default MusicFilterOutline;