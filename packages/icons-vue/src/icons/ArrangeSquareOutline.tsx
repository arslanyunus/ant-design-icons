// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquareOutline: ArrangeSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquareOutlineSvg}></AntdIcon>;
};

ArrangeSquareOutline.displayName = 'ArrangeSquareOutline';
ArrangeSquareOutline.inheritAttrs = false;
export default ArrangeSquareOutline;