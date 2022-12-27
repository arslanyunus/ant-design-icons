// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CdLinearSvg from '@ant-design/icons-svg/lib/asn/CdLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CdLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CdLinear: CdLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CdLinearSvg}></AntdIcon>;
};

CdLinear.displayName = 'CdLinear';
CdLinear.inheritAttrs = false;
export default CdLinear;