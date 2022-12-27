// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopySuccessLinearSvg from '@ant-design/icons-svg/lib/asn/CopySuccessLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopySuccessLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopySuccessLinear: CopySuccessLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopySuccessLinearSvg}></AntdIcon>;
};

CopySuccessLinear.displayName = 'CopySuccessLinear';
CopySuccessLinear.inheritAttrs = false;
export default CopySuccessLinear;