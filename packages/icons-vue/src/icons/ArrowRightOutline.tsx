// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightOutline: ArrowRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightOutlineSvg}></AntdIcon>;
};

ArrowRightOutline.displayName = 'ArrowRightOutline';
ArrowRightOutline.inheritAttrs = false;
export default ArrowRightOutline;