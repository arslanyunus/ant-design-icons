// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown1BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowDown1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown1Bulk: ArrowDown1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown1BulkSvg}></AntdIcon>;
};

ArrowDown1Bulk.displayName = 'ArrowDown1Bulk';
ArrowDown1Bulk.inheritAttrs = false;
export default ArrowDown1Bulk;