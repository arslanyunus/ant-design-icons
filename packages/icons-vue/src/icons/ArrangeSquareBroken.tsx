// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrangeSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrangeSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrangeSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrangeSquareBroken: ArrangeSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrangeSquareBrokenSvg}></AntdIcon>;
};

ArrangeSquareBroken.displayName = 'ArrangeSquareBroken';
ArrangeSquareBroken.inheritAttrs = false;
export default ArrangeSquareBroken;