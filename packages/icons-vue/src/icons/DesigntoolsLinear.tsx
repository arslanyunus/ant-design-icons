// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesigntoolsLinearSvg from '@ant-design/icons-svg/lib/asn/DesigntoolsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesigntoolsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesigntoolsLinear: DesigntoolsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesigntoolsLinearSvg}></AntdIcon>;
};

DesigntoolsLinear.displayName = 'DesigntoolsLinear';
DesigntoolsLinear.inheritAttrs = false;
export default DesigntoolsLinear;