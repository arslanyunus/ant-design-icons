// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeCircleBoldSvg from '@ant-design/icons-svg/lib/asn/ArrangeCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeCircleBold: ArrangeCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeCircleBoldSvg}></AntdIcon>;
};

ArrangeCircleBold.displayName = 'ArrangeCircleBold';
ArrangeCircleBold.inheritAttrs = false;
export default ArrangeCircleBold;