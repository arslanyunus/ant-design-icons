// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquare2BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquare2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquare2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquare2Broken: ArrangeSquare2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquare2BrokenSvg}></AntdIcon>;
};

ArrangeSquare2Broken.displayName = 'ArrangeSquare2Broken';
ArrangeSquare2Broken.inheritAttrs = false;
export default ArrangeSquare2Broken;