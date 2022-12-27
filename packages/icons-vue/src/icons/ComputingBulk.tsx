// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComputingBulkSvg from '@ant-design/icons-svg/lib/asn/ComputingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComputingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComputingBulk: ComputingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputingBulkSvg}></AntdIcon>;
};

ComputingBulk.displayName = 'ComputingBulk';
ComputingBulk.inheritAttrs = false;
export default ComputingBulk;