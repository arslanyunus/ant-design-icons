// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircleBulkSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircleBulk: ArrangeCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircleBulkSvg}></AntdIcon>;
};

ArrangeCircleBulk.displayName = 'ArrangeCircleBulk';
ArrangeCircleBulk.inheritAttrs = false;
export default ArrangeCircleBulk;