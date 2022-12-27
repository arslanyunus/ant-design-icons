// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirrorLinearSvg from '@ant-design/icons-svg/lib/asn/MirrorLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirrorLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirrorLinear: MirrorLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirrorLinearSvg}></AntdIcon>;
};

MirrorLinear.displayName = 'MirrorLinear';
MirrorLinear.inheritAttrs = false;
export default MirrorLinear;