// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItemBulkSvg from '@ant-design/icons-svg/lib/asn/ForwardItemBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItemBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItemBulk: ForwardItemBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItemBulkSvg}></AntdIcon>;
};

ForwardItemBulk.displayName = 'ForwardItemBulk';
ForwardItemBulk.inheritAttrs = false;
export default ForwardItemBulk;