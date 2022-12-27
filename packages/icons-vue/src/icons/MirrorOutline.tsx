// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirrorOutlineSvg from '@ant-design/icons-svg/lib/asn/MirrorOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirrorOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirrorOutline: MirrorOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirrorOutlineSvg}></AntdIcon>;
};

MirrorOutline.displayName = 'MirrorOutline';
MirrorOutline.inheritAttrs = false;
export default MirrorOutline;