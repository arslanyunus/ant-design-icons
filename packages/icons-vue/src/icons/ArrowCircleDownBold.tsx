// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleDownBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleDownBold: ArrowCircleDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleDownBoldSvg}></AntdIcon>;
};

ArrowCircleDownBold.displayName = 'ArrowCircleDownBold';
ArrowCircleDownBold.inheritAttrs = false;
export default ArrowCircleDownBold;