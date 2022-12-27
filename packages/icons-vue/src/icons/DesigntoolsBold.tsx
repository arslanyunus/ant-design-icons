// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesigntoolsBoldSvg from '@ant-design/icons-svg/lib/asn/DesigntoolsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesigntoolsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesigntoolsBold: DesigntoolsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesigntoolsBoldSvg}></AntdIcon>;
};

DesigntoolsBold.displayName = 'DesigntoolsBold';
DesigntoolsBold.inheritAttrs = false;
export default DesigntoolsBold;