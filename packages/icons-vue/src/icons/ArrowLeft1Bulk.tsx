// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft1BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft1Bulk: ArrowLeft1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft1BulkSvg}></AntdIcon>;
};

ArrowLeft1Bulk.displayName = 'ArrowLeft1Bulk';
ArrowLeft1Bulk.inheritAttrs = false;
export default ArrowLeft1Bulk;