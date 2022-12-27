// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquare2BoldSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquare2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquare2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquare2Bold: ArrangeSquare2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquare2BoldSvg}></AntdIcon>;
};

ArrangeSquare2Bold.displayName = 'ArrangeSquare2Bold';
ArrangeSquare2Bold.inheritAttrs = false;
export default ArrangeSquare2Bold;