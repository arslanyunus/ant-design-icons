// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight2BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowRight2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight2Bulk: ArrowRight2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight2BulkSvg}></AntdIcon>;
};

ArrowRight2Bulk.displayName = 'ArrowRight2Bulk';
ArrowRight2Bulk.inheritAttrs = false;
export default ArrowRight2Bulk;