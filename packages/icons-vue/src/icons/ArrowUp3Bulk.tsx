// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp3BulkSvg from '@ant-design/icons-svg/lib/asn/ArrowUp3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp3Bulk: ArrowUp3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp3BulkSvg}></AntdIcon>;
};

ArrowUp3Bulk.displayName = 'ArrowUp3Bulk';
ArrowUp3Bulk.inheritAttrs = false;
export default ArrowUp3Bulk;