// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareUpOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareUpOutline: ArrowSquareUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareUpOutlineSvg}></AntdIcon>;
};

ArrowSquareUpOutline.displayName = 'ArrowSquareUpOutline';
ArrowSquareUpOutline.inheritAttrs = false;
export default ArrowSquareUpOutline;