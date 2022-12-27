// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircle2BulkSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircle2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircle2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircle2Bulk: ArrangeCircle2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircle2BulkSvg}></AntdIcon>;
};

ArrangeCircle2Bulk.displayName = 'ArrangeCircle2Bulk';
ArrangeCircle2Bulk.inheritAttrs = false;
export default ArrangeCircle2Bulk;