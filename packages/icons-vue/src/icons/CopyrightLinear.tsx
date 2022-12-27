// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightLinearSvg from '@ant-design/icons-svg/lib/asn/CopyrightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightLinear: CopyrightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightLinearSvg}></AntdIcon>;
};

CopyrightLinear.displayName = 'CopyrightLinear';
CopyrightLinear.inheritAttrs = false;
export default CopyrightLinear;