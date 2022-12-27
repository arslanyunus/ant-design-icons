// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleDownOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleDownOutline: ArrowCircleDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleDownOutlineSvg}></AntdIcon>;
};

ArrowCircleDownOutline.displayName = 'ArrowCircleDownOutline';
ArrowCircleDownOutline.inheritAttrs = false;
export default ArrowCircleDownOutline;