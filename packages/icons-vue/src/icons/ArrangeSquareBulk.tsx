// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquareBulkSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquareBulk: ArrangeSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquareBulkSvg}></AntdIcon>;
};

ArrangeSquareBulk.displayName = 'ArrangeSquareBulk';
ArrangeSquareBulk.inheritAttrs = false;
export default ArrangeSquareBulk;