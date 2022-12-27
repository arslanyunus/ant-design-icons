// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirrorBrokenSvg from '@ant-design/icons-svg/lib/asn/MirrorBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirrorBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirrorBroken: MirrorBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirrorBrokenSvg}></AntdIcon>;
};

MirrorBroken.displayName = 'MirrorBroken';
MirrorBroken.inheritAttrs = false;
export default MirrorBroken;