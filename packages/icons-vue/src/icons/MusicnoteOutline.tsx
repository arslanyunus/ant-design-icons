// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicnoteOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicnoteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicnoteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicnoteOutline: MusicnoteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicnoteOutlineSvg}></AntdIcon>;
};

MusicnoteOutline.displayName = 'MusicnoteOutline';
MusicnoteOutline.inheritAttrs = false;
export default MusicnoteOutline;