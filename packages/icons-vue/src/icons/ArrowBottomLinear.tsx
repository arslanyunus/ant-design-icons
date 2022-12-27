// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBottomLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowBottomLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBottomLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBottomLinear: ArrowBottomLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBottomLinearSvg}></AntdIcon>;
};

ArrowBottomLinear.displayName = 'ArrowBottomLinear';
ArrowBottomLinear.inheritAttrs = false;
export default ArrowBottomLinear;