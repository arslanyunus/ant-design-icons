// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesigntoolsBulkSvg from '@ant-design/icons-svg/lib/asn/DesigntoolsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesigntoolsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesigntoolsBulk: DesigntoolsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesigntoolsBulkSvg}></AntdIcon>;
};

DesigntoolsBulk.displayName = 'DesigntoolsBulk';
DesigntoolsBulk.inheritAttrs = false;
export default DesigntoolsBulk;