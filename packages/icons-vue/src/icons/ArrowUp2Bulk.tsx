// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp2BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowUp2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp2Bulk: ArrowUp2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp2BulkSvg}></AntdIcon>;
};

ArrowUp2Bulk.displayName = 'ArrowUp2Bulk';
ArrowUp2Bulk.inheritAttrs = false;
export default ArrowUp2Bulk;