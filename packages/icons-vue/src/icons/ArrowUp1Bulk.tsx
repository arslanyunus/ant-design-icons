// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp1BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowUp1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp1Bulk: ArrowUp1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp1BulkSvg}></AntdIcon>;
};

ArrowUp1Bulk.displayName = 'ArrowUp1Bulk';
ArrowUp1Bulk.inheritAttrs = false;
export default ArrowUp1Bulk;