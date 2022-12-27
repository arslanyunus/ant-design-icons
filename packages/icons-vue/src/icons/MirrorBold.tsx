// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirrorBoldSvg from '@ant-design/icons-svg/lib/asn/MirrorBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirrorBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirrorBold: MirrorBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirrorBoldSvg}></AntdIcon>;
};

MirrorBold.displayName = 'MirrorBold';
MirrorBold.inheritAttrs = false;
export default MirrorBold;