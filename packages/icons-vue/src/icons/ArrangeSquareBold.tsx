// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquareBold: ArrangeSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquareBoldSvg}></AntdIcon>;
};

ArrangeSquareBold.displayName = 'ArrangeSquareBold';
ArrangeSquareBold.inheritAttrs = false;
export default ArrangeSquareBold;