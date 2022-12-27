// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquare2LinearSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquare2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquare2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquare2Linear: ArrangeSquare2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquare2LinearSvg}></AntdIcon>;
};

ArrangeSquare2Linear.displayName = 'ArrangeSquare2Linear';
ArrangeSquare2Linear.inheritAttrs = false;
export default ArrangeSquare2Linear;