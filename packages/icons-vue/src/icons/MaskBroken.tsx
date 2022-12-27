// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaskBrokenSvg from '@ant-design/icons-svg/lib/asn/MaskBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaskBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaskBroken: MaskBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaskBrokenSvg}></AntdIcon>;
};

MaskBroken.displayName = 'MaskBroken';
MaskBroken.inheritAttrs = false;
export default MaskBroken;