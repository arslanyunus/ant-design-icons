// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleLeftOutline: ArrowCircleLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleLeftOutlineSvg}></AntdIcon>;
};

ArrowCircleLeftOutline.displayName = 'ArrowCircleLeftOutline';
ArrowCircleLeftOutline.inheritAttrs = false;
export default ArrowCircleLeftOutline;