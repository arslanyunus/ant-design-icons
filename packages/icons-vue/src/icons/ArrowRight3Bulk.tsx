// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight3BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowRight3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight3Bulk: ArrowRight3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight3BulkSvg}></AntdIcon>;
};

ArrowRight3Bulk.displayName = 'ArrowRight3Bulk';
ArrowRight3Bulk.inheritAttrs = false;
export default ArrowRight3Bulk;