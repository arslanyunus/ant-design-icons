// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft2BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft2Bulk: ArrowLeft2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft2BulkSvg}></AntdIcon>;
};

ArrowLeft2Bulk.displayName = 'ArrowLeft2Bulk';
ArrowLeft2Bulk.inheritAttrs = false;
export default ArrowLeft2Bulk;