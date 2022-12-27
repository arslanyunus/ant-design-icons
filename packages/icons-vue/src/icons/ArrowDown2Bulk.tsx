// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown2BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowDown2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown2Bulk: ArrowDown2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown2BulkSvg}></AntdIcon>;
};

ArrowDown2Bulk.displayName = 'ArrowDown2Bulk';
ArrowDown2Bulk.inheritAttrs = false;
export default ArrowDown2Bulk;