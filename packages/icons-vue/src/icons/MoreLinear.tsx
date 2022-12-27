// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreLinearSvg from '@ant-design/icons-svg/lib/asn/MoreLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreLinear: MoreLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreLinearSvg}></AntdIcon>;
};

MoreLinear.displayName = 'MoreLinear';
MoreLinear.inheritAttrs = false;
export default MoreLinear;