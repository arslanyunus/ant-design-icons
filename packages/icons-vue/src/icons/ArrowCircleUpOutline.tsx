// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleUpOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleUpOutline: ArrowCircleUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleUpOutlineSvg}></AntdIcon>;
};

ArrowCircleUpOutline.displayName = 'ArrowCircleUpOutline';
ArrowCircleUpOutline.inheritAttrs = false;
export default ArrowCircleUpOutline;