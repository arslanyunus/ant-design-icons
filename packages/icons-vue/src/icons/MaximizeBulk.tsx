// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeBulkSvg from '@ant-design/icons-svg/lib/asn/MaximizeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeBulk: MaximizeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeBulkSvg}></AntdIcon>;
};

MaximizeBulk.displayName = 'MaximizeBulk';
MaximizeBulk.inheritAttrs = false;
export default MaximizeBulk;