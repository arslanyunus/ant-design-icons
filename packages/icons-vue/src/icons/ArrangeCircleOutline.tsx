// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircleOutline: ArrangeCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircleOutlineSvg}></AntdIcon>;
};

ArrangeCircleOutline.displayName = 'ArrangeCircleOutline';
ArrangeCircleOutline.inheritAttrs = false;
export default ArrangeCircleOutline;