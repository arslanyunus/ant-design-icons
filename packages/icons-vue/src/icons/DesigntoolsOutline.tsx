// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesigntoolsOutlineSvg from '@ant-design/icons-svg/lib/asn/DesigntoolsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesigntoolsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesigntoolsOutline: DesigntoolsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesigntoolsOutlineSvg}></AntdIcon>;
};

DesigntoolsOutline.displayName = 'DesigntoolsOutline';
DesigntoolsOutline.inheritAttrs = false;
export default DesigntoolsOutline;