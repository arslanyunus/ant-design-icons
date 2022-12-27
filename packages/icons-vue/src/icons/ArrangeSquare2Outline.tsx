// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquare2OutlineSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquare2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquare2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquare2Outline: ArrangeSquare2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquare2OutlineSvg}></AntdIcon>;
};

ArrangeSquare2Outline.displayName = 'ArrangeSquare2Outline';
ArrangeSquare2Outline.inheritAttrs = false;
export default ArrangeSquare2Outline;