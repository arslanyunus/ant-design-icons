// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquare2BulkSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquare2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquare2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquare2Bulk: ArrangeSquare2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquare2BulkSvg}></AntdIcon>;
};

ArrangeSquare2Bulk.displayName = 'ArrangeSquare2Bulk';
ArrangeSquare2Bulk.inheritAttrs = false;
export default ArrangeSquare2Bulk;