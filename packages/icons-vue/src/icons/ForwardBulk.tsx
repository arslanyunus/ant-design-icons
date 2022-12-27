// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardBulkSvg from '@ant-design/icons-svg/lib/asn/ForwardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardBulk: ForwardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardBulkSvg}></AntdIcon>;
};

ForwardBulk.displayName = 'ForwardBulk';
ForwardBulk.inheritAttrs = false;
export default ForwardBulk;