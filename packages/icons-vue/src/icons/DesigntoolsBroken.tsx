// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesigntoolsBrokenSvg from '@ant-design/icons-svg/lib/asn/DesigntoolsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesigntoolsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesigntoolsBroken: DesigntoolsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesigntoolsBrokenSvg}></AntdIcon>;
};

DesigntoolsBroken.displayName = 'DesigntoolsBroken';
DesigntoolsBroken.inheritAttrs = false;
export default DesigntoolsBroken;