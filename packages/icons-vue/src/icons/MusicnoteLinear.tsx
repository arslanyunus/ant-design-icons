// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicnoteLinearSvg from '@ant-design/icons-svg/lib/asn/MusicnoteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicnoteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicnoteLinear: MusicnoteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicnoteLinearSvg}></AntdIcon>;
};

MusicnoteLinear.displayName = 'MusicnoteLinear';
MusicnoteLinear.inheritAttrs = false;
export default MusicnoteLinear;