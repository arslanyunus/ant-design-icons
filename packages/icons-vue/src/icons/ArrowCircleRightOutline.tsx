// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleRightOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleRightOutline: ArrowCircleRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleRightOutlineSvg}></AntdIcon>;
};

ArrowCircleRightOutline.displayName = 'ArrowCircleRightOutline';
ArrowCircleRightOutline.inheritAttrs = false;
export default ArrowCircleRightOutline;