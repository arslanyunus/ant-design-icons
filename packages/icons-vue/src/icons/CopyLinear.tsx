// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyLinearSvg from '@ant-design/icons-svg/lib/asn/CopyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyLinear: CopyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyLinearSvg}></AntdIcon>;
};

CopyLinear.displayName = 'CopyLinear';
CopyLinear.inheritAttrs = false;
export default CopyLinear;