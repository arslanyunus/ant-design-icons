// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Warning2BulkSvg from '@ant-design/icons-svg/lib/asn/Warning2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Warning2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Warning2Bulk: Warning2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Warning2BulkSvg}></AntdIcon>;
};

Warning2Bulk.displayName = 'Warning2Bulk';
Warning2Bulk.inheritAttrs = false;
export default Warning2Bulk;