// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight1BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowRight1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight1Bulk: ArrowRight1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight1BulkSvg}></AntdIcon>;
};

ArrowRight1Bulk.displayName = 'ArrowRight1Bulk';
ArrowRight1Bulk.inheritAttrs = false;
export default ArrowRight1Bulk;